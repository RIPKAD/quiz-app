// Format: [prompt, correct, distractor1, distractor2]
var question = [

["Any metric space \\( ( X,d)\\) is disconnected provided that:",
  "there exist two nonempty subsets \\( A\\) and \\( B\\) such that \\( X=A\\cup B\\) and \\( A\\cap \\overline{B} =\\emptyset \\) and \\( \\overline{A} \\cap B=\\emptyset \\).",
  "\\( X\\) cannot be written as a union of two sets.",
  "every pair of nonempty subsets meets."],

["Any metric space \\( ( X,d)\\) is connected if:",
  "for any two nonempty subsets \\( A\\) and \\( B\\) with \\( X=A\\cup B\\), one has \\( A\\cap \\overline{B} \\neq \\emptyset \\) or \\( \\overline{A} \\cap B\\neq \\emptyset \\).",
  "\\( X\\) is a union of two nonempty disjoint open sets.",
  "\\( X\\) has a proper clopen subset."],

["\\( ( X,d)\\) is disconnected if and only if:",
  "there exist two nonempty disjoint subsets \\( A\\) and \\( B\\) both open in \\( X\\) such that \\( X=A\\cup B\\).",
  "\\( X\\) is an interval.",
  "every open set is connected."],

["There exist two nonempty disjoint subsets \\( A\\) and \\( B\\) both closed in \\( X\\) such that \\( X=A\\cup B\\) if and only if:",
  "\\( ( X,d)\\) is disconnected.",
  "\\( ( X,d)\\) is connected.",
  "\\( X\\) is compact."],

["\\( ( X,d)\\) is disconnected if and only if:",
  "there exists a proper subset of \\( X\\) that is both open and closed in \\( X\\).",
  "the only clopen sets are \\( \\emptyset\\) and \\( X\\).",
  "\\( X\\) is an interval."],

["A subset \\( I\\subseteq \\mathbb{R}\\) is connected if and only if:",
  "\\( I\\) is an interval.",
  "\\( I\\) is open.",
  "\\( I\\) is compact."],

["There exists a continuous mapping of \\( ( X,d)\\) onto the discrete two-point space if and only if:",
  "\\( ( X,d)\\) is disconnected.",
  "\\( ( X,d)\\) is connected.",
  "\\( X\\) is compact."],

["Let \\( ( X,d_{X})\\) be connected and \\( f:( X,d_{X})\\rightarrow ( Y,d_{Y})\\) be continuous.  Then the space \\( f( X)\\) is:",
  "connected with the metric induced from \\( Y\\).",
  "disconnected.",
  "discrete."],

["If \\( f:[ a,b]\\rightarrow \\mathbb{R}\\) is continuous on \\([ a,b]\\) then:",
  "for every \\( y\\) between \\( f( a)\\) and \\( f( b)\\) there exists \\( x\\in [ a,b]\\) such that \\( f( x) =y\\).",
  "\\( f\\) misses every value between \\( f(a)\\) and \\( f(b)\\).",
  "\\( f\\) is constant."],

["If every continuous function \\( f:( X,d_{X})\\rightarrow \\mathbb{R}\\) has the intermediate value property then:",
  "\\( ( X,d_{X})\\) is connected.",
  "\\( X\\) is compact.",
  "\\( X\\) is discrete."],

["Let \\( I=[ -1,1]\\) and let \\( f:I\\rightarrow I\\) be continuous.  Then:",
  "there exists a point \\( c\\in I\\) such that \\( f( c) =c\\).",
  "\\( f\\) has no fixed point.",
  "\\( f\\) is not continuous at \\( 0\\)."],

["If \\( Y\\) is connected in \\( ( X,d)\\) then:",
  "any subset \\( Z\\) such that \\( Y\\subseteq Z\\subseteq \\overline{Y}\\) is connected.",
  "no set between \\( Y\\) and its closure is connected.",
  "\\( \\overline{Y}\\) is disconnected."],

["If \\( \\mathcal{C}\\) is a collection of connected sets with nonempty intersection then:",
  "the union of \\( \\mathcal{C}\\) is connected.",
  "the union of \\( \\mathcal{C}\\) is disconnected.",
  "the intersection of \\( \\mathcal{C}\\) is empty."],

["If \\( \\{Y_{i}\\}_{i=1}^{n}\\) is a finite sequence of connected sets such that \\( Y_{i} \\cap Y_{i+1} \\neq \\emptyset\\) for each \\( i\\) then:",
  "\\( \\bigcup\\nolimits _{i=1}^{n} Y_{i}\\) is connected.",
  "the union is disconnected.",
  "each \\( Y_{i}\\) is compact."],

["Let \\( Y\\subseteq ( X,d)\\) and \\( I=[ 0,1]\\).  A path in \\( Y\\) is:",
  "a continuous mapping \\( f:I\\rightarrow Y\\).",
  "any function \\( I\\to Y\\), not necessarily continuous.",
  "an open cover of \\( Y\\)."],

["A subset \\( Y\\subseteq ( X,d)\\) is pathwise connected if:",
  "for any two points in \\( Y\\) there exists a path in \\( Y\\) joining them.",
  "\\( Y\\) is finite.",
  "\\( Y\\) is closed."],

["Let \\( x_{0} \\in ( X,d)\\).  Then \\( X\\) is pathwise connected if and only if:",
  "each \\( x\\in X\\) can be joined to \\( x_{0}\\) by a path.",
  "no point can be joined to \\( x_{0}\\).",
  "\\( X\\) is discrete."],

["If \\( ( X,d)\\) is pathwise connected then:",
  "\\( X\\) is connected.",
  "\\( X\\) is disconnected.",
  "\\( X\\) is compact."],

["If \\( Y\\subseteq ( X,d)\\) is pathwise connected and \\( f\\) is continuous then:",
  "\\( f( Y)\\) is pathwise connected.",
  "\\( f(Y)\\) is discrete.",
  "\\( f(Y)\\) is disconnected."],

["If \\( \\mathcal{C}\\) is a collection of pathwise connected subsets with nonempty intersection then:",
  "the union of \\( \\mathcal{C}\\) is pathwise connected.",
  "the union is path-disconnected.",
  "the intersection is empty."],

["Let \\( \\Omega \\) be a nonempty open connected subset of \\( \\mathbb{C}\\).  Then:",
  "\\( \\Omega \\) is pathwise connected.",
  "\\( \\Omega\\) is disconnected.",
  "\\( \\Omega\\) is compact."]

];
