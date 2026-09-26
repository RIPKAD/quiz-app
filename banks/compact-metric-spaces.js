// Format: [prompt, correct, distractor1, distractor2]
var question = [

["\\( ( X,d)\\) is compact provided that:",
  "every open cover of \\( X\\) has a finite subcover.",
  "every open cover of \\( X\\) has a countable subcover.",
  "every closed cover of \\( X\\) has a finite subcover."],

["A collection \\( \\mathcal{F}\\) has the finite intersection property provided that:",
  "every finite subcollection of \\( \\mathcal{F}\\) has nonempty intersection.",
  "every (possibly infinite) subcollection of \\( \\mathcal{F}\\) has nonempty intersection.",
  "the whole collection has empty intersection."],

["\\( ( X,d)\\) is compact if and only if:",
  "every collection of closed sets in \\( ( X,d)\\) with empty intersection has a finite subcollection with empty intersection.",
  "some collection of open sets with empty intersection has a finite subcover.",
  "every collection of open sets has nonempty intersection."],

["Every collection of closed sets in \\( ( X,d)\\) with the finite intersection property has nonempty intersection if and only if:",
  "\\( ( X,d)\\) is compact.",
  "\\( ( X,d)\\) is only bounded.",
  "\\( ( X,d)\\) is discrete."],

["Let \\( Y\\subseteq ( X,d)\\).  If \\( Y\\) is compact then:",
  "\\( Y\\) is closed and bounded in \\( X\\).",
  "\\( Y\\) is open in \\( X\\).",
  "\\( Y\\) need not be bounded."],

["Let \\( A\\subseteq ( X,d)\\) and let \\( \\epsilon  >0\\).  Then \\( A\\) is an \\( \\epsilon \\)-net for \\( X\\) provided that:",
  "given any \\( x\\in X\\) there exists \\( y\\in A\\) such that \\( d( x,y) < \\epsilon \\).  Equivalently, \\( X=\\bigcup\\{B_{\\epsilon }( y):y\\in A\\}\\).",
  "\\( A\\) is infinite and unbounded.",
  "\\( d(x,y)\\geqslant\\epsilon\\) for all \\( x\\in X\\) and \\( y\\in A\\)."],

["\\( ( X,d)\\) is totally bounded provided that:",
  "for every \\( \\epsilon>0\\) there exists a finite \\( \\epsilon\\)-net for \\( ( X,d)\\).",
  "\\( X\\) is complete.",
  "there exists one \\( \\epsilon\\) for which an infinite net exists."],

["A totally bounded metric space is:",
  "bounded.",
  "complete.",
  "compact, with no further hypotheses."],

["Let \\( Y\\subseteq ( X,d)\\).   Then \\( Y\\) is totally bounded if and only if:",
  "every sequence in \\( Y\\) contains a Cauchy subsequence.",
  "every sequence in \\( Y\\) converges.",
  "\\( Y\\) is closed."],

["If \\( ( X,d)\\) is compact then:",
  "\\( ( X,d)\\) is complete.",
  "\\( ( X,d)\\) is complete only if it is compact (the converse of compactness).",
  "\\( ( X,d)\\) need not be complete."],

["\\( ( X,d)\\) is complete and totally bounded if and only if:",
  "\\( ( X,d)\\) is compact.",
  "\\( ( X,d)\\) is only bounded.",
  "\\( ( X,d)\\) is discrete."],

["Every infinite subset of \\( X\\) has at least one limit point if and only if:",
  "\\( ( X,d)\\) is compact.",
  "\\( ( X,d)\\) is only complete.",
  "\\( X\\) is finite."],

["Every sequence in \\( X\\) contains a convergent subsequence if and only if:",
  "\\( ( X,d)\\) is compact.",
  "\\( ( X,d)\\) is only totally bounded.",
  "\\( X\\) is discrete."],

["Let \\( Y\\) be a closed subset of a compact metric space \\( ( X,d)\\).  Then:",
  "\\( ( Y,d_{Y})\\) is compact.",
  "\\( Y\\) is open in \\( X\\).",
  "\\( Y\\) need not be compact."],

["Let \\( Y\\subseteq ( X,d)\\).  If \\( ( Y,d_{Y})\\) is compact then:",
  "\\( Y\\) is closed in \\( X\\).",
  "\\( Y\\) is open in \\( X\\).",
  "\\( Y\\) is dense in \\( X\\)."],

["Let \\( ( X,d)\\) be compact and let \\( f:( X,d_{X})\\rightarrow ( Y,d_{Y})\\) be continuous.  Then \\( f( X)\\):",
  "is compact.",
  "is open in \\( Y\\).",
  "need not be bounded."],

["If \\( ( X,d_{X})\\) and \\( ( Y,d_{Y})\\) are homeomorphic then \\( X\\) is compact if and only if:",
  "\\( Y\\) is compact.",
  "\\( Y\\) is complete only.",
  "\\( Y\\) is discrete."],

["Let \\( K\\subseteq \\mathbb{R}\\) be closed and bounded.  Then \\( K\\) contains:",
  "\\( \\sup(K)\\) and \\( \\inf(K)\\).",
  "neither its supremum nor its infimum.",
  "only its supremum."],

["Let \\( ( X,d)\\) be compact and let \\( f:( X,d)\\rightarrow \\mathbb{R}\\) be continuous.  Then \\( f\\) is:",
  "bounded and there exist \\( x,y\\in X\\) such that \\( f( x) =\\sup f( X)\\) and \\( f( y) =\\inf f( X)\\).",
  "bounded but need not attain its bounds.",
  "unbounded."],

["Let \\( ( X,d)\\) be compact and let \\( f:( X,d_{X})\\rightarrow ( Y,d_{Y})\\) be continuous and bijective.  Then \\( ( X,d_{X})\\) and \\( ( Y,d_{Y})\\) are:",
  "homeomorphic.",
  "isometric.",
  "discrete."],

["Let \\( ( X,d)\\) be compact and let \\( f:( X,d_{X})\\rightarrow ( Y,d_{Y})\\) be continuous.  Then \\( f\\) is:",
  "uniformly continuous on \\( X\\).",
  "continuous at only one point.",
  "not uniformly continuous."],

["Let \\( f\\) be a continuous real valued function defined on a compact subinterval \\( I\\subseteq\\mathbb{R}\\).  Then \\( f\\) is:",
  "uniformly continuous on \\( I\\).",
  "bounded but not uniformly continuous.",
  "discontinuous at an endpoint."],

["A subset of \\( \\mathbb{R}^{n}\\) is compact if and only if:",
  "it is closed and bounded.",
  "it is open and bounded.",
  "it is closed and unbounded."],

["A subset \\( A\\) of \\( \\mathbb{R}^{n}\\) is sequentially compact provided that:",
  "every sequence in \\( A\\) has a subsequence convergent to a point in \\( A\\).",
  "every sequence in \\( A\\) is unbounded.",
  "some sequence in \\( A\\) has no convergent subsequence."]

];
