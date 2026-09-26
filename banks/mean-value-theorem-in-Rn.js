// Format: [prompt, correct, distractor1, distractor2]
var question = [

["Let \\( u,v\\in \\mathbb{R}^{n}\\).  Then the parametrized path from \\( u\\) to \\( v\\) is:",
  "\\( \\gamma :[ 0,1]\\rightarrow \\mathbb{R}^{n}\\) defined by \\( \\gamma ( t) =u+( v-u) t\\), \\( 0\\leqslant t\\leqslant 1\\).",
  "\\( \\gamma:[0,1]\\rightarrow\\mathbb{R}\\) with \\( \\gamma(t)=u+(v-u)t\\).",
  "\\( \\gamma(t)=v+(u-v)t^{2}\\)."],

["Let \\( f:\\mathbb{R}^{n}\\rightarrow \\mathbb{R}\\) and let \\( \\gamma\\) be the parametrized path from \\( u\\) to \\( v\\).  Then the section \\( \\psi\\) is:",
  "\\( \\psi(t)=f(\\gamma(t))=f(u+(v-u)t)\\) for \\( 0\\leqslant t\\leqslant 1\\).",
  "\\( \\psi(t)=f(u+(u-v)t)\\).",
  "\\( \\psi=f\\) with no composition."],

["We may obtain \\( \\frac{f( x+sp) -f( x)}{s}\\) from \\( \\frac{\\psi ( t) -\\psi ( t_{0})}{t-t_{0}}\\) by the change of variables:",
  "\\( x=u+t_{0}( v-u)\\), \\( p=v-u\\) and \\( s=t-t_{0}\\).",
  "\\( x=v\\), \\( p=u\\) and \\( s=1\\) only.",
  "\\( t=s^{2}\\)."],

["Let \\(O\\) be open in \\(\\mathbb{R}^{n}\\).  Then \\(f:O\\rightarrow \\mathbb{R}\\) has a partial derivative at \\(x\\) in the \\(i^{th}\\) coordinate provided that:",
  "\\( \\dfrac{\\partial f}{\\partial x_{i}}( x) =\\lim _{t\\rightarrow 0}\\dfrac{f( x+te_{i}) -f( x)}{t}\\) exists.",
  "the difference quotient along \\( e_{i}\\) fails to have a limit.",
  "only the directional derivative along \\( p\\neq e_{i}\\) exists."],

["Then \\( f:O\\rightarrow \\mathbb{R}\\) has first-order partial derivatives provided that:",
  "\\( f\\) has a partial derivative along each \\( e_{i}\\) at every point of \\( O\\).",
  "one partial exists at a single point.",
  "\\( f\\) is polynomial."],

["For \\( n >1\\), a function \\( f:\\mathbb{R}^{n}\\rightarrow \\mathbb{R}\\) with first-order partial derivatives need not be:",
  "continuous.",
  "defined on an open set.",
  "real-valued."],

["The component projection \\( p_{i} :\\mathbb{R}^{n}\\rightarrow \\mathbb{R}\\) is defined by:",
  "\\( p_{i}( u) =u_{i}\\), the \\( i^{th}\\) component of \\( u\\).",
  "\\( p_{i}(u)=\\|u\\|\\).",
  "\\( p_{i}(u)=0\\)."],

["Then \\( f:O\\rightarrow \\mathbb{R}\\) is continuously differentiable provided that:",
  "\\( f\\) has first-order partial derivatives and each \\( \\partial f/\\partial x_{i}:O\\to\\mathbb{R}\\) is continuous.",
  "the partials exist but may all be discontinuous.",
  "\\( f\\) is only differentiable along one axis."],

["Every continuously differentiable function is:",
  "continuous.",
  "discontinuous on a dense set.",
  "constant."],

["(Clairaut) Suppose \\( f:O\\rightarrow \\mathbb{R}\\) has continuous second-order partial derivatives.  Then:",
  "\\( \\dfrac{\\partial ^{2} f}{\\partial x_{i} \\partial x_{j}}( x) =\\dfrac{\\partial ^{2} f}{\\partial x_{j} \\partial x_{i}}( x)\\).",
  "mixed partials need not agree even when continuous.",
  "only first partials exist."],

["(Mean Value Lemma) If the segment from \\( x\\) to \\( x+ae_{i}\\) lies in \\( O\\) and the \\( i^{th}\\) partial exists on \\( O\\), then for some \\( \\theta\\in(0,1)\\):",
  "\\( f( x+ae_{i}) -f( x) =a\\,\\dfrac{\\partial f}{\\partial x_{i}}( x+\\theta ae_{i})\\).",
  "\\( f(x+ae_{i})-f(x)=0\\).",
  "the identity uses a partial in a different coordinate."],

["(Mean Value Proposition) If \\( f\\) has first partials on \\( B_{r}(x)\\) and \\( x+h\\in B_{r}(x)\\), then there are points \\( z_{i}\\) in the ball with \\( \\|x-z_{i}\\|<\\|h\\|\\) such that:",
  "\\( f( x+h) -f( x) =\\sum_{i=1}^{n} h_{i}\\dfrac{\\partial f}{\\partial x_{i}}( z_{i})\\).",
  "\\( f(x+h)-f(x)=\\|h\\|\\).",
  "no such points \\( z_{i}\\) exist."],

["Then \\( f\\) has a directional derivative at \\( x\\) in the direction \\( p\\neq 0\\) provided that:",
  "\\( \\lim _{t\\rightarrow 0}\\dfrac{f( x+tp) -f( x)}{t}\\) exists.",
  "only the partials along the axes exist.",
  "\\( p=0\\)."],

["If \\( f\\) is continuously differentiable on \\( O\\), the directional derivative at \\( x\\) in the direction \\( p\\) is:",
  "\\( \\dfrac{\\partial f}{\\partial p}( x) =p^{T} \\nabla f( x)\\).",
  "\\( \\partial f/\\partial p = \\|p\\|\\).",
  "the directional derivative need not exist."],

["The gradient of \\( f\\) at \\( x\\) is:",
  "\\( \\nabla f( x) =\\left(\\dfrac{\\partial f}{\\partial x_{1}}( x) ,\\ldots,\\dfrac{\\partial f}{\\partial x_{n}}( x)\\right)\\).",
  "the Hessian matrix of \\( f\\).",
  "\\( f(x)\\) itself."],

["(Mean Value Theorem) If \\( f\\) is continuously differentiable on \\( O\\) and the segment from \\( x\\) to \\( x+h\\) lies in \\( O\\), then for some \\( \\theta\\in(0,1)\\):",
  "\\( f( x+h) -f( x) =h^{T} \\nabla f( x+\\theta h)\\).",
  "\\( f(x+h)-f(x)=\\|\\nabla f(x)\\|\\).",
  "the identity uses a point outside the segment."],

["If \\( \\nabla f( x)\\neq 0\\), the unit direction of fastest increase is:",
  "\\( p_{0} =\\dfrac{\\nabla f( x)}{\\Vert \\nabla f( x)\\Vert }\\).",
  "\\( p_{0}=-\\nabla f(x)/\\|\\nabla f(x)\\|\\).",
  "any unit vector orthogonal to \\( \\nabla f(x)\\)."]

];
