var question = [

["A nonempty set \\( X\\) along with a function \\( d:X\\times X\\rightarrow \\mathbb{R}\\) is a metric space provided that:", "for \\( x,y,z\\in X\\), \\( d( x,y) \\geqslant 0\\), \\( d( x,y) =0\\) if and only if \\( x=y\\), \\( d( x,y) =d( y,x)\\), and \\( d( x,z) \\leqslant d( x,y) +d( y,z)\\)."],

["A sequence \\( \\{x_{n}\\}\\) in a metric space \\( X\\) converges to \\( x\\in X\\) provided that:", "for each \\( \\epsilon  >0\\) there exists a \\( N\\in \\mathbb{N}\\) such that, for all \\( n >N\\), \\( d( x_{n} ,x) < \\epsilon \\)."],

["A sequence \\( \\{x_{n}\\}\\) in a metric space \\( X\\) is Cauchy provided that:", "for each \\( \\epsilon  >0\\) there exists a \\( N\\in \\mathbb{N}\\) such that, for all \\( m,n >N\\), \\( d( x_{m} ,x_{n}) < \\epsilon \\)."],

["A convergent sequence in a metric space is:", "a Cauchy sequence."],

["A metric space is complete provided that:", "every Cauchy sequence in \\( X\\) is convergent."],

["If a Cauchy sequence in a metric space contains a convergent subsequence then:", "the sequence converges to the same limit as the subsequence."],

["Let \\( ( X,d)\\) be a metric space.  A subset \\( G\\subset X\\) is open provided that:", "for each \\( x\\in G\\), there exists a \\( r >0\\) such that the open ball \\( S( x,r) \\subseteq G\\)."],

["In any metric space, every open ball is:", "an open set."],

["Let \\( ( X,d)\\) be a metric space.  Then the following are open:", "\\( X\\) and \\( \\emptyset \\), arbitrary unions of open subsets of \\( X\\), finite intersections of open subsets of \\( X\\)."],

["A subset \\( G\\) in a metric space is open if and only if:", "its is the union of all open balls contained in \\( G\\)."],

["Each nonempty open subset of \\( \\mathbb{R}\\) is:", "the union of a countable family of disjoint open intervals.  Moreover, the endpoints of any open intervals in the family lie in the complement of the set and are no less than the infimum and no greater than the supremum of the set."],

["Let \\( A\\) be a subset of a metric space.  A point \\( x\\in A\\) is an interior point of \\( A\\) provided that:", "there exists an \\( r >0\\) such that the open ball \\( S( x,r) \\subseteq A\\). The interior of \\( A\\), denoted \\( A^{\\circ }\\) is the set of all interior points of \\( A\\)."],

["The interior of \\( A\\) is:", "an open subset of \\( A\\) which contains every open subset of \\( A\\)."],

["\\( A\\) is open in and only if:", "\\( A=A^{\\circ }\\)."],

["\\( A\\subseteq B\\Longrightarrow \\):", "\\(A^{\\circ }\\subseteq B^{\\circ }\\)"],

["\\( ( A\\cap B)^{\\circ } =\\):", "\\(A^{\\circ } \\cap B^{\\circ }\\)"],

["\\( A^{\\circ } \\cup B^{\\circ } \\subseteq\\):", "\\( ( A\\cup B)^{\\circ }\\)"],

["Let \\( ( X,d)\\) be a metric space and let \\( F\\) be a subset of \\( X\\).  Then \\( x\\in X\\) is a limit point of \\( F\\) provided that:", "each open ball containing \\( x\\) contains at least one point of \\( F\\) different from \\( x\\), In other words, for each \\( r >0\\), \\( ( S( x,r) \\backslash \\{x\\}) \\cap F\\neq \\emptyset \\)."],

["Let \\( ( X,d)\\) be a metric space and let \\( F\\) be a subset of \\( X\\).  If \\( x\\) is a limit point of \\( F\\) then:", "every open ball containing \\( x\\) contains infinitely many points of \\( F\\)."],

["Let \\( ( X,d)\\) be a metric space and let \\( F\\) be a subset of \\( X\\).  Then \\( x\\) is a limit point of \\( F\\) if and only if:", "it is possible to select a sequence of distinct points \\( \\{x_{n}\\} \\ \\)in \\( F\\) such that \\( \\{x_{n}\\}\\) converges to \\( x\\)."],

["A subset \\( F\\) of a metric space \\( ( X,d)\\) is closed provided that:", "\\( F\\) contains all of its limit points."],

["The set of limit points of \\( F\\) is:", "a closed subset of \\( ( X,d)\\)."],

["If \\( A\\subseteq B\\) then:", "\\( A\\prime \\subseteq B\\prime \\)"],

["\\( ( A\\cup B) \\prime =\\):", "\\(A\\prime \\cup B\\prime \\)"],

["\\( ( A\\cap B) \\prime \\subseteq\\):", "\\( A\\prime \\cap B\\prime \\)"],

["The union of a set \\( A\\) and the set of its limit points \\( A\\prime \\) is called:", "the closure of \\( A\\) denoted \\( \\overline{A}\\)."],

["The closure of a a subset of a metric space is:", "closed."],

["\\( F\\) is closed if and only if:", "\\( F=\\overline{F}\\)."],

["\\( x\\in \\overline{F}\\) if and only if:", "for all \\( r >0\\), \\( S( x,r) \\cap F\\neq \\emptyset \\)."],

["There exists an  infinite sequence \\( \\{x_{n}\\}\\) (of not necessarily distinct points) of \\( F\\) such that \\( x_{n}\\rightarrow x\\) if and only if:", "\\( x\\in \\overline{F}\\)."],

["\\( \\overline{( A\\cup B)} =\\):", "\\(\\overline{A} \\cup \\overline{B}\\)"],

["\\( \\overline{( A\\cap B)} \\subseteq\\):", "\\( \\overline{A} \\cap \\overline{B}\\)"],

["Let \\( ( X,d)\\) be a metric space.  Then \\( X\\) and \\( \\emptyset \\) are:", "closed sets."],

["\\( F\\) is closed in \\( X\\) if and only if:", "\\( F^{C}\\) is open in \\( X\\)."],

["Let \\( ( X,d)\\) be a metric space.  Then the following sets are closed:", " \\( X\\) and \\( \\emptyset \\), finite unions of closed subsets, arbitrary intersections of closed subsets."],

["Let \\( F\\) be a nonempty bounded, closed subset of \\( \\mathbb{R}\\).  Then \\( \\beta =\\sup ( F)\\) and \\( \\alpha =\\inf( F)\\) are:", "in \\( F\\) and \\( [ \\alpha ,\\beta ]\\) is the smallest closed interval containing \\( F\\)."],

["Let \\( F\\) be a nonempty bounded subset of \\( \\mathbb{R}\\) and let \\( \\beta =\\sup ( F)\\) and \\( \\alpha =\\inf( F)\\).  Then \\( [ \\alpha ,\\beta ]\\) is:", "the smallest closed interval containing \\( F\\)."],

["Let \\( F\\) be a nonempty bounded, closed subset of \\( \\mathbb{R}\\).  If \\( [ \\alpha ,\\beta ]\\) is the smallest closed interval containing \\( F\\) then:", "\\( [ \\alpha ,\\beta ] \\backslash F=( \\alpha ,\\beta ) \\cap F^{C}\\) and is open in \\( \\mathbb{R}\\)."],

["Let \\( F\\) be a nonempty bounded, closed subset of \\( \\mathbb{R}\\).  Then \\( F\\) is:", "either a closed interval or is obtained from some closed interval by removing a countable pairwise disjoint open intervals whose endpoints belong to \\( F\\)."],

["Let \\( ( X,d)\\) be a metric space and \\( A\\subseteq X\\).  Then \\( A\\) is bounded provided that:", "there exists \\( M >0\\) such that \\( d( x,y) \\leqslant M\\) for all \\( x,y\\in A\\)."],

["If \\( A\\) is bounded then the diameter of \\( A\\) is defined as:", "\\( \\sup \\{d( x,y) :x,y\\in A\\}\\)."],

["Let \\( ( X,d)\\) be a metric space and let \\( Y\\) be a subspace of \\( X\\).  Let \\( z\\in Y\\) and \\( r >0\\).  Then:", "\\( S_{Y}( z,r) =S_{X}( z,r) \\cap Y\\) where \\( S_{Y}\\) denotes an open ball in \\( Y\\) and \\( S_{X}\\) denotes an open ball in \\( X\\)."],

["Let \\( ( X,d)\\) be a metric space and \\( Y\\) a subspace of \\( X\\).  Let \\( Z\\) be a subset of \\( Y\\).  Then \\( Z\\) is open in \\( Y\\) if and only if:", "there exists an open set \\( G\\subseteq X\\) such that \\( Z=G\\cap Y\\)."],

["Let \\( ( X,d)\\) be a metric space and \\( Y\\) a subspace of \\( X\\).  Let \\( Z\\) be a subset of \\( Y\\).  Then \\( Z\\) is closed in \\( Y\\) if and only if:", "there exists an closed set \\( F\\subseteq X\\) such that \\( Z=F\\cap Y\\)."],

["Let \\( Y\\) be a subspace of a metric space \\( ( X,d)\\).  Then every subset of \\( Y\\) that is open in \\( Y\\) is also open in \\( X\\) if and only if:", "\\( Y\\) is open in \\( X\\)."],

["Let \\( Y\\) be a subspace of a metric space \\( ( X,d)\\).  Then every subset of \\( Y\\) that is closed in \\( Y\\) is also closed in \\( X\\) if and only if:", "\\( Y\\) is closed in \\( X\\)."],

["Let \\( ( X,d)\\) be a metric space and \\( Z\\subseteq Y\\subseteq X\\).  If \\( cl_{X} Z\\) and \\( cl_{Y} Z\\) denote respectively the closures of \\( Z\\) in \\( X\\) and \\( Y\\) then:", "\\( cl_{Y} Z=Y\\cap cl_{X} Z\\)."],

["If \\( Y\\) is a nonempty subset of a metric space \\( ( X,d)\\) and \\( ( Y,d_{Y})\\) is complete then:", "\\( Y\\) is closed in \\( X\\)."],

[" Let \\( ( X,d)\\) be a complete metric space and \\( Y\\) a closed subset of \\( X\\).  Then \\( ( Y,d_{Y})\\) is:", "complete."]

];