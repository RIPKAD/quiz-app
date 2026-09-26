// Format: [prompt, correct, distractor1, distractor2]
var question = [

["A nonempty set \\( X\\) with \\( d:X\\times X\\rightarrow \\mathbb{R}\\) is a metric space provided that:",
  "for all \\( x,y,z\\in X\\): \\( d(x,y)\\geqslant 0\\), \\( d(x,y)=0\\Leftrightarrow x=y\\), \\( d(x,y)=d(y,x)\\), and \\( d(x,z)\\leqslant d(x,y)+d(y,z)\\).",
  "\\( d\\) may be negative, and the triangle inequality is dropped.",
  "\\( d(x,y)=0\\) for some \\( x\\neq y\\) is allowed."],

["A sequence \\( \\{x_{n}\\}\\) converges to \\( x\\) provided that:",
  "for each \\( \\epsilon>0\\) there exists \\( N\\) such that for all \\( n>N\\), \\( d(x_{n},x)<\\epsilon\\).",
  "for some \\( \\epsilon\\) the tail stays a fixed positive distance from \\( x\\).",
  "the terms are unbounded."],

["A sequence is Cauchy provided that:",
  "for each \\( \\epsilon>0\\) there exists \\( N\\) such that for all \\( m,n>N\\), \\( d(x_{m},x_{n})<\\epsilon\\).",
  "the terms converge to two different limits.",
  "\\( d(x_{m},x_{n})\\geqslant 1\\) for infinitely many pairs."],

["A convergent sequence in a metric space is:",
  "a Cauchy sequence.",
  "not Cauchy.",
  "unbounded."],

["A metric space is complete provided that:",
  "every Cauchy sequence in \\( X\\) converges (in \\( X\\)).",
  "some Cauchy sequences diverge.",
  "every sequence converges."],

["If a Cauchy sequence contains a convergent subsequence then:",
  "the sequence converges to the same limit as the subsequence.",
  "the sequence diverges.",
  "the limits differ."],

["A subset \\( G\\subset X\\) is open provided that:",
  "for each \\( x\\in G\\) there exists \\( r>0\\) such that the open ball \\( S(x,r)\\subseteq G\\).",
  "\\( G\\) contains none of its balls.",
  "\\( G\\) is finite."],

["In any metric space, every open ball is:",
  "an open set.",
  "a closed set that is not open.",
  "neither open nor closed."],

["In a metric space the following are open:",
  "\\( X\\) and \\( \\emptyset\\), arbitrary unions of open sets, and finite intersections of open sets.",
  "arbitrary intersections of open sets.",
  "only finite unions of open sets."],

["A subset \\( G\\) is open if and only if:",
  "it is the union of all open balls contained in \\( G\\).",
  "it is a finite set.",
  "it equals its complement."],

["Each nonempty open subset of \\( \\mathbb{R}\\) is:",
  "a countable union of disjoint open intervals, whose endpoints lie in the complement.",
  "a single closed interval.",
  "finite."],

["A point \\( x\\in A\\) is an interior point of \\( A\\) provided that:",
  "there exists \\( r>0\\) such that \\( S(x,r)\\subseteq A\\). The interior \\( A^{\\circ}\\) is the set of all interior points.",
  "every ball about \\( x\\) meets \\( A^{c}\\).",
  "\\( x\\notin A\\)."],

["The interior of \\( A\\) is:",
  "an open subset of \\( A\\) that contains every open subset of \\( A\\).",
  "a closed set larger than \\( A\\).",
  "empty whenever \\( A\\) is open."],

["\\( A\\) is open if and only if:",
  "\\( A=A^{\\circ}\\).",
  "\\( A^{\\circ}=\\emptyset\\).",
  "\\( A\\) equals its boundary."],

["\\( A\\subseteq B\\Longrightarrow \\)",
  "\\( A^{\\circ}\\subseteq B^{\\circ}\\).",
  "\\( B^{\\circ}\\subseteq A^{\\circ}\\).",
  "\\( A^{\\circ}=B^{\\circ}\\)."],

["\\( ( A\\cap B)^{\\circ } =\\)",
  "\\( A^{\\circ } \\cap B^{\\circ }\\).",
  "\\( A^{\\circ } \\cup B^{\\circ }\\).",
  "\\( \\overline{A}\\cap\\overline{B}\\)."],

["\\( A^{\\circ } \\cup B^{\\circ } \\subseteq\\)",
  "\\( ( A\\cup B)^{\\circ }\\).",
  "\\( (A\\cap B)^{\\circ}\\).",
  "\\( A^{c}\\)."],

["A point \\( x\\) is a limit point of \\( F\\) provided that:",
  "every open ball about \\( x\\) contains a point of \\( F\\) different from \\( x\\).",
  "some ball about \\( x\\) misses \\( F\\setminus\\{x\\}\\).",
  "\\( x\\) is isolated in \\( F\\)."],

["If \\( x\\) is a limit point of \\( F\\) then:",
  "every open ball about \\( x\\) contains infinitely many points of \\( F\\).",
  "some ball contains only \\( x\\) from \\( F\\).",
  "\\( F\\) is finite."],

["\\( x\\) is a limit point of \\( F\\) if and only if:",
  "there is a sequence of distinct points of \\( F\\) converging to \\( x\\).",
  "no sequence in \\( F\\) converges to \\( x\\).",
  "\\( F=\\{x\\}\\)."],

["A subset \\( F\\) is closed provided that:",
  "\\( F\\) contains all of its limit points.",
  "\\( F\\) contains none of its limit points.",
  "\\( F\\) is open."],

["The set of limit points of \\( F\\) is:",
  "a closed subset of \\( X\\).",
  "always open and not closed.",
  "equal to \\( F^{c}\\)."],

["If \\( A\\subseteq B\\) then:",
  "\\( A'\\subseteq B'\\).",
  "\\( B'\\subseteq A'\\).",
  "\\( A'=B'\\)."],

["\\( ( A\\cup B)' =\\)",
  "\\( A'\\cup B'\\).",
  "\\( A'\\cap B'\\).",
  "\\( A^{\\circ}\\)."],

["\\( ( A\\cap B)' \\subseteq\\)",
  "\\( A'\\cap B'\\).",
  "\\( A'\\cup B'\\).",
  "\\( (A\\cup B)^{\\circ}\\)."],

["The union of \\( A\\) and its limit points \\( A'\\) is called:",
  "the closure of \\( A\\), denoted \\( \\overline{A}\\).",
  "the interior of \\( A\\).",
  "the boundary of \\( X\\)."],

["The closure of a subset of a metric space is:",
  "closed.",
  "open and not closed.",
  "empty."],

["\\( F\\) is closed if and only if:",
  "\\( F=\\overline{F}\\).",
  "\\( F=F^{\\circ}\\).",
  "\\( \\overline{F}=X\\)."],

["\\( x\\in \\overline{F}\\) if and only if:",
  "for all \\( r>0\\), \\( S(x,r)\\cap F\\neq\\emptyset\\).",
  "some ball about \\( x\\) misses \\( F\\).",
  "\\( x\\notin F\\) and is isolated."],

["There exists a sequence in \\( F\\) (points not necessarily distinct) with \\( x_{n}\\to x\\) if and only if:",
  "\\( x\\in\\overline{F}\\).",
  "\\( x\\notin\\overline{F}\\).",
  "\\( F\\) is open."],

["\\( \\overline{A\\cup B} =\\)",
  "\\( \\overline{A}\\cup\\overline{B}\\).",
  "\\( \\overline{A}\\cap\\overline{B}\\).",
  "\\( A^{\\circ}\\cup B^{\\circ}\\)."],

["\\( \\overline{A\\cap B} \\subseteq\\)",
  "\\( \\overline{A}\\cap\\overline{B}\\).",
  "\\( \\overline{A}\\cup\\overline{B}\\).",
  "\\( (A\\cup B)^{\\circ}\\)."],

["In a metric space, \\( X\\) and \\( \\emptyset\\) are:",
  "closed sets.",
  "neither closed nor open.",
  "never closed."],

["\\( F\\) is closed in \\( X\\) if and only if:",
  "\\( F^{c}\\) is open in \\( X\\).",
  "\\( F^{c}\\) is closed.",
  "\\( F\\) is open."],

["The following sets are closed:",
  "\\( X\\) and \\( \\emptyset\\), finite unions of closed sets, and arbitrary intersections of closed sets.",
  "arbitrary unions of closed sets.",
  "only infinite unions of closed sets."],

["If \\( F\\subseteq\\mathbb{R}\\) is nonempty, bounded, and closed, then \\( \\sup F\\) and \\( \\inf F\\) are:",
  "in \\( F\\), and \\( [\\inf F,\\sup F]\\) is the smallest closed interval containing \\( F\\).",
  "never in \\( F\\).",
  "only the supremum is in \\( F\\)."],

["If \\( F\\subseteq\\mathbb{R}\\) is nonempty and bounded, then \\( [\\inf F,\\sup F]\\) is:",
  "the smallest closed interval containing \\( F\\).",
  "open.",
  "disjoint from \\( F\\)."],

["If \\( F\\subseteq\\mathbb{R}\\) is nonempty, bounded, and closed, and \\( [\\alpha,\\beta]\\) is the smallest closed interval containing \\( F\\), then:",
  "\\( [\\alpha,\\beta]\\setminus F=(\\alpha,\\beta)\\cap F^{c}\\) is open in \\( \\mathbb{R}\\).",
  "the difference is closed and nonempty of interior empty only.",
  "the difference equals \\( F\\)."],

["A nonempty bounded closed subset of \\( \\mathbb{R}\\) is:",
  "a closed interval, or obtained from one by removing countably many pairwise disjoint open intervals whose endpoints lie in \\( F\\).",
  "always open.",
  "finite only."],

["\\( A\\) is bounded provided that:",
  "there exists \\( M>0\\) such that \\( d(x,y)\\leqslant M\\) for all \\( x,y\\in A\\).",
  "\\( A\\) is infinite.",
  "diameters are infinite."],

["If \\( A\\) is bounded, the diameter of \\( A\\) is:",
  "\\( \\sup\\{d(x,y):x,y\\in A\\}\\).",
  "\\( \\inf\\{d(x,y):x,y\\in A\\}\\).",
  "\\( 0\\) whenever \\( A\\) has two points."],

["If \\( Y\\) is a subspace of \\( X\\) and \\( z\\in Y\\), then:",
  "\\( S_{Y}(z,r)=S_{X}(z,r)\\cap Y\\).",
  "\\( S_{Y}(z,r)=S_{X}(z,r)\\).",
  "\\( S_{Y}(z,r)=Y^{c}\\)."],

["\\( Z\\subseteq Y\\) is open in \\( Y\\) if and only if:",
  "there exists an open set \\( G\\subseteq X\\) with \\( Z=G\\cap Y\\).",
  "\\( Z\\) is open in \\( X\\).",
  "\\( Z\\) is closed in \\( X\\)."],

["\\( Z\\subseteq Y\\) is closed in \\( Y\\) if and only if:",
  "there exists a closed set \\( F\\subseteq X\\) with \\( Z=F\\cap Y\\).",
  "\\( Z\\) is open in \\( X\\).",
  "\\( Z=Y^{c}\\)."],

["Every subset of \\( Y\\) that is open in \\( Y\\) is also open in \\( X\\) if and only if:",
  "\\( Y\\) is open in \\( X\\).",
  "\\( Y\\) is closed in \\( X\\).",
  "\\( Y\\) is finite."],

["Every subset of \\( Y\\) that is closed in \\( Y\\) is also closed in \\( X\\) if and only if:",
  "\\( Y\\) is closed in \\( X\\).",
  "\\( Y\\) is open in \\( X\\).",
  "\\( Y=X^{c}\\)."],

["If \\( Z\\subseteq Y\\subseteq X\\), then:",
  "\\( \\mathrm{cl}_{Y}Z = Y\\cap\\mathrm{cl}_{X}Z\\).",
  "\\( \\mathrm{cl}_{Y}Z=\\mathrm{cl}_{X}Z\\).",
  "\\( \\mathrm{cl}_{Y}Z=Z^{c}\\)."],

["If \\( (Y,d_{Y})\\) is complete then:",
  "\\( Y\\) is closed in \\( X\\).",
  "\\( Y\\) is open in \\( X\\).",
  "\\( Y\\) is dense and not closed."],

["If \\( X\\) is complete and \\( Y\\) is closed in \\( X\\), then \\( (Y,d_{Y})\\) is:",
  "complete.",
  "incomplete.",
  "discrete."]

];
