// Format: [prompt, correct, distractor1, distractor2]
var question = [

["A Jordan block corresponding to an eigenvalue \\( \\lambda \\) is:",
  "an \\( n\\times n\\) matrix with \\( \\lambda \\) on the diagonal, 1's on the superdiagonal, and 0 elsewhere.",
  "a diagonal matrix with distinct eigenvalues on the diagonal.",
  "an identity matrix of size \\( n\\)."],

["Let \\( T\\in \\mathcal{L}( V)\\) and let \\( \\beta \\) be an ordered basis of \\( V\\).  The Jordan canonical form of \\( T\\) is:",
  "the matrix representation of \\( T\\) with Jordan blocks along the diagonal of \\( [ T]_{\\beta }\\).",
  "any upper-triangular matrix representation of \\( T\\).",
  "the identity matrix."],

["Every linear operator whose characteristic polynomial splits has:",
  "a Jordan canonical form unique up to the order of the Jordan blocks.",
  "a unique Jordan form even as to the order of the blocks.",
  "no Jordan form."],

["Let \\( T\\in \\mathcal{L}( V)\\) and let \\( \\lambda \\in F\\).  Then a nonzero \\( x\\) in \\( V\\) is a generalized eigenvector of \\( T\\) corresponding to \\( \\lambda \\) provided that:",
  "\\( ( T-\\lambda I)^{p}( x) =0\\) for some positive integer \\( p\\).",
  "\\( T(x)=\\lambda x\\) is forbidden.",
  "\\( (T-\\lambda I)(x)\\neq 0\\) for every \\( p\\)."],

["If \\( x\\) is a generalized eigenvector of \\( T\\) corresponding to \\( \\lambda \\) and \\( p\\) is the smallest positive integer for which \\( ( T-\\lambda I)^{p}( x) =0\\) then:",
  "\\( ( T-\\lambda I)^{p-1}( x)\\) is an eigenvector of \\( T\\) corresponding to \\( \\lambda \\).",
  "\\( x\\) is never an eigenvector and no vector in the chain is.",
  "\\( (T-\\lambda I)^{p}(x)\\) is a nonzero eigenvector."],

["Let \\( T\\in \\mathcal{L}( V)\\) and let \\( \\lambda \\) be an eigenvalue of \\( T\\).  Then the generalized eigenspace of \\( T\\) corresponding to \\( \\lambda \\) is:",
  "\\( K_{\\lambda } =\\left\\{x\\in V:( T-\\lambda I)^{p}( x) =0\\text{ for some }p\\in \\mathbb{N}\\right\\}\\).",
  "\\( E_{\\lambda}\\) only, with no larger chain.",
  "\\( R(T-\\lambda I)\\)."],

["For any polynomial \\( g( t)\\), if \\( W\\) is \\( T\\)-invariant then:",
  "\\( W\\) is also \\( g(T)\\)-invariant.",
  "\\( W\\) is never \\( g(T)\\)-invariant.",
  "\\( g(T)\\) is zero on \\( V\\)."],

["If \\( T\\in \\mathcal{L}( V)\\) and \\( E_{\\lambda }\\) is an eigenspace of \\( T\\) then \\( V,\\emptyset ,R( T) ,N( T)\\) and \\( E_{\\lambda }\\) are:",
  "\\( T\\)-invariant subspaces of \\( V\\).",
  "bases of \\( V\\).",
  "never \\( T\\)-invariant."],

["Let \\( T\\in \\mathcal{L}( V)\\) and let \\( \\lambda \\) be an eigenvalue of \\( T\\).  Then \\( K_{\\lambda }\\) is:",
  "a \\( T\\)-invariant subspace of \\( V\\) containing \\( E_{\\lambda }\\).",
  "disjoint from \\( E_{\\lambda}\\).",
  "equal to \\( R(T)\\)."],

["Let \\( T\\in \\mathcal{L}( V)\\) and let \\( \\lambda \\) be an eigenvalue of \\( T\\).  Then for any scalar \\( \\mu \\neq \\lambda \\) the restriction of \\( T-\\mu I\\) to \\( K_{\\lambda }\\) is:",
  "one-to-one (\\( N( T-\\mu I)\\cap K_{\\lambda }=\\{0\\}\\)).",
  "the zero map.",
  "never one-to-one."],

["Let \\( T\\in \\mathcal{L}( V)\\) with \\( V\\) finite dimensional and \\( T\\) splitting.  Let \\( \\lambda \\) be an eigenvalue of \\( T\\) with \\( m_{alg}( \\lambda ) =m\\).  Then:",
  "\\( dim( K_{\\lambda }) = m\\) and \\( K_{\\lambda } =N\\left(( T-\\lambda I)^{m}\\right)\\).",
  "\\( dim(K_{\\lambda})>m\\) always.",
  "\\( K_{\\lambda}=\\{0\\}\\)."],

["Let \\( T\\in \\mathcal{L}( V)\\) with \\( V\\) finite dimensional and \\( T\\) splitting.  Let \\( \\{\\lambda _{1} ,...,\\lambda _{k}\\}\\) be the distinct eigenvalues of \\( T\\). Then for every \\( x\\in V\\) there exist \\( v_{i} \\in K_{\\lambda _{i}}\\) such that:",
  "\\( x=v_{1} +...+v_{k}\\).",
  "\\( x\\) lies in exactly one \\( K_{\\lambda_{i}}\\) and the others are zero only if \\( x=0\\) is required.",
  "no such decomposition exists."],

["Let \\( T\\in \\mathcal{L}( V)\\) with \\( V\\) finite dimensional and \\( T\\) splitting.  Let \\( \\beta _{i}\\) be ordered bases for \\( K_{\\lambda _{i}}\\).  Then TFAT:",
  "\\( \\beta _{i} \\cap \\beta _{j} =\\emptyset\\) for \\( i\\neq j\\), \\( \\beta =\\bigcup \\beta _{i}\\) is an ordered basis for \\( V\\), and \\( dim K_{\\lambda _{i}} =m_{alg}( \\lambda _{i})\\).",
  "the bases \\( \\beta_{i}\\) must overlap.",
  "\\( dim K_{\\lambda_{i}}\\) is independent of algebraic multiplicity."],

["Let \\( T\\in \\mathcal{L}( V)\\) with \\( V\\) finite dimensional and \\( T\\) splitting.  Then \\( T\\) is diagonalizable if and only if:",
  "\\( dim( E_{\\lambda }) =dim( K_{\\lambda })\\) for every eigenvalue of \\( T\\).",
  "\\( dim(E_{\\lambda})<dim(K_{\\lambda})\\) for some eigenvalue.",
  "\\( K_{\\lambda}=\\{0\\}\\)."],

["Let \\( T\\in \\mathcal{L}( V)\\) and let \\( x\\) be a generalized eigenvector of \\( T\\) corresponding to \\( \\lambda \\).  Suppose \\( p\\) is the smallest integer such that \\( ( T-\\lambda I)^{p}( x) =0\\).  A cycle of generalized eigenvectors of \\( T\\) corresponding to \\( \\lambda \\) is:",
  "the ordered set \\( \\left\\{( T-\\lambda I)^{p-1}( x) ,\\ldots,( T-\\lambda I)( x) ,x\\right\\}\\).",
  "the set \\( \\{x\\}\\) only.",
  "any basis of \\( V\\)."],

["The initial vector in a cycle of generalized eigenvectors of \\( T\\) is:",
  "the only eigenvector of \\( T\\) in the cycle.",
  "never an eigenvector.",
  "the zero vector."],

["Let \\( T\\) split on finite-dimensional \\( V\\) and let \\( \\beta \\) be a basis that is a disjoint union of cycles of generalized eigenvectors.  Then for each cycle \\( \\gamma\\):",
  "\\( W=span( \\gamma )\\) is \\( T\\)-invariant and \\( [ T_{W}]\\) is a Jordan block.",
  "\\( span(\\gamma)\\) is never \\( T\\)-invariant.",
  "\\( [T_{W}]\\) is a permutation matrix."],

["Let \\( T\\) split on finite-dimensional \\( V\\) and let \\( \\beta \\) be a basis that is a disjoint union of cycles of generalized eigenvectors.  Then:",
  "\\( \\beta \\) is a Jordan canonical basis.",
  "\\( \\beta\\) cannot represent \\( T\\).",
  "\\( [T]_{\\beta}\\) is scalar."],

["Let \\( \\gamma _{1} ,...,\\gamma _{q}\\) be cycles of generalized eigenvectors for \\( \\lambda \\) whose initial vectors are distinct and linearly independent.  Then:",
  "the \\( \\gamma _{i}\\) are disjoint and their union is linearly independent.",
  "the cycles must overlap.",
  "the union is dependent."],

["Every cycle of generalized eigenvectors of a linear operator is:",
  "linearly independent.",
  "linearly dependent.",
  "a basis of \\( V\\)."],

["Let \\( T\\) be a linear operator on finite-dimensional \\( V\\) and let \\( \\lambda \\) be an eigenvalue of \\( T\\).  Then \\( K_{\\lambda }\\) has an ordered basis consisting of:",
  "a union of disjoint cycles of generalized eigenvectors corresponding to \\( \\lambda \\).",
  "eigenvectors only, never longer cycles.",
  "a single vector."],

["Let \\( T\\) split on finite-dimensional \\( V\\).  Then \\( T\\) has:",
  "a Jordan canonical form.",
  "no matrix representation.",
  "only a diagonal form."],

["Let \\( A\\in M_{n\\times n}( F)\\) have splitting characteristic polynomial.  Then:",
  "\\( A\\) has a Jordan canonical form \\( J\\) and \\( A\\) is similar to \\( J\\).",
  "\\( A\\) is similar to a permutation matrix only.",
  "\\( A\\) cannot be similar to a Jordan form."],

["Let \\( T\\) split on finite-dimensional \\( V\\) and let \\( \\lambda _{i}\\) be an eigenvalue. The number of columns in a dot diagram of \\( T-\\lambda_{i}I\\) is:",
  "\\( dim( E_{\\lambda_{i}}) = dim( V) -rank( T-\\lambda _{i} I)\\).",
  "\\( rank(T)\\).",
  "always \\( 1\\)."],

["Cycles of generalized eigenvectors are ordered from:",
  "longest to shortest.",
  "shortest to longest only.",
  "random order with no convention."],

["Let \\( T\\) split on finite-dimensional \\( V\\), let \\( \\lambda _{i}\\) be an eigenvalue, and let \\( \\beta _{i}\\) be a basis for \\( K_{\\lambda _{i}}\\).  The number of cycles which comprise \\( \\beta _{i}\\) is equal to:",
  "\\( dim( E_{\\lambda _{i}})\\).",
  "\\( dim(V)\\).",
  "the algebraic multiplicity only when it differs from geometric multiplicity."],

["Let \\( T\\) split on finite-dimensional \\( V\\) and let \\( \\lambda _{i}\\) be an eigenvalue.  The number of dots in the first row of the dot diagram is:",
  "\\( dim( V) -rank( T-\\lambda _{i} I)\\).",
  "\\( rank(T-\\lambda_{i}I)\\).",
  "\\( n^{2}\\)."],

["The number of columns in a dot diagram corresponds to:",
  "the number of cycles of generalized eigenvectors.",
  "the degree of the minimal polynomial only.",
  "the size of \\( V\\) alone."],

["The number of dots in a given column of a dot diagram corresponds to:",
  "the number of vectors in that cycle of generalized eigenvectors.",
  "the number of distinct eigenvalues.",
  "the rank of \\( T\\)."],

["Let \\( T\\) split on finite-dimensional \\( V\\) and let \\( \\lambda _{i}\\) be an eigenvalue.  The number of dots in row \\( j>1\\) is:",
  "\\( rank\\left(( T-\\lambda _{i} I)^{j-1}\\right) -rank\\left(( T-\\lambda _{i} I)^{j}\\right)\\).",
  "\\( rank(T)\\).",
  "always zero."],

["Let \\( T\\) split on finite-dimensional \\( V\\) and let \\( \\lambda \\) be an eigenvalue.  Then:",
  "\\( dim( E_{\\lambda }) = dim( V) -rank( T -\\lambda I)\\).",
  "\\( dim(E_{\\lambda})=rank(T-\\lambda I)\\).",
  "\\( dim(E_{\\lambda})=n^{2}\\)."],

["The end vector of a cycle of generalized eigenvectors of length \\( p\\) must satisfy:",
  "\\( ( T-\\lambda I)^{p-1}(x) \\neq 0\\) and \\( (T-\\lambda I)^{p}(x)=0\\).",
  "\\( (T-\\lambda I)^{p-1}(x)=0\\).",
  "\\( x=0\\)."],

["Let \\( T\\) split on finite-dimensional \\( V\\).  Then \\( V\\) is:",
  "the direct sum of the generalized eigenspaces: \\( V=K_{\\lambda _{1}} \\oplus \\cdots \\oplus K_{\\lambda _{k}}\\).",
  "the union of the ordinary eigenspaces only.",
  "never a direct sum of generalized eigenspaces."],

["If \\( J\\) is a Jordan canonical form of \\( A\\) then:",
  "\\( J=Q^{-1} AQ\\) where the columns of \\( Q\\) are a Jordan canonical basis.",
  "\\( J=A+I\\).",
  "\\( J\\) is similar to \\( A\\) only if \\( A\\) is invertible."],

["Let \\( A,B\\in M_{n\\times n}( F)\\).  Then \\( A\\) and \\( B\\) are similar if and only if:",
  "\\( A\\) and \\( B\\) have the same Jordan canonical form (up to block order).",
  "\\( A\\) and \\( B\\) have the same first row.",
  "\\( det(A)=1\\)."],

["A monic polynomial is a polynomial with:",
  "leading coefficient \\( 1\\).",
  "constant term \\( 1\\).",
  "no roots."],

["Let \\( V\\) be finite dimensional and \\( T\\in \\mathcal{L}( V)\\).  Then \\( p( t)\\) is a minimal polynomial of \\( T\\) provided that:",
  "\\( p( t)\\) is a monic polynomial of least degree such that \\( p( T) =T_{0}\\).",
  "\\( p\\) is any annihilating polynomial.",
  "\\( p(T)=I\\)."],

["Let \\( V\\) be finite dimensional and \\( T\\in \\mathcal{L}( V)\\).  Then the minimal polynomial of \\( T\\) divides:",
  "the characteristic polynomial of \\( T\\).",
  "every polynomial of degree 1.",
  "no polynomial of positive degree."],

["Let \\( V\\) be finite dimensional and \\( T\\in \\mathcal{L}( V)\\).  The minimal polynomial of \\( T\\) is:",
  "unique.",
  "unique only up to a nonzero scalar.",
  "not unique."],

["Let \\( A\\in M_{n\\times n}( F)\\).  Then \\( p( t)\\) is the minimal polynomial of \\( A\\) provided that:",
  "\\( p( t)\\) is a monic polynomial of least degree such that \\( p( A) =O_{n\\times n}\\).",
  "\\( p(A)=I\\).",
  "\\( p\\) is the characteristic polynomial only when they differ."],

["Let \\( \\beta \\) be an ordered basis of finite-dimensional \\( V\\) and \\( T\\in \\mathcal{L}( V)\\).  Then the minimal polynomial of \\( T\\) is:",
  "the same as the minimal polynomial of \\( [ T]_{\\beta }\\).",
  "dependent on the choice of \\( \\beta\\) in an essential way.",
  "the characteristic polynomial of a different operator."],

["Let \\( V\\) be finite dimensional and \\( T\\in \\mathcal{L}( V)\\).  Then the characteristic polynomial and the minimal polynomial have:",
  "the same zeros.",
  "disjoint zero sets.",
  "degrees that never agree."],

["If \\( p( t)\\) is the minimal polynomial of \\( T\\) then \\( \\lambda \\) is an eigenvalue of \\( T\\) if and only if:",
  "\\( p( \\lambda ) =0\\).",
  "\\( p(\\lambda)\\neq 0\\).",
  "\\( p\\) is constant."],

["Let \\( T\\) have minimal polynomial \\( p\\) and characteristic polynomial \\( f( t)=\\prod (\\lambda_{i}-t)^{n_{i}}\\) with distinct eigenvalues.  Then:",
  "\\( p( t)=\\prod (\\lambda_{i}-t)^{m_{i}}\\) for integers satisfying \\( 1\\leqslant m_{i} \\leqslant n_{i}\\).",
  "each \\( m_{i}\\) may be zero.",
  "each \\( m_{i}\\) exceeds \\( n_{i}\\)."],

["Let \\( T\\) be a linear operator on finite-dimensional \\( V\\) such that \\( V\\) is a \\( T\\)-cyclic subspace of itself.  Then the characteristic polynomial \\( f( t)\\) and the minimal polynomial \\( p( t)\\):",
  "have the same degree and \\( f( t) =(-1)^{n} p( t)\\).",
  "have degrees differing by at least 2.",
  "never share roots."],

["Let \\( T\\) be a linear operator on finite-dimensional \\( V\\).  Then \\( T\\) is diagonalizable if and only if:",
  "the minimal polynomial is a product of distinct linear factors: \\( p( t) =( t-\\lambda _{1})\\cdots( t-\\lambda _{k})\\).",
  "the minimal polynomial has a repeated linear factor.",
  "the minimal polynomial has no roots in \\( F\\)."]

];
