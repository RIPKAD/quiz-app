/* Two-level menu:
   catalog.js  → subjects
   topics/*.js → banks inside a subject
   banks/*.js  → let question = [ [prompt, answer], ... ]
*/

let questions = [];
let queue = [];
let n = 0;
let locked = false;
let currentChoices = [];
let correctIndex = -1;
let currentTopic = null;
let currentPack = null;

const el = {};
function $(id) { return document.getElementById(id); }

function init() {
  [
    "home", "banks", "quiz", "topic-list", "bank-list",
    "qu_num", "qu", "diagram-wrap", "choices", "prompt", "feedback",
    "next_q", "back-topics", "back-banks", "topic-title",
    "topic-heading", "banks-title", "banks-lede"
  ].forEach((id) => { el[id] = $(id); });

  renderTopicMenu();
  el["next_q"].addEventListener("click", nextQu);
  el["back-topics"].addEventListener("click", showHome);
  el["back-banks"].addEventListener("click", showBankMenu);
}

function show(screen) {
  el.home.hidden = screen !== "home";
  el.banks.hidden = screen !== "banks";
  el.quiz.hidden = screen !== "quiz";
}

function resetQuizState() {
  questions = [];
  queue = [];
  n = 0;
  locked = false;
  currentChoices = [];
  correctIndex = -1;
}

function showHome() {
  resetQuizState();
  currentTopic = null;
  currentPack = null;
  show("home");
}

function renderTopicMenu() {
  el["topic-list"].replaceChildren();
  CATALOG.forEach((topic) => {
    const btn = document.createElement("button");
    btn.className = "bank";
    btn.type = "button";
    btn.textContent = topic.title;
    btn.addEventListener("click", () => loadTopic(topic));
    el["topic-list"].appendChild(btn);
  });
}

function absoluteUrl(src) {
  return new URL(src, window.location.href).href;
}

async function evalDataFile(src, exportName) {
  if (location.protocol === "http:" || location.protocol === "https:") {
    const res = await fetch(src, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Could not load " + src + " (HTTP " + res.status + ")");
    }
    const text = await res.text();
    try {
      return new Function(text + "\n; return " + exportName + ";")();
    } catch (err) {
      throw new Error(src + " failed to run: " + err.message);
    }
  }
  return loadViaPageScript(src, exportName);
}

function readExport(exportName) {
  if (exportName === "topicPack" && typeof topicPack !== "undefined") return topicPack;
  if (exportName === "question" && typeof question !== "undefined") return question;
  if (typeof window[exportName] !== "undefined") return window[exportName];
  return undefined;
}

function loadViaPageScript(src, exportName) {
  return new Promise((resolve, reject) => {
    const prev = document.getElementById("data-script");
    if (prev) prev.remove();

    const script = document.createElement("script");
    script.id = "data-script";
    script.src = absoluteUrl(src) + "?t=" + Date.now();
    script.onload = function () {
      const value = readExport(exportName);
      if (value === undefined) {
        reject(new Error(
          src + " loaded but did not define " + exportName + ".\n" +
          "If this is a bank file, change the first line from  let question =  to  var question ="
        ));
        return;
      }
      resolve(value);
    };
    script.onerror = function () {
      reject(new Error(
        "Could not load " + src + "\nLooked for:\n" + absoluteUrl(src) + "\n" +
        "That file must sit inside the same quiz-app folder as Quiz.html."
      ));
    };
    document.body.appendChild(script);
  });
}

async function loadTopic(topic) {
  currentTopic = topic;
  resetQuizState();
  try {
    const pack = await evalDataFile(topic.file, "topicPack");
    if (!pack || !Array.isArray(pack.banks)) {
      alert(topic.file + " must define var topicPack = { title, banks }.");
      return;
    }
    currentPack = pack;
    showBankMenu();
  } catch (err) {
    alert(err.message + "\nCheck commas in the topic file and use forward slashes in paths.");
  }
}

function showBankMenu() {
  resetQuizState();
  if (!currentPack) {
    showHome();
    return;
  }

  el["topic-heading"].textContent = currentPack.title || currentTopic.title;
  el["banks-title"].textContent = currentPack.title || "Quiz banks";
  el["bank-list"].replaceChildren();

  const banks = Array.isArray(currentPack.banks) ? currentPack.banks : [];
  if (!banks.length) {
    el["banks-lede"].textContent = "No banks in this topic yet. Add entries to " + currentTopic.file + ".";
  } else {
    el["banks-lede"].textContent = banks.length + " bank" + (banks.length === 1 ? "" : "s") + ". Pick one to start.";
    banks.forEach((bank, i) => {
      const btn = document.createElement("button");
      btn.className = "bank";
      btn.type = "button";
      btn.textContent = bank.title || ("Bank " + (i + 1));
      btn.addEventListener("click", () => openBank(bank));
      el["bank-list"].appendChild(btn);
    });
  }

  show("banks");
}

async function openBank(bank) {
  resetQuizState();
  if (bank.questions && bank.questions.length) {
    startQuiz(bank.title, bank.questions);
    return;
  }
  if (!bank.file) {
    alert("That bank has no file and no inline questions.");
    return;
  }
  try {
    const raw = await evalDataFile(bank.file, "question");
    if (!raw || !raw.length) {
      alert(bank.file + " must define let question = [ ... ].");
      return;
    }
    startQuiz(bank.title, raw);
  } catch (err) {
    alert(err.message + "\nCheck the path in the topic file.");
  }
}

function normalize(raw) {
  return raw.map((item, i) => {
    if (Array.isArray(item)) {
      return {
        id: i,
        prompt: String(item[0] ?? "").trim(),
        answer: String(item[1] ?? "").trim(),
        diagram: item[2] ? { src: item[2], alt: String(item[0] ?? "").trim() } : null
      };
    }
    return {
      id: i,
      prompt: item.prompt,
      answer: item.answer,
      diagram: item.diagram || null
    };
  }).filter((q) => q.prompt && q.answer);
}

function shuffledIndices(len) {
  return shuffle(Array.from({ length: len }, (_, i) => i));
}

function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickChoices(correctId, count) {
  const pool = questions.map((_, i) => i).filter((i) => i !== correctId);
  const others = shuffle(pool).slice(0, Math.min(count - 1, pool.length));
  return shuffle([correctId, ...others]);
}

function startQuiz(title, raw) {
  questions = normalize(raw);
  if (questions.length < 3) {
    alert("Need at least 3 items so there are two distractors.");
    return;
  }
  queue = shuffledIndices(questions.length);
  n = 0;
  el["topic-title"].textContent = title;
  show("quiz");
  writeQu();
}

function renderDiagram(diagram) {
  el["diagram-wrap"].replaceChildren();
  if (!diagram || !diagram.src) {
    el["diagram-wrap"].hidden = true;
    return;
  }
  el["diagram-wrap"].hidden = false;
  const img = document.createElement("img");
  img.className = "quiz-diagram";
  img.src = diagram.src;
  img.alt = diagram.alt || "";
  img.decoding = "async";
  el["diagram-wrap"].appendChild(img);
}

function writeQu() {
  locked = false;
  n += 1;
  const qid = queue[0];
  const q = questions[qid];

  el["qu_num"].textContent = "Question " + n + " · " + queue.length + " remaining";
  el.qu.innerHTML = q.prompt;
  renderDiagram(q.diagram);

  currentChoices = pickChoices(qid, 3);
  correctIndex = currentChoices.indexOf(qid);

  el.choices.replaceChildren();
  currentChoices.forEach((choiceId, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice";
    btn.innerHTML = (i + 1) + ") " + questions[choiceId].answer;
    btn.addEventListener("click", () => checkAnswer(i, btn));
    el.choices.appendChild(btn);
  });

  el.prompt.textContent = "Tap the matching definition.";
  el.feedback.textContent = "";
  el.feedback.className = "";
  el["next_q"].hidden = true;

  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise([el.qu, el.choices]).catch(() => {});
  } else if (window.MathJax && MathJax.typeset) {
    MathJax.typeset();
  }
}

function checkAnswer(i, btn) {
  if (locked) return;
  locked = true;

  const buttons = [...el.choices.children];
  buttons.forEach((b) => { b.disabled = true; });
  buttons[correctIndex].classList.add("correct");

  if (i === correctIndex) {
    el.feedback.textContent = "That's correct.";
    el.feedback.className = "ok";
    queue.shift();
  } else {
    btn.classList.add("wrong");
    el.feedback.innerHTML = "The correct answer is: " + questions[queue[0]].answer;
    el.feedback.className = "bad";
    queue.push(queue[0]);
    queue.shift();
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([el.feedback]).catch(() => {});
    }
  }

  el.prompt.textContent = "";
  el["next_q"].hidden = false;
  el["next_q"].textContent = queue.length ? "Next question" : "See results";
}

function nextQu() {
  if (!queue.length) {
    el["qu_num"].textContent = "Quiz complete";
    el.qu.textContent = "You answered every item correctly, including retries.";
    el["diagram-wrap"].hidden = true;
    el["diagram-wrap"].replaceChildren();
    el.choices.replaceChildren();
    el.prompt.textContent = "";
    el.feedback.textContent = "";
    el["next_q"].hidden = true;
    return;
  }
  writeQu();
}

document.addEventListener("DOMContentLoaded", init);
