var question = [

["Let \\( V\\) and \\( W\\) be vector spaces over \\( F\\).  Then \\( T:V\\rightarrow W\\) is a linear transformation provided that:", "for each \\( x,y\\in V\\) and \\( c\\in F\\)  \\( T( x+y) =T( x) +T( y)\\) and \\( T( cx) =cT( x)\\)."],

["If \\( T:V\\rightarrow W\\) is linear then TFAT:", "\\( T( 0_{V}) =0_{W}\\), \\( T( cx+y) =cT( x) +T( y)\\), \\( T\\left(\\sum\\nolimits _{i} a_{i} x_{i}\\right) =\\sum\\nolimits _{i} a_{i} T( x_{i})\\)."],

["Let \\( T:V\\rightarrow W\\) and \\( U:V\\rightarrow W\\) be linear and \\( x,y\\in V\\) and \\( a\\in F\\).  Then:", " \\( T+U:V\\rightarrow W\\)  and \\( aT:V\\rightarrow W\\) are defined as \\( ( T+U)( x) =T( x) +U( x)\\) and \\( ( aT)( x) =aT( x)\\). "],

["Let \\( T:V\\rightarrow W\\) and \\( U:V\\rightarrow W\\) be linear and \\( a\\in F\\).  Then:", " \\( aT+U\\) is linear."],

["The null space of \\( T:V\\rightarrow W\\), denoted \\( N( T)\\), is:", "the set of all \\( x\\in V\\) such that \\( T( x) =0\\)."],

["Then range of \\( T:V\\rightarrow W\\), denoted \\( R( T)\\), is:", "the set of all \\( T( x) \\in W\\) such that \\( x\\in V\\)."],

["\\( N( T)\\) and \\( R( T)\\) are:", "subspaces of \\( V\\) and \\( W\\) respectively."],

["If \\( \\beta =\\{v_{1} ,...,v_{n}\\}\\) is a basis for \\( V\\) then:", "\\( R( T) =span( T( \\beta )) =span(\\{T( v_{1}) ,...,T( v_{n})\\})\\)."],

["The rank of \\( T\\), denoted \\( rank( T)\\), is:", "the dimension of the range of \\( T\\)."],

["The nullity of \\( T\\), denoted \\( null( T)\\), is:", "the dimension of the null space of \\( T\\)."],

["Let \\( V\\) and \\( W\\) be finite dimensional vector spaces and let \\( T:V\\rightarrow W\\) be linear.  Then:", " \\( dim( V) =rank( T) +null( T)\\)."],

["\\( T:V\\rightarrow W\\) is one-to-one provided that:", " for \\( x,y\\in V\\), \\( T( x) =T( y)\\) implies \\( x=y\\)."],

["\\( T:V\\rightarrow W\\) is onto provided that:", " \\( R( T) =W\\)."],

["\\( T:V\\rightarrow W\\) is one-to-one if and only if:", "\\( N( T) =\\{0\\}\\)."],

["If \\( V\\) and \\( W\\) have equal and finite dimension and \\( T:V\\rightarrow W\\) is linear then TFAE:", " \\( T\\) is one-to-one, T is onto, \\( rank( T) =dim( V)\\)."],

["If \\( T:V\\rightarrow W\\) is one-to-one and linear then:", " \\( S\\subseteq V\\) is linearly independent if and only if \\( T( S)\\) is linearly independent."],

["Let \\( \\beta =\\{v_{1} ,...,v_{n}\\}\\) be a basis for \\( V\\) and let \\( \\{w_{1} ,...,w_{n}\\} \\subset W\\).  Then:", "there exists exactly one \\( T:V\\rightarrow W\\) linear such that \\( T( v_{i}) =w_{i}\\) for \\( 1\\leqslant i\\leqslant n\\)."],

["Let \\( \\beta =\\{v_{1} ,...,v_{n}\\}\\) be a basis for \\( V\\) and let \\( T:V\\rightarrow W\\) and \\( U:V\\rightarrow W\\) be linear.  Then:", " \\( T( v_{i}) =U( v_{i})\\) for \\( 1\\leqslant i\\leqslant n\\). implies \\( T=U\\)."],

["Let \\( V\\) be a vector space and let \\( W_{1}\\) and \\( W_{2}\\) be subspaces of \\( V\\) such that \\( V=W_{1} \\oplus W_{2}\\).  A function \\( T:V\\rightarrow V\\) called the projection of \\( W_{1}\\) along \\( W_{2}\\) provided that:", "for \\( x=x_{1} +x_{2}\\) with \\( x_{1} \\in W_{1}\\) and \\( x_{2} \\in W_{2}\\) we have \\( T( x) =x_{1}\\)."],

["Let \\( V\\) be a vector space and let \\( T:V\\rightarrow V\\) be linear.  A subspace \\( W\\) of \\( V\\) is said to be \\( T\\)-invariant if:", "\\( T( x) \\in W\\) for every \\( x\\in W\\).  In other words \\( T( W) =W\\)."],

["Let \\( V,W\\) and \\( Z\\) be vector spaces over \\( F\\).  Let \\( T:V\\rightarrow W\\) and \\( U:W\\rightarrow Z\\) be linear.  Then:", "\\( UT:V\\rightarrow Z\\) is linear. "],

["If \\( UT\\) is one-to-one, then:", "\\( T\\) is one-to-one but \\( U\\) need not be one-to-one."],

["If \\( UT\\) is onto, then:", "\\( U\\) is onto but \\( T\\) need not be onto."],

["If \\( U\\) and \\( T\\) are one-to-one and onto then:", "\\( UT\\) is also one-to-one and onto."],

["Let \\( V\\) be a vector space and let \\( T,U_{1} ,U_{2} \\in \\mathcal{L}( V)\\).  Then TFAT:", "composition distributes over addition, composition is associative, scalar multiplication and composition are associative."],

["Let \\( T:V\\rightarrow W\\) be linear.  Then \\( T\\) is invertible provided that:", "there exists a \\( U:W\\rightarrow V\\) such that \\( UT=I_{V}\\) and \\( TU=I_{W}\\)."],

["\\( T:V\\rightarrow W\\) is invertible if and only if:", "\\( rank( T) =dim( V)\\)"],

["Vector spaces \\( V\\) and \\( W\\) are isomorphic provided that:", "there exists an invertible linear transformation \\( T:V\\rightarrow W\\)."],

["A relation on a set \\( A\\) is an equivalence relation provided that:", "for \\( x,y,z\\in A\\): (reflexive) \\( x\\ \\sim \\ x\\), (symmetric) \\( x\\ \\sim \\ y\\) implies \\( y\\ \\sim \\ x\\), and (transitive) \\( x\\ \\sim \\ y\\) and \\( y\\ \\sim \\ z\\) implies \\( x\\ \\sim \\ z\\)."],

["Isomorphic to is:", "an equivalence relation."],

["Vector spaces \\( V\\) and \\( W\\) are isomorphic if and only if:", "\\( dim( V) =dim( W)\\)."]

];