// Format: [prompt, correct, distractor1, distractor2]
var question = [

["Let \\( V\\) be a finite dimensional vector space and let \\( T:V\\rightarrow V\\) be linear.  Then \\( T\\) is diagonalizable provided that:",
  "there exists an ordered basis of \\( V\\) such that \\( [ T]_{\\beta }\\) is diagonal.",
  "\\( [ T]_{\\beta }\\) is diagonal for every ordered basis \\( \\beta\\).",
  "\\( T\\) is invertible."],

["Let \\( V\\) be a finite dimensional vector space with ordered basis \\( \\beta \\) and let \\( T:V\\rightarrow V\\) be linear. If \\( D=[ T]_{\\beta }\\) is diagonal then:",
  "for each \\( v_{j} \\in \\beta\\), \\( T( v_{j}) =d_{jj} v_{j} =\\lambda _{j} v_{j}\\).",
  "\\( T( v_{j})=0\\) for every basis vector.",
  "no basis vector is an eigenvector."],

["Let \\( V\\) be a finite dimensional vector space over \\( F\\) and let \\( T:V\\rightarrow V\\) be linear.  A nonzero \\( v\\in V\\) is an eigenvector of \\( T\\) provided that:",
  "\\( T( v) =\\lambda v\\) for some \\( \\lambda \\in F\\).",
  "\\( T( v)=0\\) only.",
  "\\( v\\) is a basis of \\( V\\)."],

["Let \\( A\\in M_{n\\times n}( F)\\). A nonzero \\( x\\in F^{n}\\) is an eigenvector of \\( A\\) provided that:",
  "\\( Ax=\\lambda x\\) for some \\( \\lambda \\in F\\).",
  "\\( Ax=x+\\lambda\\).",
  "\\( det(A)=\\lambda\\)."],

["Let \\( V\\) be a finite dimensional vector space and let \\( T:V\\rightarrow V\\) be linear.  \\( T\\) is diagonalizable if and only if:",
  "there exists an ordered basis \\( \\beta \\) for \\( V\\) consisting of eigenvectors of \\( T\\).",
  "\\( T\\) has no eigenvectors.",
  "every basis of \\( V\\) consists of eigenvectors."],

["Let \\( V\\) be a finite dimensional vector space and let \\( T:V\\rightarrow V\\) be linear.  If \\( T\\) is diagonalizable and \\( \\beta \\) is an ordered basis for \\( V\\) of eigenvectors of \\( T\\) then:",
  "\\( [ T]_{\\beta }\\) is diagonal and the \\( jj^{th}\\) entry of \\( [ T]_{\\beta }\\) is the eigenvalue corresponding to \\( v_{j} \\in \\beta \\).",
  "\\( [ T]_{\\beta }\\) is the identity.",
  "the diagonal entries are all zero."],

["Let \\( A\\in M_{n\\times n}( F)\\).  Then \\( \\lambda \\in F\\) is an eigenvalue of \\( A\\) if and only if:",
  "\\( det( A-\\lambda I) =0\\).",
  "\\( det( A-\\lambda I)\\neq 0\\).",
  "\\( A-\\lambda I\\) is invertible."],

["Let \\( A\\in M_{n\\times n}( F)\\).  The characteristic polynomial of \\( A\\) is:",
  "\\( f( t) =det( A-tI)\\).",
  "\\( f( t)=det( A+tI)\\).",
  "\\( f( t)=tr(A-tI)\\)."],

["Similar matrices have:",
  "the same characteristic polynomial.",
  "the same eigenvectors.",
  "the same first row."],

["\\( \\lambda \\) is an eigenvalue of \\( T\\) if and only if:",
  "\\( \\lambda \\) is an eigenvalue of \\( [ T]_{\\beta }\\).",
  "\\( \\lambda\\) is never an eigenvalue of \\( [T]_{\\beta}\\).",
  "\\( [T]_{\\beta}\\) is invertible."],

["The characteristic polynomial of \\( A\\in M_{n\\times n}( F)\\) is:",
  "a polynomial of degree \\( n\\) with leading coefficient \\( (-1)^{n}\\).",
  "a polynomial of degree \\( n-1\\).",
  "a polynomial of degree \\( 2n\\) with leading coefficient \\( 1\\)."],

["\\( A\\in M_{n\\times n}( F)\\) has at most:",
  "\\( n\\) eigenvalues.",
  "\\( n^{2}\\) eigenvalues.",
  "one eigenvalue."],

["Let \\( \\beta \\) be an ordered basis of \\( F^{n}\\) consisting of eigenvectors of \\( A\\in M_{n\\times n}( F)\\).  If \\( Q\\in M_{n\\times n}( F)\\) is the matrix whose columns are vectors in \\( \\beta \\) then:",
  "\\( Q^{-1} AQ\\) is diagonal and the \\( jj^{th}\\) diagonal entry is the eigenvalue of \\( A\\) corresponding to the \\( j^{th}\\) vector of \\( \\beta \\).",
  "\\( QAQ^{-1}\\) is the zero matrix.",
  "\\( Q\\) is singular."],

["\\( v\\in V\\) is an eigenvector of \\( T\\) corresponding to \\( \\lambda \\) if and only if:",
  "\\( [ v]_{\\beta } \\in F^{n}\\) is an eigenvector of \\( [ T]_{\\beta }\\) corresponding to \\( \\lambda \\).",
  "\\( [v]_{\\beta}\\) is the zero vector.",
  "\\( [T]_{\\beta}\\) is invertible."],

["Let \\( \\lambda _{1} ,...,\\lambda _{n}\\) be distinct eigenvalues of \\( T\\).  If \\( v_{1} ,...,v_{n}\\) are eigenvectors of \\( T\\) such that \\( v_{i}\\) corresponds to \\( \\lambda _{i}\\) then:",
  "\\( \\{v_{1} ,...,v_{n}\\}\\) is linearly independent.",
  "\\( \\{v_{1} ,...,v_{n}\\}\\) is linearly dependent.",
  "the set spans only \\( \\{0\\}\\)."],

["Let \\( dim( V) =n\\) and \\( T:V\\rightarrow V\\) be linear.  If \\( T\\) has \\( n\\) distinct eigenvalues then:",
  "\\( T\\) is diagonalizable.",
  "\\( T\\) is not diagonalizable.",
  "\\( T\\) has no eigenvectors."],

["A polynomial \\( f( t) \\in P( F)\\) splits over \\( F\\) if:",
  "there exist scalars \\( c,a_{1} ,...,a_{n}\\) such that \\( f( t) =c\\prod\\nolimits _{i=1}^{n}( t-a_{i})\\).",
  "\\( f\\) has no roots in \\( F\\).",
  "\\( deg(f)=1\\) only."],

["If \\( T\\) is diagonalizable then:",
  "the characteristic polynomial of \\( T\\) splits.",
  "the characteristic polynomial of \\( T\\) has no roots.",
  "\\( T\\) has no eigenvalues."],

["The algebraic multiplicity of an eigenvalue \\( \\lambda \\) of \\( T\\), denoted \\( m_{alg}( \\lambda )\\), is:",
  "the largest \\( k\\in \\mathbb{N}\\) for which \\( ( t-\\lambda )^{k}\\) is a factor of the characteristic polynomial of \\( T\\).",
  "the dimension of \\( R(T)\\).",
  "the number of distinct eigenvalues."],

["The eigenspace of \\( T\\) corresponding to \\( \\lambda \\), denoted \\( E_{\\lambda }\\), is defined as:",
  "\\( \\{x\\in V:T( x) =\\lambda x\\}\\) or \\( N( T-\\lambda I)\\).",
  "\\( R(T-\\lambda I)\\).",
  "the set of all eigenvalues."],

["The dimension of eigenspace \\( E_{\\lambda }\\) is:",
  "\\( 1\\leqslant dim( E_{\\lambda }) \\leqslant m_{alg}( \\lambda )\\) where \\( m_{alg}( \\lambda )\\) is the algebraic multiplicity of \\( \\lambda \\).",
  "always equal to \\( n\\).",
  "always zero."],

["Let \\( V\\) be a finite dimensional vector space and let \\( T:V\\rightarrow V\\) be linear such that the characteristic polynomial splits.  Let \\( \\lambda _{1} ,...,\\lambda _{k}\\) be distinct eigenvalues of \\( T\\).  Then \\( T\\) is diagonalizable if and only if:",
  "\\( dim( E_{\\lambda _{i}}) =m_{alg}( \\lambda _{i})\\) for each \\( i\\).",
  "\\( dim( E_{\\lambda _{i}}) =0\\) for each \\( i\\).",
  "\\( m_{alg}(\\lambda_{i})=1\\) is forbidden."],

["Let \\( V\\) be a finite dimensional vector space and let \\( T:V\\rightarrow V\\) be linear.  If \\( T\\) is diagonalizable and \\( \\beta _{i}\\) is an ordered basis for \\( E_{\\lambda _{i}}\\) then:",
  "\\( \\bigcup\\nolimits _{i} \\beta _{i} =\\beta \\) is an ordered basis for \\( V\\) consisting of eigenvectors of \\( T\\).",
  "the union of the \\( \\beta_{i}\\) is linearly dependent and cannot be a basis.",
  "each \\( \\beta_{i}\\) is empty."],

["Let \\( W_{1} ,...,W_{n}\\) be subspaces of a vector space \\( V\\).  Then \\( V\\) is the direct sum of \\( W_{1} ,...,W_{n}\\) if:",
  "\\( V=\\sum\\nolimits _{i=1}^{n} W_{i}\\) and \\( W_{j} \\cap \\sum\\nolimits _{i\\neq j} W_{i} =\\{0\\}\\).",
  "\\( V=\\bigcup W_{i}\\) only.",
  "the subspaces are pairwise equal."],

["A linear operator on a finite dimensional vector space \\( V\\) is diagonalizable if and only if:",
  "\\( V\\) is the direct sum of the eigenspaces of \\( T\\).",
  "\\( V\\) is the union of the eigenspaces of \\( T\\).",
  "every eigenspace is \\( \\{0\\}\\)."],

["A subspace \\( W\\) of a vector space \\( V\\) is \\( T\\)-invariant provided that:",
  "\\( T( W) \\subseteq W\\).",
  "\\( W\\subseteq R(T)\\) only.",
  "\\( T\\) is zero on \\( W\\)."],

["Let \\( T\\) be a linear operator on a vector space \\( V\\) and let \\( x\\in V\\) be nonzero.  Then the \\( T\\)-cyclic subspace of \\( V\\) generated by \\( x\\) is:",
  "\\( span\\left\\{x,T( x) ,T^{2}( x) ,...\\right\\}\\).",
  "\\( N(T)\\).",
  "\\( \\{0\\}\\)."],

["Let \\( T\\) be a linear operator on a finite dimensional vector space \\( V\\) and let \\( W\\) be a \\( T\\)-invariant subspace of \\( V\\).  Then the characteristic polynomial of \\( T_{W}\\) (\\( T\\) restricted to \\( W\\)):",
  "divides the characteristic polynomial of \\( T\\).",
  "is always equal to \\( 1\\).",
  "is never a factor of the characteristic polynomial of \\( T\\)."],

["Let \\( T\\) be a linear operator on a finite dimensional vector space \\( V\\) and let \\( W\\) be a \\( T\\)-cyclic subspace of \\( V\\) generated by \\( x\\).  Let \\( k=dim( W)\\).  Then a basis for \\( W\\) is:",
  "\\( \\left\\{x,T( x) ,T^{2}( x) ,...,T^{k-1}( x)\\right\\}\\).",
  "\\( \\{T^{k}(x)\\}\\).",
  "any basis of \\( V\\)."],

["Let \\( T\\) be a linear operator on a finite dimensional vector space \\( V\\) and let \\( W\\) be a \\( T\\)-cyclic subspace of \\( V\\) generated by \\( x\\).  Let \\( k=dim( W)\\).  If \\( a_{0} x+a_{1} T( x)+...+a_{k-1} T^{k-1}( x)+T^{k}( x) =0\\) then the characteristic polynomial of \\( T_{W}\\) is:",
  "\\( f( t) =(-1)^{k}\\left( a_{0} +a_{1} t+...+a_{k-1} t^{k-1} +t^{k}\\right)\\).",
  "\\( f(t)=t\\).",
  "\\( f(t)=0\\)."],

["(Cayley–Hamilton) Let \\( T\\) be a linear operator on a finite dimensional vector space \\( V\\) and let \\( f( t)\\) be the characteristic polynomial of \\( T\\).  Then:",
  "\\( f( T) =T_{0}\\), the zero operator.",
  "\\( f(T)=I\\).",
  "\\( f(T)=T\\)."],

["(Cayley–Hamilton) Let \\( A\\in M_{n\\times n}( F)\\) and let \\( f( t)\\) be the characteristic polynomial of \\( A\\). Then:",
  "\\( f( A) =O_{n\\times n}\\).",
  "\\( f(A)=I\\).",
  "\\( f(A)=A\\)."],

["Let \\( T\\) be a linear operator on a finite dimensional vector space \\( V\\).  Suppose \\( V\\) is the direct sum of \\( T\\)-invariant subspaces \\( W_{1} ,...,W_{n}\\).  If \\( f_{i}( t)\\) is the characteristic polynomial of \\( T_{W_{i}}\\) then:",
  "\\( f( t) =f_{1}( t) f_{2}( t) \\cdots f_{n}( t)\\) is the characteristic polynomial of \\( T\\).",
  "\\( f(t)=f_{1}(t)+\\cdots+f_{n}(t)\\).",
  "the characteristic polynomial of \\( T\\) is independent of the \\( f_{i}\\)."],

["Let \\( \\{B_{i}\\}_{i=1}^{k}\\) be square matrices with \\( B_{i}\\) of size \\( n_{i}\\times n_{i}\\).  Then the direct sum \\( B_{1} \\oplus B_{2} \\oplus ...\\oplus B_{k}\\) is:",
  "the block-diagonal matrix of size \\( (n_{1}+\\cdots+n_{k})\\times(n_{1}+\\cdots+n_{k})\\) with blocks \\( B_{1},\\ldots,B_{k}\\) on the diagonal and zeros elsewhere.",
  "the matrix of size \\( (n_{1}n_{2}\\cdots n_{k})\\times(n_{1}n_{2}\\cdots n_{k})\\) with those blocks on the diagonal.",
  "the ordinary sum \\( B_{1}+\\cdots+B_{k}\\)."],

["Let \\( T\\) be a linear operator on a finite dimensional vector space \\( V\\) with \\( V=W_{1} \\oplus \\cdots \\oplus W_{k}\\) for \\( T\\)-invariant subspaces, \\( \\beta_{i}\\) a basis of \\( W_{i}\\), and \\( \\beta=\\bigcup \\beta_{i}\\).  If \\( A=[ T]_{\\beta }\\) and \\( B_{i} =[ T_{W_{i}}]_{\\beta _{i}}\\) then:",
  "\\( A=B_{1} \\oplus B_{2} \\oplus ...\\oplus B_{k}\\).",
  "\\( A=B_{1} B_{2}\\cdots B_{k}\\).",
  "\\( A\\) is a scalar matrix."]

];
