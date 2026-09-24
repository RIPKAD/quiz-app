var question = [

["Let \\( ( X,d_{X})\\) and \\( ( Y,d_{Y})\\) be metric spaces and let \\( A\\subseteq X\\).  Then \\( f:A\\rightarrow Y\\) is continuous at \\( x_{0}\\) provided that:", "for each \\( \\epsilon  >0\\) there exist a \\( \\delta  >0\\) such that \\( x\\in A\\) and \\( d( x_{0} ,x) < \\delta \\) implies \\( d( f( x_{0}) ,f( x)) < \\epsilon \\)."],

["Let \\( ( X,d_{X})\\) and \\( ( Y,d_{Y})\\) be metric spaces and let \\( A\\subseteq X\\).  Then \\( f:A\\rightarrow Y\\) is continuous at \\( x_{0}\\) if and only if:", " for each sequence \\( \\{x_{n}\\}\\) in \\( A\\) convergent to \\( x_{0}\\), the sequence \\( \\{f( x_{n})\\}\\) converges to \\( f( x_{0})\\)."],

["Let \\( ( X,d_{X})\\) and \\( ( Y,d_{Y})\\) be metric spaces and let \\( A\\subseteq X\\).  Let \\( f:A\\rightarrow Y\\) and let \\( x_{0}\\) be a limit point of \\( A\\).  Then limit of \\( f\\) as \\( x\\) approaches \\( x_{0}\\) equals \\( b\\in Y\\) provided that:", "for every \\( \\epsilon  >0\\) there exists a \\( \\delta  >0\\) such that \\( x\\in A\\) and \\( 0< d_{X}( x,x_{0}) < \\delta \\) implies \\( d_{Y}( f( x) ,f( x_{0})) < \\epsilon \\)."],

["Let \\( ( X,d_{X})\\) and \\( ( Y,d_{Y})\\) be metric spaces and let \\( A\\subseteq X\\).  Let \\( f:A\\rightarrow Y\\) and let \\( x_{0}\\) be a limit point of \\( A\\) and \\( b\\in Y\\).  Then \\( \\lim _{x\\rightarrow x_{0}} f( x) =b\\) if and only if:", "\\( \\lim _{x\\rightarrow x_{0}} f( x_{n}) =b\\) for every sequence \\( \\{x_{n}\\}\\) in \\( A\\) such that \\( x_{n} \\neq x_{0}\\) and \\( \\lim _{n\\rightarrow \\infty } x_{n}\\rightarrow x_{0}\\)."],

["Let \\( ( X,d_{X})\\) and \\( ( Y,d_{Y})\\) be metric spaces and let \\( f:A\\rightarrow Y\\).  Let \\( A\\subseteq X\\) and \\( B\\subseteq Y\\).  Then \\( f( A) \\subseteq B\\) if and only if:", "\\( f^{-1}( B) \\subseteq A\\)."],

["Let \\( ( X,d_{X})\\) and \\( ( Y,d_{Y})\\) be metric spaces and let \\( A\\subseteq X\\).  Let \\( f:A\\rightarrow Y\\) and let \\( x_{0}\\) be a limit point of \\( A\\).  Then \\( f\\) is continuous at \\( x_{0}\\) if and only if:", "\\( \\lim _{x\\rightarrow x_{0}} f( x) =f( x_{0})\\)."],

["A mapping \\( f\\) of \\( ( X,d_{X})\\) to \\( ( Y,d_{Y})\\) is continuous at \\( x_{0} \\in X\\) if and only if:", "for each \\( \\epsilon  >0\\) there exists \\( \\delta  >0\\) such that \\( B_{\\delta }( x_{0}) \\subseteq f^{-1}( B_{\\epsilon }( f( x_{0})))\\)"],

["A mapping \\( f:X\\rightarrow Y\\) is continuous on \\( X\\) if and only if:", "\\( f^{-1}( G)\\) is open in \\( X\\) for each \\( G\\) open in \\( Y\\)."],

["A mapping \\( f:X\\rightarrow Y\\) is continuous on \\( X\\) if and only if:", "\\( f^{-1}( F)\\) is closed in \\( X\\) for each \\( F\\) closed in \\( Y\\)."],

["If \\( f:X\\rightarrow Y\\) and \\( g:Y\\rightarrow Z\\ \\)are continuous maps between metric spaces \\( ( X,d_{X}) ,( Y,d_{Y})\\) and \\( ( Z,d_{Z})\\).  Then the composition \\( gf\\) is:", "a continuous map between metric spaces \\( X\\) and \\( Z\\)."],

["Let \\( ( X,d_{X})\\) and \\( ( Y,d_{Y})\\) be metric spaces and let \\( f:X\\rightarrow Y\\) and \\( g:X\\rightarrow Y\\) be continuous on \\( X\\).  Then the set \\( \\{x\\in X:f( x) =g( x)\\}\\) is:", "a closed subset of \\( X\\)."],

["Let \\( ( X,d_{X})\\) and \\( ( Y,d_{Y})\\) be metric spaces and let \\( f:X\\rightarrow Y\\) and \\( g:X\\rightarrow Y\\) be continuous on \\( X\\).  If \\( F=\\{x\\in X:f( x) =g( x)\\}\\) is dense in \\( X\\) then:", "\\( f=g\\)."],

["Let \\( ( X,d_{X})\\) and \\( ( Y,d_{Y})\\) be metric spaces, let \\( A\\) be a dense subset of \\( X\\) and let \\( f:A\\rightarrow Y\\).  Then \\( f\\) has a continuous extension \\( g:X\\rightarrow Y\\) if and only if:", "for every \\( x\\in X\\) that is a limit point of \\( A\\), the limit \\( \\lim _{y\\rightarrow x} f( y)\\) not only exists in \\( Y\\) but also equals \\( f( x)\\) in the case \\( x\\in A\\)."],

["Let \\( f\\) and \\( g\\) be continuous mappings of a metric space \\( ( X,d)\\) into \\( \\mathbb{C}\\) and let \\( \\alpha \\in \\mathbb{C}\\).  Then:", "the mappings \\( f+g,\\ \\alpha f,\\ gf\\) and \\( |f|\\) are continuous on \\( X\\) and so is the mapping \\( 1/f\\) when defined."],

["Let \\( ( X,d_{X})\\) and \\( ( Y,d_{Y})\\) be metric spaces.  The function \\( f:X\\rightarrow Y\\) is uniformly continuous on \\( X\\) provided that:", "for every \\( \\epsilon  >0\\) there exists \\( \\delta  >0\\) such that for all \\( x_{1} ,x_{2} \\in X\\), \\( d_{X}( x_{1} ,x_{2}) < \\delta \\) implies \\( d( f( x_{1}) ,f( x_{2})) < \\epsilon \\)."],

["Let \\( ( X,d)\\) be a metric space and let \\( x\\in X\\) and \\( A\\subseteq X\\) be nonempty.  Then \\( x\\in \\overline{A}\\) if and only if:", "\\( d( x,A) = 0\\)."],

["If \\( f:X\\rightarrow Y\\) and \\( g:Y\\rightarrow Z\\ \\)are uniformly continuous maps between metric spaces \\( ( X,d_{X}) ,( Y,d_{Y})\\) and \\( ( Z,d_{Z})\\).  Then the composition \\( gf\\) is:", "a uniformly continuous map between metric spaces \\( X\\) and \\( Z\\)."],

["Let \\( f\\) be a uniformly continuous mapping of a set \\( A\\) dense in the metric space \\( ( X,d_{X})\\) into a complete metric space \\( ( Y,d_{Y})\\).  Then:", "there exists a unique continuous mapping \\( g:X\\rightarrow Y\\) such that \\( g( x) =f( x)\\) for \\( x\\in A\\).  Moreover, \\( g\\) is uniformly continuous."],

["Let \\( ( X,d_{X})\\) and \\( ( Y,d_{Y})\\) be metric spaces.  A bijective function \\( f:X\\rightarrow Y\\) is a homeomorphism provided that:", "\\( f\\) and its inverse \\( f^{-1}\\) are continuous."],

["Let \\( ( X,d_{X})\\) and \\( ( Y,d_{Y})\\) be metric spaces.  A function \\( f:X\\rightarrow Y\\) is an isometry provided that:", "for all \\( x,y\\in X,\\ d_{Y}( f( x) ,f( y)) =d_{X}( x,y)\\)."],

["If \\( f\\) is an isometry then:", "\\( f\\) is injective and \\( f\\) is uniformly continuous."],

["Let \\( f:X\\rightarrow Y\\) and let \\( f_{n} :X-Y\\) be a sequence of functions.  Then \\( \\{f_{n}\\}\\) converges pointwise to \\( f\\) provided that:", "for each \\( \\epsilon  >0\\) and each \\( x\\in X\\) there exists a \\( N\\in \\mathbb{N}\\) such that for all \\( n >N,\\ d_{Y}( f( x_{n}) ,f( x)) < \\epsilon \\)."],

["Let \\( \\{f_{n}\\}\\) be a sequence of mappings of \\( ( X,d_{X})\\) into \\( ( Y,d_{Y})\\).  We say that the sequence \\( \\{f_{n}\\}\\) converges uniformly on \\( X\\) to a mapping \\( f:X\\rightarrow Y\\) provided that:", "for every \\( \\epsilon  >0\\) there exists a \\( N\\in \\mathbb{N}\\) such that for all \\( x\\in X\\) and for all \\( n >N\\), \\( \\ d_{Y}( f( x_{n}) ,f( x)) < \\epsilon \\)."],

["Let \\( \\{f_{n}\\}\\) be a sequence of mappings of \\( ( X,d_{X})\\) into \\( ( Y,d_{Y})\\) and let \\( f:X\\rightarrow Y\\).  Suppose the \\( f_{n}\\rightarrow f\\) uniformly over \\( X\\) and each \\( f_{n}\\) is continuous over \\( X\\).  Then:", "\\( f\\) is continuous over \\( X\\)."],

["Let \\( \\{f_{n}\\}\\) be a sequence of mappings of \\( ( X,d_{X})\\) into \\( ( Y,d_{Y})\\) and let \\( ( Y,d_{Y})\\) be a complete metric space. Then there exists a function \\( f:X\\rightarrow Y\\) such that \\( f_{n}\\rightarrow f\\) uniformly on \\( X\\) if and only if:", "for each \\( \\epsilon  >0\\) there exists an \\( N\\in \\mathbb{N}\\) such that for all \\( m,n >N\\) and for all \\( x\\in X,\\ \\in d_{Y}( f_{m}( x) ,f_{n}( x)) < \\epsilon \\)."],

["Let \\( \\{f_{n}\\}\\) be a sequence of real valued functions defined on \\( X\\).  Then the series of functions \\( \\sum\\nolimits _{i=1}^{\\infty } f_{i}\\) converges to \\( f:X\\rightarrow \\mathbb{R}\\) provided that:", "the sequence of partial sums \\( S_{n} =\\sum\\nolimits _{i=1}^{\\infty } f_{i}\\) converges to \\( f\\) on \\( X\\)."],

["Let \\( \\{f_{n}\\}\\) be a sequence of real valued functions defined on \\( X\\).  Then the series of functions \\( \\sum\\nolimits _{i=1}^{\\infty } f_{i}\\) converges uniformly to \\( f:X\\rightarrow \\mathbb{R}\\) provided that:", "the sequence of partial sums \\( S_{n} =\\sum\\nolimits _{i=1}^{\\infty } f_{i}\\) converges uniformly to \\( f\\) on \\( X\\)."],

["Let \\( \\{f_{n}\\}\\) be a sequence of real valued functions defined on \\( X\\) and let \\( f:X\\rightarrow \\mathbb{R}\\).  Suppose the \\( \\sum\\nolimits _{i=1}^{\\infty } f_{i}\\rightarrow f\\) uniformly over \\( X\\) and each \\( f_{n}\\) is continuous over \\( X\\).  Then:", "\\( f\\) is continuous over \\( X\\)."],

["Let \\( \\{f_{n}\\}\\) be a sequence of real valued functions defined on \\( X\\).   Suppose that \\( | f_{n}( x)| \\leqslant M_{n}\\) for all \\( x\\in X\\) and all \\( n\\in \\mathbb{N}\\).  If \\( \\sum\\nolimits _{i=1}^{\\infty } M_{n}\\) converges then:", "\\( \\sum\\nolimits _{i=1}^{\\infty } f_{i}\\) converges uniformly."],

["Let \\( ( X,d)\\) be a metric space and let \\( T:X\\rightarrow X\\).  Then \\( T\\) is a contraction mapping provided that:", "there exists a \\( \\alpha \\in ( 0,1)\\) such that \\( d( T( x) ,T( y)) \\leqslant \\alpha d( x,y)\\) for all \\( x,y\\in X\\)."],

["A point \\( x\\in X\\) is a fixed point of \\( T:X\\rightarrow X\\) provided that:", "\\( T( x) =x\\)."],

["Let \\( ( X,d)\\) be a complete metric space and let \\( T:X\\rightarrow X\\) be a contraction mapping.  Then \\( T\\):", "has a unique fixed point."]

];