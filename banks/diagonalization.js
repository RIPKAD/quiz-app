var question = [

["Let \\( V\\) be a finite dimensional vector space and let \\( T:V\\rightarrow V\\) be linear.  Then \\( T\\) is diagonalizable provided that:", "there exists an ordered basis of \\( V\\) such that \\( [ T]_{\\beta }\\) is diagonal. "],

["Let \\( V\\) be a finite dimensional vector space with ordered basis \\( \\beta \\) and let \\( T:V\\rightarrow V\\) be linear. If \\( D=[ T]_{\\beta }\\) is diagonal then:", " for each \\( v_{j} \\in \\beta ,\\ 1\\leqslant j\\leqslant n\\), \\( T( v_{j}) =\\sum\\nolimits _{i=1}^{n} d_{ij} v_{i} =d_{jj} v_{j} =\\lambda _{j} v_{j}\\)."],

[" Let \\( V\\) be a finite dimensional vector space over \\( F\\) and let \\( T:V\\rightarrow V\\) be linear.  A nonzero \\( v\\in V\\) is an eigenvector of \\( T\\) provided that:", " \\( T( v) =\\lambda v\\) for some \\( \\lambda \\in F\\)."],

["Let \\( A\\in M_{n\\times n}( F)\\). A nonzero \\( x\\in F^{n}\\) is an eigenvector of \\( A\\) provided that:", " \\( Ax=\\lambda x\\) for some \\( \\lambda \\in F\\)."],

["Let \\( V\\) be a finite dimensional vector space and let \\( T:V\\rightarrow V\\) be linear.  \\( T\\) is diagonalizable if and only if:", " there exists an ordered basis \\( \\beta \\) for \\( V\\) consisting of eigenvectors of \\( T\\)."],

["Let \\( V\\) be a finite dimensional vector space and let \\( T:V\\rightarrow V\\) be linear.  If \\( T\\) is diagonalizable and \\( \\beta \\) is an ordered basis for \\( V\\) of eigenvectors of \\( T\\) then:", " \\( [ T]_{\\beta }\\) is diagonal and the \\( jj^{th}\\) entry of \\( [ T]_{\\beta }\\) is the eigenvalue corresponding to \\( v_{j} \\in \\beta \\)."],

["Let \\( A\\in M_{n\\times n}( F)\\).  Then \\( \\lambda \\in F\\) is an eigenvalue of \\( A\\) if and only if:", " \\( det( A-\\lambda T) =0\\)."],

["Let \\( A\\in M_{n\\times n}( F)\\).  The characteristic polynomial of \\( A\\) is:", " \\( f( t) =det( A-tI)\\)."],

["Similar matrices have:", " the same characteristic polynomial."],

["\\( \\lambda \\) is an eigenvalue of \\( T\\) if and only if:", " \\( \\lambda \\) is an eigenvalue of \\( [ T]_{\\beta }\\)"],

["The characteristic polynomial of \\( A\\in M_{n\\times n}( F)\\) is:", " a polynomial of degree \\( n\\) with leading coefficient \\( ( -1)^{n}\\)."],

["\\( A\\in M_{n\\times n}( F)\\) has at most:", " \\( n\\) eigenvalues."],

["Let \\( \\beta \\) be an ordered basis of \\( F^{n}\\) consisting of eigenvectors of \\( A\\in M_{n\\times n}( F)\\).  If \\( Q\\in M_{n\\times n}( F)\\) is the matrix whose columns are vectors in \\( \\beta \\) then:", " \\( Q^{-1} AQ\\) is diagonal and the \\( jj^{th}\\) diagonal entry of \\( Q^{-1} AQ\\) is the eigenvalue of \\( A\\) corresponding to the \\( j^{th}\\) vector of \\( \\beta \\)."],

["\\( v\\in V\\) is an eigenvector of \\( T\\)corresponding to \\( \\lambda \\) if and only if:", " \\( [ v]_{\\beta } \\in F^{n}\\) is an eigenvector of \\( [ T]_{\\beta }\\) corresponding to \\( \\lambda \\)"],

["Let \\( \\lambda _{1} ,...,\\lambda _{n}\\)be distinct eigenvalues of \\( T\\).  If \\( v_{1} ,...,v_{n}\\) are eigenvectors of \\( T\\) such that \\( v_{i}\\)corresponds \\( \\lambda _{i}\\) \\( ( 1\\leqslant i\\leqslant n)\\) then:", " \\( \\{v_{1} ,...,v_{n}\\}\\) is linearly independent."],

["Let \\( dim( V) =n\\) and \\( T:V\\rightarrow V\\) be linear.  If \\( T\\) has \\( n\\) distinct eigenvalues then:", " \\( T\\) is diagonalizable."],

["A polynomial \\( f( t) \\in P( F)\\) splits over \\( F\\) if:", " there exist scalars \\( c,a_{1} ,...,a_{n}\\) such that \\( f( t) =c\\prod\\nolimits _{i=1}^{n}( t-a_{i})\\)."],

["If \\( T\\) is diagonalizable then:", " the characteristic polynomial of \\( T\\) splits."],

["The algebraic multiplicity of an eigenvalue \\( \\lambda \\) of \\( T\\), denoted \\( m_{alg}( \\lambda )\\), is:", " the largest \\( k\\in \\mathbb{N}\\) for which \\( ( t-\\lambda )^{k}\\) is a factor of the characteristic polynomial of \\( T\\)."],

["The eigenspace of \\( T\\) corresponding to \\( \\lambda \\), denoted \\( E_{\\lambda }\\), is defined as:", " \\( \\{x\\in V:T( x) =\\lambda x\\}\\) or \\( N( T-\\lambda I)\\)."],

["The dimension of eigenspace \\( E_{\\lambda }\\) is:", " \\( 1\\leqslant dim( E_{\\lambda }) \\leqslant m_{alg}( \\lambda )\\) where \\( m_{alg}( \\lambda )\\) is the algebraic multiplicity of \\( \\lambda \\)."],

["Let \\( V\\) be a finite dimensional vector space and let \\( T:V\\rightarrow V\\)  be linear such that the characteristic polynomial splits.  Let \\( \\lambda _{1} ,...,\\lambda _{n}\\)be distinct eigenvalues of \\( T\\).  Then \\( T\\) is diagonal if and only if:", " \\( dim( E_{\\lambda _{i}}) =m_{alg}( \\lambda _{i})\\) for each \\( i\\ ( 1\\leqslant i\\leqslant n)\\)."],

["Let \\( V\\) be a finite dimensional vector space and let \\( T:V\\rightarrow V\\)  be linear.  If \\( T\\) is diagonalizable and \\( \\beta _{i}\\) is an ordered basis for \\( E_{\\lambda _{i}} ,( 1\\leqslant i\\leqslant n)\\) then:", " \\( \\bigcup\\nolimits _{i=1}^{n} \\beta _{i} =\\beta \\) is an ordered basis for \\( V\\) consisting of eigenvectors of \\( T\\)."],

["Let \\( W_{1} ,...,W_{n}\\) be subspaces of a vector space \\( V\\).  Then \\( V\\) is the direct sum of \\( W_{1} ,...,W_{n}\\) if:", " \\) \\)\\( V=\\sum\\nolimits _{i=1}^{n} W_{i}\\) and \\( W_{j} \\cap \\sum\\nolimits _{i\\neq j} W_{i} =\\{0\\}\\)."],

["A linear operator on a finite dimensional vector space \\( V\\) is diagonalizable if and only if:", " \\( V\\) is the direct sum of the eigenspaces of \\( T\\)."],

["A subspace \\( W\\) of a vector space \\( V\\) is \\( T\\)-invariant provided that:", " \\( T( W) =W\\)."],

["Let \\( T\\) be a linear operator on a vector space \\( V\\) and let \\( v\\in V\\) be nonzero.  Then \\( T\\)-cyclic subspace of \\( V\\) generated by \\( x\\) is defined as:", " \\( span\\left\\{x,T( x) ,T^{2}( x) ,...\\right\\}\\)."],

["Let \\( T\\) be a linear operator on a finite dimensional vector space \\( V\\) and let \\( W\\) be a \\( T\\)-invariant subspace of \\( V\\).  Then the characteristic polynomial of \\( T_{W}\\) (\\( T\\) restricted to \\( W\\)):", " divides the characteristic polynomial of \\( T\\)."],

["Let \\( T\\) be a linear operator on a finite dimensional vector space \\( V\\) and let \\( W\\) be a \\( T\\)-cyclic subspace of \\( V\\) generated by \\( x\\).  Let \\( k=dim( W)\\).  Then a basis for \\( W\\) is:", " \\( \\left\\{x,T( x) ,T^{2}( x) ,...,T^{k-1}( x)\\right\\}\\)."],

["Let \\( T\\) be a linear operator on a finite dimensional vector space \\( V\\) and let \\( W\\) be a \\( T\\)-cyclic subspace of \\( V\\) generated by \\( x\\).  Let \\( k=dim( W)\\).  If \\( a_{0} v+a_{1} T( v) +...+a_{k-1} T^{k-1}( v) +T^{k}( v) =0\\) then the characteristic polynomial of  \\( T_{W}\\) (\\( T\\) restricted to \\( W\\)) is:", " \\( f( t) =( -1)^{k}\\left( a_{0} +a_{1} t+...+a_{k-1} t^{k-1} +t^{k}\\right)\\)."],

["(Cayley- Hamilton) Let \\( T\\) be a linear operator on a finite dimensional vector space \\( V\\) and let \\( f( t)\\) be the characteristic polynomial of \\( T\\).  Then:", " \\( f( T) =T_{0}\\), the zero operator."],

["(Cayley- Hamilton) Let \\( A\\in M_{n\\times n}( F)\\) and let \\( f( t)\\) be the characteristic polynomial of \\( A\\). Then:", " \\( f( A) =O_{n\\times n}\\)."],

["Let \\( T\\) be a linear operator on a finite dimensional vector space \\( V\\).  Suppose \\( V\\) is the direct sum of \\( W_{1} ,...,W_{n}\\) where \\( W_{i}\\) are \\( T\\)-invariant subspaces of \\( V\\).  If \\( f_{i}( t)\\) is the characteristic polynomial of \\( T_{W_{i}}\\) then:", " \\( f( t) =f_{1}( t) f_{2}( t) ...f_{n}( t)\\) is the characteristic polynomial of \\( T\\)."],

["Let \\( \\{B_{i}\\}_{i=1}^{k}\\) be a collection of square matrices with entries from \\( F\\) such that \\( B_{i}\\) has dimension \\( n_{i} \\times n_{i}\\).  Then the direct sum of \\( B_{1} \\oplus B_{2} \\oplus ...\\oplus B_{k}\\) is:", " the matrix with dimension \\( ( n_{1} n_{2} ...n_{k}) \\times ( n_{1} n_{2} ...n_{k})\\) and block matrices \\( B_{1} ,B_{2} ,...,B_{k}\\) along the diagonal and all other entries zero."],

["Let \\( T\\) be a linear operator on a finite dimensional vector space \\( V\\) and let \\( W_{1} ,W_{2} ,...,W_{k}\\) be \\( T\\)-invariant subspaces of \\( V\\) such that \\( V=W_{1} \\oplus W_{2} \\oplus ...\\oplus W_{k}\\).  For each \\( i,1\\leqslant i\\leqslant k\\) let \\( \\beta _{i}\\) be ordered bases for \\( W_{i}\\) and let \\( \\beta =\\beta _{1} \\cup \\beta _{2} \\cup ...\\cup \\beta _{k}\\).  Let \\( A=[ T]_{\\beta }\\) and \\( B_{i} =[ T_{W}]_{\\beta _{i}}\\).  Then:", " \\( A=B_{1} \\oplus B_{2} \\oplus ...\\oplus B_{k} .\\)"]

];