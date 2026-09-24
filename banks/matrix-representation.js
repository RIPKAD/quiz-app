var question = [

["Let \\( A\\in M_{m\\times n}( F)\\) and \\( x\\in F^{n}\\).  Then the product \\( Ax=b\\in F^{m}\\) is:", "the linear combination of columns of \\( A\\) with coefficients the entries of \\( x\\).  For each \\( i,1\\leqslant i\\leqslant m\\), \\( b_{i} =\\sum\\nolimits _{k=1}^{n} a_{ik} x_{k}\\)."],

["Let \\( A\\in M_{m\\times n}( F)\\) and \\( B\\in M_{n\\times p}( F)\\).  The product of \\( A\\) and \\( B\\) is:", "the matrix \\( AB\\in M_{m\\times p}( F)\\) where \\( ( ab)_{ij} =\\sum\\nolimits _{k=1}^{n} a_{ik} b_{kj}\\) for \\( 1\\leqslant i\\leqslant m,\\ 1\\leqslant j\\leqslant p\\).  In other words the \\( ij^{th}\\) entry of \\( AB\\) is the inner product of the \\( i^{th}\\) row of \\( A\\) and \\( j^{th}\\) column of \\( B\\)."],

["Let \\( A\\in M_{m\\times n}( F)\\) and \\( B\\in M_{n\\times p}( F)\\).   Column \\( j\\) of AB is:", "the linear combination of columns of \\( A\\) with coefficients the entries of the \\( j^{th}\\) column of \\( B\\).  "],

["Let \\( A\\in M_{m\\times n}( F)\\) and \\( B\\in M_{n\\times p}( F)\\).   Row \\( i\\) of AB is:", "the linear combination of rows of \\( B\\) with coefficients the entries of the \\( i^{th}\\) row of \\( A\\).  "],

["Let \\( V\\) be a finite dimensional vector space over \\( F\\).  An ordered basis \\( \\beta \\) for \\( V\\) is:", "a basis for \\( V\\) endowed with a specific order."],

["Let \\( \\beta =\\{v_{1} ,...,v_{n}\\}\\) be an ordered basis for \\( V\\).  Then for \\( x\\in V\\), let \\( \\{a_{1} ,...,a_{n}\\}\\) be the unique scalars such that \\( x=\\sum\\nolimits _{i=1}^{n} a_{i} v_{i}\\).  Then the coordinate vector of \\( x\\) relative to \\( \\beta \\) is:", "\\( ( a_{1} ,...,a_{n}) \\in F^{n}\\)."],

["Let \\( V\\) and \\( W\\) be finite dimensional vector spaces and let \\( \\beta =\\{v_{1} ,...,v_{n}\\}\\) and \\( \\gamma =\\{w_{1} ,...,w_{m}\\}\\) be  ordered bases for \\( V\\) and \\( W\\) respectively.  Let \\( T:V\\rightarrow W\\) be linear.  The matrix representation of \\( T\\) is:", " \\( [ T]_{\\beta }^{\\gamma } \\in M_{m\\times p}( F)\\) where the entries \\( j^{th}\\) of column of \\( [ T]_{\\beta }^{\\gamma }\\) are the coefficients \\( a_{ij}\\), \\( 1\\leqslant i\\leqslant m\\), of the linear combination \\( T( v_{j}) =\\sum\\nolimits _{i=1}^{m} a_{ij} w_{i}\\)."],

["Let \\( V\\) and \\( W\\) be finite dimensional vector spaces and let \\( \\beta =\\{v_{1} ,...,v_{n}\\}\\) and \\( \\gamma =\\{w_{1} ,...,w_{m}\\}\\) be  ordered bases for \\( V\\) and \\( W\\) respectively. Let \\( T:V\\rightarrow W\\) be linear.  The \\( j^{th}\\) column of \\( [ T]_{\\beta }^{\\gamma }\\) is:", "\\( [ T( v_{j})]_{\\gamma }\\), the coordinate vector of \\( T( v_{j})\\) relative to gamma.  "],

["Let \\( V\\) and \\( W\\) be finite dimensional vector spaces and let \\( \\beta =\\{v_{1} ,...,v_{n}\\}\\) and \\( \\gamma =\\{w_{1} ,...,w_{m}\\}\\) be  ordered bases for \\( V\\) and \\( W\\) respectively. Let \\( T:V\\rightarrow W\\) be linear.  For \\( x\\in V\\),  the matrix representation of \\( T\\) changes:", "the coordinate vector of \\( x\\) relative to \\( \\beta \\) into the coordinate vector of \\( T( x)\\) relative to \\( \\gamma \\).  In other words, for \\( x\\in V\\), \\( [ T( x)]_{\\gamma } =[ T]_{\\beta }^{\\gamma }[ x]_{\\beta }\\)."],

["Let \\( V\\) be a finite dimensional vector space over \\( F\\) and let let \\( \\beta =\\{v_{1} ,...,v_{n}\\}\\) and \\( \\gamma =\\{w_{1} ,...,w_{n}\\}\\) be ordered bases for \\( V\\).  Let \\( T:V\\rightarrow V\\) be liner.  The change of coordinate matrix is:", "\\( Q=[ I_{V}]_{\\gamma }^{\\beta } \\in M_{n\\times n}( F)\\) where the entries of the \\( j^{th}\\) column of \\( Q\\) are the coefficients \\( q_{ij} ,\\ 1\\leqslant i\\leqslant n\\) of the linear combination \\( w_{j} =\\sum\\nolimits _{i=1}^{n} q_{ij} v_{i}\\)."],

["Let \\( V\\) be a finite dimensional vector space over \\( F\\) and let let \\( \\beta =\\{v_{1} ,...,v_{n}\\}\\) and \\( \\gamma =\\{w_{1} ,...,w_{n}\\}\\) be ordered bases for \\( V\\).  Let \\( T:V\\rightarrow V\\) be liner.  If \\( Q=[ I_{V}]_{\\gamma }^{\\beta }\\) is a change of coordinate matrix then:", "\\( Q\\) is invertible."],

["Let \\( V\\) be a finite dimensional vector space over \\( F\\) and let let \\( \\beta =\\{v_{1} ,...,v_{n}\\}\\) and \\( \\gamma =\\{w_{1} ,...,w_{n}\\}\\) be ordered bases for \\( V\\).  Let \\( T:V\\rightarrow V\\) be liner.  For \\( x\\in V\\),  the matrix \\( Q=[ I_{V}]_{\\gamma }^{\\beta }\\) changes:", "\\( x\\) coordinates relative to \\( \\gamma \\) to \\( x\\) coordinates relative to \\( \\beta \\).  In other words, for \\( x\\in V\\), \\( [ x]_{\\beta } =Q[ x]_{\\gamma }\\)."],

["Let \\( V\\) be a finite dimensional vector space over \\( F\\) and let let \\( \\beta =\\{v_{1} ,...,v_{n}\\}\\) and \\( \\gamma =\\{w_{1} ,...,w_{n}\\}\\) be ordered bases for \\( V\\).  Let \\( T:V\\rightarrow V\\) be liner.  If \\( Q=[ I_{V}]_{\\gamma }^{\\beta }\\) then the \\( j^{th}\\) column of \\( Q\\) is:", "\\( [ I_{V}( w_{j})]_{\\beta } =[ w_{j}]_{\\beta }\\) the coordinate vector of \\( w_{j}\\) relative to \\( \\beta \\)."],

["Let \\( V\\) be a finite dimensional vector space over \\( F\\) and let let \\( \\beta \\) and \\( \\gamma \\) be ordered bases for \\( V\\). Let \\( T:V\\rightarrow V\\) be linear.  Let \\( Q\\) be the change of coordinates matrix that changes \\( \\gamma \\) coordinates into \\( \\beta \\) coordinates.  Then \\( [ T]_{\\gamma } =\\):", "\\(Q^{-1}[ T]_{\\beta } Q\\).  "],

["Let \\( \\gamma \\) be an ordered basis for \\( F^{n}\\) and let \\( A\\in M_{n\\times n}( F)\\).  Let \\( L_{A} :F^{n}\\rightarrow F^{n}\\) be defined as \\( L_{A}( x) =Ax\\) for \\( x\\in F^{n}\\).  Then the matrix representation of \\( L_{A}\\) relative to \\( \\gamma \\) is:", "\\( [ L_{A}]_{\\gamma } =Q^{1} AQ\\) where the \\( j^{th}\\) column of \\( Q\\) is the \\( j^{th}\\) vector in \\( \\gamma \\)."],

["Let \\( A\\in M_{n\\times n}( F)\\). Then \\( A\\) is invertible provided that:", "there exits \\( B\\in M_{n\\times n}( F)\\) such that \\( AB=BA=I_{n}\\)."],

["Let \\( V\\) and \\( W\\) be a finite dimensional vector spaces over \\( F\\) and let let \\( \\beta \\) and \\( \\gamma \\) be ordered bases for \\( V\\) and \\( W\\) respectively. Let \\( T:V\\rightarrow W\\) be linear.  Then \\( T\\) is invertible if and only if:", "\\( [ T]_{\\beta }^{\\gamma }\\) is invertible."],

["The function \\( \\Phi :\\mathcal{L}( V,W)\\rightarrow M_{m\\times n}( F)\\) defined by \\( \\Phi ( T) =[ T]_{\\beta }^{\\gamma }\\) is:", "an isomorphism."],

["Let \\( A,B\\in M_{n\\times n}( F)\\).  Then \\( B\\) is similar to \\( A\\) provided that:", "there exists an invertible \\( Q\\in M_{n\\times n}( F)\\) such that \\( B=Q^{-1} AQ\\)."]

];