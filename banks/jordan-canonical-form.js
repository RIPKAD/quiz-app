var question = [

["A Jordan block corresponding to an eigenvalue \\( \\lambda \\) is:", " a \\( n\\times n\\) diagonal matrix with \\( \\lambda \\) along the diagonals, 1's along the super diagonal."],

["Let \\( T\\in \\mathcal{L}( V)\\) and let \\( \\beta \\) be an ordered basis of \\( V\\).  The Jordan canonical form of \\( T\\) is:", "the matrix representation of \\( T\\) with Jordan blocks along the diagonal of \\( [ T]_{\\beta }\\)."],

["Every linear operator that splits has:", "a Jordan canonical form unique up to the order to the Jordan blocks."],

["Let \\( T\\in \\mathcal{L}( V)\\) and let \\( \\lambda \\in F\\).  Then a nonzero \\( x\\) in \\( V\\) is a generalized eigenvector of \\( T\\) corresponding to \\( \\lambda \\) provided that:", "\\( ( T-\\lambda I)^{p}( x) =0\\) for some positive integer \\( p\\)."],

["If \\( x\\) is a generalized eigenvector of \\( T\\) corresponding to \\( \\lambda \\) and \\( p\\) is the smallest positive integer for which \\( ( T-\\lambda I)^{p}( x) =0\\) then:", "\\( ( T-\\lambda I)^{p-1}( x) =0\\) is an eigenvector of \\( T\\) corresponding to \\( \\lambda \\)."],

["Let \\( T\\in \\mathcal{L}( V)\\) and let \\( \\lambda \\) be an eigenvalue of \\( T\\).  Then the generalized eigenspace of \\( T\\) corresponding to \\( \\lambda \\) is:", "\\( K_{\\lambda } =\\left\\{x\\in V:( T-\\lambda I)^{p}( x) =0,\\ p\\in \\mathbb{N}\\right\\}\\)."],

["For any polynomial \\( g( t)\\), if \\( W\\) is \\( T\\)-invariant then:", "\\( W\\) is also \\( g(T)\\)-invariant."],

["If \\( T\\in \\mathcal{L}( V)\\) and \\( E_{\\lambda }\\) is an eigenspace of \\( T\\) then \\( V,\\emptyset ,R( T) ,N( T)\\) and \\( E_{\\lambda }\\) are:", "\\( T\\)-invariant subspaces of \\( V\\)."],

["Let \\( T\\in \\mathcal{L}( V)\\) and let \\( \\lambda \\) be an eigenvalue of \\( T\\).  Then \\( K_{\\lambda }\\) is:", " a \\( T\\)-invariant subspace of \\( V\\) containing \\( E_{\\lambda }\\)."],

["Let \\( T\\in \\mathcal{L}( V)\\) and let \\( \\lambda \\) be an eigenvalue of \\( T\\).  Then for any scalar \\( \\mu \\neq \\lambda \\) the restriction of \\( T-\\mu I\\) to \\( K_{\\lambda }\\) is:", "one-to-one (\\( N( T-\\mu I) =\\{0\\}\\))."],

["Let \\( T\\in \\mathcal{L}( V)\\) such that \\( V\\) is finite dimensional and \\( T\\) splits.  Let \\( \\lambda \\) be an eigenvalue of \\( T\\) with \\( m_{alg}( \\lambda ) =m\\).  Then:", "\\( dim( K_{\\lambda }) \\leqslant m\\) and \\( K_{\\lambda } =N\\left(( T-\\lambda I)^{m}\\right)\\)."],

["Let \\( T\\in \\mathcal{L}( V)\\) such that \\( V\\) is finite dimensional and \\( T\\) splits.  Let \\( \\{\\lambda _{1} ,...,\\lambda _{k}\\}\\) be the distinct eigenvalues of \\( T\\). Then for every \\( x\\in V\\) there exist eigenvectors \\( v_{i} \\in K_{\\lambda _{i}} ,1\\leqslant i\\leqslant k\\), such that:", " \\( x=v_{1} +...+v_{k}\\)."],

["Let \\( T\\in \\mathcal{L}( V)\\) such that \\( V\\) is finite dimensional and \\( T\\) splits.  Let \\( \\{\\lambda _{1} ,...,\\lambda _{k}\\}\\) be the distinct eigenvalues of \\( T\\). Let \\( \\beta _{i}\\) be ordered bases for \\( K_{\\lambda _{i}}\\), \\( 1\\leqslant i\\leqslant k\\).  Then TFAT:", "\\( \\beta _{i} \\cap \\beta _{j} =\\emptyset ,\\ i\\neq j\\), \\( \\beta =\\bigcup\\nolimits _{i=1}^{k} \\beta _{i}\\) is an ordered basis for \\( V\\) and \\( dimK_{\\lambda _{i}} =m_{alg}( \\lambda _{i})\\) for all \\( i\\). "],

["Let \\( T\\in \\mathcal{L}( V)\\) such that \\( V\\) is finite dimensional and \\( T\\) splits.  Then \\( T\\) is diagonalizable if and only if:", "\\( dim( E_{\\lambda }) =dim( K_{\\lambda })\\) for every eigenvalue of \\( T\\)."],

["Let \\( T\\in \\mathcal{L}( V)\\) and let \\( x\\) be a generalized eigenvector of \\( T\\ \\)corresponding to \\( \\lambda \\).  Suppose \\( p\\) is the smallest integer such that \\( ( T-\\lambda I)^{p}( x) =0\\).  A cycle of generalized eigenvectors of \\( T\\) corresponding to \\( \\lambda \\) is:", "the ordered set \\( \\left\\{( T-\\lambda I)^{p-1}( x) ,( T-\\lambda I)^{p-2}( x) ,...,( T-\\lambda I)^{p}( x) ,x\\right\\}\\)."],

["The initial vector in a cycle of generalized eigenvectors of \\( T\\) is:", "the only eigenvector of \\( T\\) in the cycle. "],

["Let \\( T\\in \\mathcal{L}( V)\\) such that \\( V\\) is finite dimensional and \\( T\\) splits. Let \\( \\beta \\) be a basis for \\( V\\) such that \\( \\beta \\) is a disjoint union of cycles of generalized eigenvectors of \\( T\\).  Then for each cycle \\( \\gamma \\) of generalized eigenvectors contained in \\( \\beta \\):", " \\( W=span( \\gamma )\\) is \\( T\\)-invariant and and \\( [ T_{W}]\\) is a Jordan block."],

["Let \\( T\\in \\mathcal{L}( V)\\) such that \\( V\\) is finite dimensional and \\( T\\) splits. Let \\( \\beta \\) be a basis for \\( V\\) such that \\( \\beta \\) is a disjoint union of cycles of generalized eigenvectors of \\( T\\).  Then:", "\\( \\beta \\) is a Jordan canonical basis."],

["Let \\( T\\in \\mathcal{L}( V)\\) and let \\( \\lambda \\) be an eigenvector of \\( T\\).  Suppose that \\( \\gamma _{1} ,\\gamma _{2} ,...,\\gamma _{q}\\) are cycles of generalized eigenvectors of \\( T\\) corresponding to \\( \\lambda \\) such that the initial vectors of each \\( \\gamma _{i}\\) are distinct and form a linearly independent set.  Then:", "the \\( \\gamma _{i} 's\\) are disjoint and their union is linearly independent."],

["Every cycle of generalized eigenvectors of a linear operator is:", "linearly independent."],

["Let \\( T\\ \\)be a linear operator on a finite dimensional vector space \\( V\\) and let \\( \\lambda \\) be an eigenvalue of \\( T\\).  Then \\( K_{\\lambda }\\) has an ordered basis consisting of:", "a union of disjoint cycles of generalized eigenvalues corresponding to \\( \\lambda \\)."],

["Let \\( T\\in \\mathcal{L}( V)\\) such that \\( V\\) is finite dimensional and \\( T\\) splits.  Then \\( T\\) has:", "a Jordan canonical form."],

["Let \\( A\\in M_{n\\times n}( F)\\) such that the characteristic polynomial of \\( A\\) splits.  Then:", "\\( A\\) has a Jordan canonical form \\( J\\) and \\( A\\) is similar to \\( J\\)."],

["Let \\( T\\in \\mathcal{L}( V)\\) such that \\( V\\) is finite dimensional and \\( T\\) splits.   Let \\( \\lambda _{i}\\) be an eigenvalue of  \\( T\\). The number of columns on a dot diagram of \\( T_{i}\\) is:", "\\( dim( V) -rank( T-\\lambda _{i} I)\\). "],

["Cycles of generalized eigenvectors are ordered from:", "longest to shortest."],

["Let \\( T\\in \\mathcal{L}( V)\\) such that \\( V\\) is finite dimensional and \\( T\\) splits.   Let \\( \\lambda _{i}\\) be an eigenvalue of  \\( T\\) and let \\( \\beta _{i}\\) be a basis for \\( K_{\\lambda _{i}}\\).  The number of cycles \\( \\gamma _{j}\\) of generalized eigenvectors which comprise \\( \\beta _{i}\\) is equal to:", "\\( dim( V) -rank([ T]_{\\beta } -\\lambda I)\\) or \\( dim( E_{\\lambda _{i}})\\)."],

["Let \\( T\\in \\mathcal{L}( V)\\) such that \\( V\\) is finite dimensional and \\( T\\) splits.   Let \\( \\lambda _{i}\\) be an eigenvalue of  \\( T\\).  The number of dots in the first row of the dot diagram of \\( T_{i}\\) is:", "\\( dim( V) -rank( T-\\lambda _{i} I)\\). "],

["The number columns in a dot diagram corresponds to:", "the number of cycles of generalized eigenvectors. "],

["The number of dots in a given column of a dot diagram corresponds to:", "the number of vectors \\( p\\) in a cycle of generalized eigenvectors. "],

["Let \\( T\\in \\mathcal{L}( V)\\) such that \\( V\\) is finite dimensional and \\( T\\) splits.   Let \\( \\lambda _{i}\\) be an eigenvalue of  \\( T\\).   The number of dots in row \\( r_{j} ,\\ j >1\\) is:", "\\( rank\\left(( T-\\lambda _{i} I)^{j-1}\\right) -rank\\left(( T-\\lambda _{i} I)^{j}\\right)\\). "],

["Let \\( T\\in \\mathcal{L}( V)\\) such that \\( V\\) is finite dimensional and \\( T\\) splits.  Let \\( \\lambda \\) be an eigenvalue of  \\( T\\).  Then:", "\\( dim( E_{\\lambda }) = dim( V) -rank([ T]_{\\beta } -\\lambda I)\\). "],

["Then end vector of a cycle of generalized eigenvectors must satisfy:", "\\( ( T-\\lambda I)^{p-1} \\neq 0\\). "],

["Let \\( T\\in \\mathcal{L}( V)\\) such that \\( V\\) is finite dimensional and \\( T\\) splits.  Then \\( V\\) is:", "the direct sum of the generalized eigenspaces of \\( T\\).  \\( V=K_{\\lambda _{1}} \\oplus K_{\\lambda _{2}} \\oplus ...\\oplus K_{\\lambda _{k}}\\). "],

["If \\( J\\) is a Jordan canonical form of \\( A\\) then:", "\\( J=Q^{-1} AQ\\) where the columns of \\( Q\\) are the vectors in the Jordan canonical basis of \\( J\\)."],

["Let \\( A,B\\in M_{n\\times n}( F)\\).  The \\( A\\) and \\( B\\) are similar if and only if:", "\\( A\\) and \\( B\\) have the same Jordan canonical form."],

["A monic polynomial is a polynomial with:", "a leading coefficient of 1."],

["Let \\( V\\) be a finite dimensional vector space and let \\( T\\in \\mathcal{L}( V)\\).  Then \\( p( t)\\) is a minimal polynomial of \\( T\\) provided that:", "\\( p( t)\\) is a monic polynomial of least degree such that \\( p( T) =T_{0}\\)."],

["Let \\( V\\) be a finite dimensional vector space and let \\( T\\in \\mathcal{L}( V)\\).  Then the minimal polynomial of \\( T\\) divides:", "the characteristic polynomial of \\( T\\)."],

["Let \\( V\\) be a finite dimensional vector space and let \\( T\\in \\mathcal{L}( V)\\).  The minimal polynomial of \\( T\\) is:", "unique."],

["Let \\( A\\in M_{n\\times n}( F)\\).  Then the \\( p( t)\\) is the minimal polynomial of \\( A\\) provided that:", "\\( p( t)\\) is a monic polynomial of least degree such that \\( p( A) =O_{n\\times n}\\)."],

["Let \\( \\beta \\) be an ordered basis of a finite dimensional vector space \\( V\\) and let \\( T\\in \\mathcal{L}( V)\\).  Then the minimal polynomial if \\( T\\) is:", "the same as the minimal polynomial of \\( [ T]_{\\beta }\\)."],

["Let \\( V\\) be a finite dimensional vector space and let \\( T\\in \\mathcal{L}( V)\\).  Then the characteristic polynomial and the minimal polynomial have:", "the same zeros."],

["If \\( p( t)\\) is a minimal polynomial of a linear operator \\( T\\) then \\( \\lambda \\) is an eigenvalue of \\( T\\) if and only if:", "\\( p( \\lambda ) =0\\)."],

["Let \\( T\\) be a linear operator on a finite dimensional vector space \\( V\\) with minimal polynomial \\( p( t)\\) and characteristic polynomial \\( f( t)\\).  Suppose \\( f( t) =( \\lambda _{1} -t)^{n_{1}}( \\lambda _{2} -t)^{n_{2}} ...( \\lambda _{k} -t)^{n_{k}}\\) where \\( \\lambda _{1} ,\\lambda _{2} ,...,\\lambda _{k}\\) are distinct eigenvalues of \\( T\\).  Then:", "there exist \\( m_{1} ,m_{2} ,...,m_{k}\\) such that \\( 1\\leqslant m_{i} \\leqslant n_{i}\\) for all \\( i\\) and \\( p( t) =( \\lambda _{1} -t)^{m_{1}}( \\lambda _{2} -t)^{m_{2}} ...( \\lambda _{k} -t)^{m_{k}}\\)."],

["Let \\( T\\) be a linear operator on a finite dimensional vector space \\( V\\) such that \\( V\\) is a \\( T\\)-cyclic subspace of itself..  Then the characteristic polynomial \\( f( t)\\) and the minimal polynomial \\( p( t)\\):", "have the same degree and \\( f( t) =( -1)^{n} p( t)\\)."],

["Let \\( T\\) be a linear operator on a finite dimensional vector space \\( V\\).  Then \\( T\\) is diagonalizable if and only if:", "the minimal polynomial \\( p( t)\\) has the form \\( p( t) =( t-\\lambda _{1})( t-\\lambda _{2}) ...( t-\\lambda _{k})\\)."]

];