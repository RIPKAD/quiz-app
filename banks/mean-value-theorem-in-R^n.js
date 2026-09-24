var question = [

["Let \\( u,v\\in \\mathbb{R}^{n}\\).  Then the parametrized path from \\( u\\) to \\( v\\) is:", "\\( \\gamma :[ 0,1]\\rightarrow \\mathbb{R}\\) defined as \\( \\gamma ( t) =u+( v-u) t,\\ 0\\leqslant t\\leqslant 1\\)."],

["Let \\( f:\\mathbb{R}^{n}\\rightarrow \\mathbb{R}\\) and let \\( \\gamma :[ 0,1]\\rightarrow \\mathbb{R}\\) be the parametrized path from \\( u\\) to \\( v\\) in \\( \\mathbb{R}^{n}\\).  Then the section \\( \\psi :\\mathbb{R}^{n}\\rightarrow \\mathbb{R}\\) is:", "the composition of \\( f\\gamma \\) and  defined as \\( f( u+( u-v) t) ,\\ 0\\leqslant t\\leqslant 1\\)."],

["We may find derive \\( \\frac{f( x+sp) -f( x)}{s}\\) from the difference quotient \\( \\frac{\\psi ( t) -\\psi ( t_{0})}{t-t_{0}}\\) by performing the change of variables:", "\\( x=u+t_{0}( v-u)\\), \\( p=v-u\\) and \\( s=t-t_{0}\\)."],

["Let \\(O\\) be an open subset of \\(\\mathbb{R}^{n}\\) and let \\(i=1,2,...,n\\).  Then \\(f:O\\rightarrow \\mathbb{R}\\) has a partial derivative at \\(x\\in \\mathbb{R}^{n}\\) provided that:", "the limit \\( \\begin{array}{{>{\\displaystyle}l}} \\frac{\\partial f}{\\partial x_{i}}( x) =\\lim _{t\\rightarrow 0}\\frac{f( x+te_{i}) -f( x)}{t}\\end{array}\\) exists."],

["Let \\( O\\) be an open subset of \\( \\mathbb{R}^{n}\\) and let \\( i=1,2,...,n\\). Then \\( f:O\\rightarrow \\mathbb{R}\\) has first order partial derivatives provided that:", "\\( f\\) has a partial derivative along each component \\( e_{i}\\) at every point in \\( O\\)."],

["For \\( n >1\\), a function \\( f:\\mathbb{R}^{n}\\rightarrow \\mathbb{R}\\) with first order partial derivatives need not be:", "continuous."],

["Let \\( u\\in \\mathbb{R}^{n}\\).  Then the component projection function \\( p_{i} :\\mathbb{R}^{n}\\rightarrow \\mathbb{R}\\) is defined as:", "\\( p_{i}( u) =u_{i}\\) where \\( u_{i}\\) is the \\( i^{th}\\) component of \\( u\\)."],

["Let \\( O\\) be an open subset of \\( \\mathbb{R}^{n}\\) and let \\( i=1,2,...,n\\). Then \\( f:O\\rightarrow \\mathbb{R}\\) is continuously differentiable provided that:", "\\( f\\) has first order partial derivatives and each partial derivative \\( \\frac{\\partial f}{\\partial x_{i}} :O\\rightarrow \\mathbb{R}\\) is continuous."],

["Every continuously differentiable function is:", "continuous."],

["(Clairaut's Theorem)  Let \\( O\\) be an open subset of \\( \\mathbb{R}^{n}\\) and let \\( i,j=1,2,...,n\\).  Suppose that \\( f:O\\rightarrow \\mathbb{R}\\) has continuous second order partial derivatives.  Then for \\( x\\in O\\) we have that:", "\\( \\frac{\\partial ^{2} f}{\\partial x_{i} \\partial x_{j}}( x) =\\frac{\\partial ^{2} f}{\\partial x_{j} \\partial x_{i}}( x)\\)."],

["(Mean Value Lemma)  Let \\( O\\) be an open subset of \\( \\mathbb{R}^{n}\\) and let \\( i=1,2,...,n\\).  Suppose \\( f:O\\rightarrow \\mathbb{R}\\) has a partial derivative with respect to its \\( i^{th}\\) component at each \\( x\\in O\\).  Let \\( x\\in O\\) and let \\( a\\in \\mathbb{R}\\) such that the segment joining \\( x\\) and \\( x+ae_{i}\\) is in \\( O\\).  Then there exists \\( \\theta \\in ( 0,1)\\) such that:", "\\( f( x+ae_{i}) -f( x) =\\frac{\\partial f}{\\partial x_{i}}( x+\\theta ae_{i}) a\\)."],

["(Mean Value Proposition) Let \\( x\\in \\mathbb{R}^{n}\\) and let \\( r >0\\).  Suppose that \\( f:B_{r}( x)\\rightarrow \\mathbb{R}\\) has first order partial derivatives.  Then if the point \\( x+h\\) belongs to \\( B_{r}( x)\\) there are points \\( z_{1} ,z_{2} ,...,z_{n}\\) in \\( B_{r}( x)\\) such that:", "\\( f( x+h) -f( x) =\\sum\\nolimits _{i=1}^{n} h_{i}\\frac{\\partial f}{\\partial x_{i}}( z_{i})\\) and \\( \\Vert x-z_{i}\\Vert < \\Vert h\\Vert \\)."],

["Let \\( O\\) be open in \\( \\mathbb{R}^{n}\\) and let \\( x\\in O\\).  Let \\( f:O\\rightarrow \\mathbb{R}\\) and let \\( p\\in \\mathbb{R}^{n}\\) be nonzero.  Then \\( f\\) has a directional derivative in the direction \\( p\\) provided that:", "\\( \\lim _{t\\rightarrow 0}\\frac{f( x+tp) -f( x)}{t}\\) exists."],

["Let \\( O\\) be open in \\( \\mathbb{R}^{n}\\) and suppose that \\( f:O\\rightarrow \\mathbb{R}\\) is continuously differentiable on \\( O\\).  Then for each \\( x\\in O\\) and each nonzero \\( p\\in \\mathbb{R}^{n}\\) the function \\( f\\) has a directional derivative at \\( x\\) in the direction \\( p\\) given by:", "\\( \\frac{\\partial f}{\\partial p}( x) =p^{T} \\nabla f( x)\\), the inner product of the gradient at \\( x\\) and the direction vector."],

["Let \\( O\\) be open in \\( \\mathbb{R}^{n}\\) and let \\( x\\in O\\).  Suppose that \\( f:O\\rightarrow \\mathbb{R}\\) has first order partial derivatives at \\( x\\).  Then the gradient of \\( f\\) at \\( x\\) is given by:", "\\( \\nabla f( x) =\\left(\\frac{\\partial f}{\\partial x_{1}}( x) ,\\frac{\\partial f}{\\partial x_{2}}( x) ,...,\\frac{\\partial f}{\\partial x_{n}}( x)\\right)\\)"],

["(Mean Value theorem) Let \\( O\\) be open in \\( \\mathbb{R}^{n}\\) and suppose that \\( f:O\\rightarrow \\mathbb{R}\\) is continuously differentiable on \\( O\\).  If the segment joining the points \\( x\\) and \\( x+h\\) lies in \\( O\\) then exists \\( \\theta \\in ( 0,1)\\) such that:", "\\( f( x+h) -f( x) =h^{T} \\nabla f( x+\\theta h)\\)."],
 
["Let \\( O\\) be open in \\( \\mathbb{R}^{n}\\) and let \\( x\\in O\\).  Suppose that \\( f:O\\rightarrow \\mathbb{R}\\) is continuously differentiable at \\( x\\).  If \\( \\nabla f( x) \\neq 0\\) then \\( p_{0}\\) is the direction of norm \\( 1\\) at \\( x\\) where \\( f\\) is increasing the fastest is:", "\\( p_{o} =\\frac{\\nabla f( x)}{\\Vert \\nabla f( x)\\Vert }\\)."]

];