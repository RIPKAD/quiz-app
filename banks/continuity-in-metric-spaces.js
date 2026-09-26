// Format: [prompt, correct, distractor1, distractor2]
var question = [

["Let \\( ( X,d_{X})\\) and \\( ( Y,d_{Y})\\) be metric spaces and let \\( A\\subseteq X\\).  Then \\( f:A\\rightarrow Y\\) is continuous at \\( x_{0}\\) provided that:",
  "for each \\( \\epsilon>0\\) there exists \\( \\delta>0\\) such that \\( x\\in A\\) and \\( d_{X}( x_{0} ,x) < \\delta \\) implies \\( d_{Y}( f( x_{0}) ,f( x)) < \\epsilon \\).",
  "there exists \\( \\epsilon>0\\) such that for every \\( \\delta>0\\) the implication fails.",
  "\\( f\\) is bounded."],

["Let \\( ( X,d_{X})\\) and \\( ( Y,d_{Y})\\) be metric spaces and let \\( A\\subseteq X\\).  Then \\( f:A\\rightarrow Y\\) is continuous at \\( x_{0}\\) if and only if:",
  "for each sequence \\( \\{x_{n}\\}\\) in \\( A\\) convergent to \\( x_{0}\\), the sequence \\( \\{f( x_{n})\\}\\) converges to \\( f( x_{0})\\).",
  "some sequence in \\( A\\) converging to \\( x_{0}\\) has \\( f(x_{n})\\) divergent.",
  "\\( f\\) is uniformly continuous."],

["Let \\( f:A\\rightarrow Y\\) and let \\( x_{0}\\) be a limit point of \\( A\\).  Then \\( \\lim_{x\\to x_{0}}f(x)=b\\in Y\\) provided that:",
  "for every \\( \\epsilon>0\\) there exists \\( \\delta>0\\) such that \\( x\\in A\\) and \\( 0< d_{X}( x,x_{0}) < \\delta \\) implies \\( d_{Y}( f( x) ,b) < \\epsilon \\).",
  "\\( d_{Y}(f(x),f(x_{0}))<\\epsilon\\) even when the intended limit is a different point \\( b\\).",
  "\\( f\\) is unbounded near \\( x_{0}\\)."],

["Then \\( \\lim _{x\\rightarrow x_{0}} f( x) =b\\) if and only if:",
  "\\( f(x_{n})\\to b\\) for every sequence \\( \\{x_{n}\\}\\) in \\( A\\) with \\( x_{n}\\neq x_{0}\\) and \\( x_{n}\\to x_{0}\\).",
  "some sequence approaching \\( x_{0}\\) has \\( f(x_{n})\\) failing to tend to \\( b\\).",
  "\\( f\\) is constant."],

["Let \\( f:A\\rightarrow Y\\) with \\( A\\subseteq X\\) and \\( B\\subseteq Y\\).  Then \\( f( A) \\subseteq B\\) if and only if:",
  "\\( A \\subseteq f^{-1}( B)\\).",
  "\\( f^{-1}(B)\\subseteq A\\).",
  "\\( B\\subseteq A\\)."],

["Let \\( f:A\\rightarrow Y\\) and let \\( x_{0}\\) be a limit point of \\( A\\).  Then \\( f\\) is continuous at \\( x_{0}\\) if and only if:",
  "\\( \\lim _{x\\rightarrow x_{0}} f( x) =f( x_{0})\\).",
  "the limit exists but differs from \\( f(x_{0})\\).",
  "\\( f\\) is discontinuous at every other point."],

["A mapping \\( f\\) of \\( ( X,d_{X})\\) to \\( ( Y,d_{Y})\\) is continuous at \\( x_{0} \\in X\\) if and only if:",
  "for each \\( \\epsilon>0\\) there exists \\( \\delta>0\\) such that \\( B_{\\delta }( x_{0}) \\subseteq f^{-1}( B_{\\epsilon }( f( x_{0})))\\).",
  "\\( f(B_{\\delta}(x_{0}))\\) misses every ball about \\( f(x_{0})\\).",
  "\\( f^{-1}\\) is a singleton."],

["A mapping \\( f:X\\rightarrow Y\\) is continuous on \\( X\\) if and only if:",
  "\\( f^{-1}( G)\\) is open in \\( X\\) for each \\( G\\) open in \\( Y\\).",
  "\\( f(G)\\) is open for each open \\( G\\subseteq X\\).",
  "\\( f^{-1}(G)\\) is closed for each open \\( G\\)."],

["A mapping \\( f:X\\rightarrow Y\\) is continuous on \\( X\\) if and only if:",
  "\\( f^{-1}( F)\\) is closed in \\( X\\) for each \\( F\\) closed in \\( Y\\).",
  "\\( f(F)\\) is closed for each closed \\( F\\subseteq X\\).",
  "\\( f^{-1}(F)\\) is open for each closed \\( F\\)."],

["If \\( f:X\\rightarrow Y\\) and \\( g:Y\\rightarrow Z\\) are continuous, then the composition \\( gf\\) is:",
  "a continuous map from \\( X\\) to \\( Z\\).",
  "continuous only if \\( f\\) is uniformly continuous.",
  "discontinuous."],

["Let \\( f,g:X\\rightarrow Y\\) be continuous.  Then the set \\( \\{x\\in X:f( x) =g( x)\\}\\) is:",
  "a closed subset of \\( X\\).",
  "always open and not closed.",
  "empty."],

["If \\( F=\\{x\\in X:f( x) =g( x)\\}\\) is dense in \\( X\\) and \\( f,g\\) are continuous, then:",
  "\\( f=g\\).",
  "\\( f\\) and \\( g\\) agree only on a discrete set.",
  "\\( f\\neq g\\) everywhere."],

["Let \\( A\\) be dense in \\( X\\) and \\( f:A\\rightarrow Y\\).  Then \\( f\\) has a continuous extension \\( g:X\\rightarrow Y\\) if and only if:",
  "for every limit point \\( x\\) of \\( A\\), \\( \\lim_{y\\to x}f(y)\\) exists in \\( Y\\), and equals \\( f(x)\\) when \\( x\\in A\\).",
  "\\( f\\) is unbounded on \\( A\\).",
  "\\( Y\\) is discrete."],

["Let \\( f\\) and \\( g\\) be continuous maps of \\( ( X,d)\\) into \\( \\mathbb{C}\\) and let \\( \\alpha \\in \\mathbb{C}\\).  Then:",
  "\\( f+g\\), \\( \\alpha f\\), \\( fg\\), and \\( |f|\\) are continuous, and so is \\( 1/f\\) where defined.",
  "only \\( f+g\\) can be continuous.",
  "\\( |f|\\) is discontinuous whenever \\( f\\) is continuous."],

["The function \\( f:X\\rightarrow Y\\) is uniformly continuous on \\( X\\) provided that:",
  "for every \\( \\epsilon>0\\) there exists \\( \\delta>0\\) such that for all \\( x_{1},x_{2}\\in X\\), \\( d_{X}( x_{1},x_{2}) <\\delta\\) implies \\( d_{Y}( f( x_{1}),f( x_{2})) <\\epsilon\\).",
  "the \\( \\delta\\) is allowed to depend on the point \\( x_{1}\\).",
  "\\( f\\) is bounded only."],

["Let \\( x\\in X\\) and \\( A\\subseteq X\\) be nonempty.  Then \\( x\\in \\overline{A}\\) if and only if:",
  "\\( d( x,A) = 0\\).",
  "\\( d(x,A)>0\\).",
  "\\( A\\) is finite."],

["If \\( f:X\\rightarrow Y\\) and \\( g:Y\\rightarrow Z\\) are uniformly continuous, then \\( gf\\) is:",
  "uniformly continuous from \\( X\\) to \\( Z\\).",
  "continuous but not uniformly continuous.",
  "discontinuous."],

["Let \\( f\\) be uniformly continuous on a dense set \\( A\\subseteq X\\) with values in a complete space \\( Y\\).  Then:",
  "there exists a unique continuous extension \\( g:X\\rightarrow Y\\) agreeing with \\( f\\) on \\( A\\), and \\( g\\) is uniformly continuous.",
  "no continuous extension exists.",
  "every extension fails to be uniformly continuous."],

["A bijective function \\( f:X\\rightarrow Y\\) is a homeomorphism provided that:",
  "\\( f\\) and \\( f^{-1}\\) are continuous.",
  "\\( f\\) is continuous but \\( f^{-1}\\) need not be.",
  "\\( f\\) is an open map only."],

["A function \\( f:X\\rightarrow Y\\) is an isometry provided that:",
  "for all \\( x,y\\in X\\), \\( d_{Y}( f( x),f( y)) =d_{X}( x,y)\\).",
  "\\( d_{Y}(f(x),f(y))\\leqslant d_{X}(x,y)\\) only.",
  "\\( f\\) is constant."],

["If \\( f\\) is an isometry then:",
  "\\( f\\) is injective and uniformly continuous.",
  "\\( f\\) is not injective.",
  "\\( f\\) fails to be continuous."],

["Then \\( \\{f_{n}\\}\\) converges pointwise to \\( f\\) provided that:",
  "for each \\( \\epsilon>0\\) and each \\( x\\in X\\) there exists \\( N\\) such that for all \\( n>N\\), \\( d_{Y}( f_{n}( x),f( x)) <\\epsilon\\).",
  "the same \\( N\\) works for all \\( x\\) at once, with \\( d_{Y}(f(x_{n}),f(x))\\).",
  "\\( f_{n}\\) is independent of \\( x\\)."],

["The sequence \\( \\{f_{n}\\}\\) converges uniformly on \\( X\\) to \\( f\\) provided that:",
  "for every \\( \\epsilon>0\\) there exists \\( N\\) such that for all \\( x\\in X\\) and all \\( n>N\\), \\( d_{Y}( f_{n}( x),f( x)) <\\epsilon\\).",
  "the \\( N\\) may depend on \\( x\\).",
  "only pointwise convergence holds."],

["If \\( f_{n}\\to f\\) uniformly on \\( X\\) and each \\( f_{n}\\) is continuous, then:",
  "\\( f\\) is continuous on \\( X\\).",
  "\\( f\\) is discontinuous everywhere.",
  "uniform limits need not be continuous."],

["If \\( Y\\) is complete, there exists \\( f\\) with \\( f_{n}\\to f\\) uniformly on \\( X\\) if and only if:",
  "for each \\( \\epsilon>0\\) there exists \\( N\\) such that for all \\( m,n>N\\) and all \\( x\\in X\\), \\( d_{Y}( f_{m}( x),f_{n}( x)) <\\epsilon\\).",
  "the Cauchy condition holds at only one point \\( x\\).",
  "\\( Y\\) is incomplete."],

["The series \\( \\sum_{i=1}^{\\infty} f_{i}\\) converges to \\( f\\) provided that:",
  "the sequence of partial sums \\( S_{n}=\\sum_{i=1}^{n} f_{i}\\) converges to \\( f\\) on \\( X\\).",
  "the partial sums are defined as the infinite sum itself.",
  "each \\( f_{i}\\) is unbounded."],

["The series \\( \\sum_{i=1}^{\\infty} f_{i}\\) converges uniformly to \\( f\\) provided that:",
  "the partial sums \\( S_{n}=\\sum_{i=1}^{n} f_{i}\\) converge uniformly to \\( f\\) on \\( X\\).",
  "the series converges only pointwise.",
  "the Weierstrass test fails."],

["If \\( \\sum f_{i}\\to f\\) uniformly and each \\( f_{n}\\) is continuous, then:",
  "\\( f\\) is continuous on \\( X\\).",
  "\\( f\\) is discontinuous.",
  "uniform series of continuous functions need not be continuous."],

["Suppose \\( |f_{n}(x)|\\leqslant M_{n}\\) for all \\( x\\) and \\( \\sum M_{n}\\) converges.  Then:",
  "\\( \\sum f_{i}\\) converges uniformly (Weierstrass \(M\)-test).",
  "the series diverges.",
  "convergence is only pointwise."],

["\\( T:X\\rightarrow X\\) is a contraction mapping provided that:",
  "there exists \\( \\alpha\\in(0,1)\\) such that \\( d( T( x),T( y)) \\leqslant \\alpha d( x,y)\\) for all \\( x,y\\in X\\).",
  "\\( d(T(x),T(y))\\geqslant d(x,y)\\).",
  "\\( T\\) is constant only."],

["A point \\( x\\in X\\) is a fixed point of \\( T:X\\rightarrow X\\) provided that:",
  "\\( T( x) =x\\).",
  "\\( T(x)=0\\).",
  "\\( T(x)\\neq x\\)."],

["Let \\( ( X,d)\\) be complete and let \\( T:X\\rightarrow X\\) be a contraction.  Then \\( T\\):",
  "has a unique fixed point.",
  "has no fixed point.",
  "has infinitely many fixed points and need not be unique."]

];
