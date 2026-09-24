Geometry / Linear Algebra quiz — local first
===========================================

This is your existing Quiz.htm engine, adapted so it can run on a laptop
and later as a static website, with optional diagrams per question.

How to run on the laptop
------------------------
Do not double-click Quiz.html if diagrams or topic files fail to load.

In this folder:

    python3 -m http.server 8080

Then open http://localhost:8080/Quiz.html

On Windows PowerShell from this folder:

    python -m http.server 8080

Menus
-----
1. catalog.js lists subjects (Geometry, Linear Algebra, Topology, Measure Theory).
2. topics/<subject>.js lists the quiz banks in that subject.
3. banks/<name>.js is still your original:

       let question = [ ["Prompt:", "answer text"], ... ];

Add another bank to Geometry
----------------------------
1. Put the file in banks/ (same [prompt, answer] format)
2. Add one line to topics/geometry.js:

       { title: "Circles", file: "banks/circles.js" },

Add a new subject
-----------------
1. Create topics/real-analysis.js:

       var topicPack = {
         title: "Real Analysis",
         banks: [
           { title: "Sequences", file: "banks/sequences.js" }
         ]
       };

2. Add a line to catalog.js:

       { id: "reals", title: "Real Analysis", file: "topics/real-analysis.js" },

You can also put questions directly in the topic file instead of a separate bank:

       { title: "Quick review", questions: [ ["Term:", "definition"] ] },

What stayed the same
--------------------
- Each question is still [prompt, answer]
- Three choices: the real answer plus two answers stolen from other items
- Wrong answers go to the back of the queue
- MathJax still renders \( ... \) in prompts and answers
- Dark cyan / magenta look

What changed
------------
- No more C:\Users\...\ absolute paths. Everything is relative.
- Subject menu, then a bank menu for that subject.
- Optional third field attaches a diagram:

    ["Vertical angles:", "two angles formed by...", "diagrams/vertical-angles.svg"]

- If you omit the third field, the figure area stays hidden.
- Wrong-answer feedback now shows the definition text, not "2".
- Random index bug fixed (the old Math.random() * q_len-1 expression
  could skip item 0 or produce -1).
- Layout is usable on a phone: full-width choices, diagrams scale
  with max-height so answers stay on screen.

Adding a diagram
----------------
1. Put an SVG in diagrams/ (viewBox, no fixed width/height)
2. Add the path as the third entry of that question array

Later, publishing
-----------------
Same folder on GitHub Pages / Netlify / Cloudflare Pages.
No server-side code required.
