// Format: [prompt, correct, distractor1, distractor2]
var question = [

["Let \\( A\\in M_{n\\times n}( F)\\).  If \\( n=1\\) so that \\( A=( a_{11})\\) then:",
  "\\( det( A) =a_{11}\\).",
  "\\( det( A) =1\\).",
  "\\( det( A) =0\\)."],

["Let \\( A\\in M_{n\\times n}( F)\\) and let \\( \\tilde{A}_{ij}\\) be the matrix which excludes the row \\( i\\) and column \\( j\\) of \\( A\\).  For \\( n\\geqslant 2\\), for any \\( i,1\\leqslant i\\leqslant n\\), the cofactor expansion along row \\( i\\) of \\( A\\) is:",
  "\\( det( A) =\\sum\\nolimits _{j=1}^{n}( -1)^{i+j} a_{ij} det(\\tilde{A}_{ij})\\).",
  "\\( det( A) =\\sum\\nolimits _{j=1}^{n} a_{ij} det(\\tilde{A}_{ij})\\).",
  "\\( det( A) =\\sum\\nolimits _{j=1}^{n}( -1)^{i+j} det(\\tilde{A}_{ij})\\)."],

["Let \\( A\\in M_{n\\times n}( F)\\).  If \\( B\\in M_{n\\times n}( F)\\) results from interchanging any two rows then:",
  "\\( det( A) =(-1)\\,det( B)\\).",
  "\\( det( A) =det( B)\\).",
  "\\( det( A) =0\\)."],

["Let \\( A\\in M_{n\\times n}( F)\\).  If \\( B\\in M_{n\\times n}( F)\\) results from multiplying a row by a nonzero constant \\( k\\) then:",
  "\\( det( A) =\\frac{1}{k} det( B)\\).",
  "\\( det( A) =k\\,det( B)\\).",
  "\\( det( A) =det( B)\\)."],

["Let \\( A\\in M_{n\\times n}( F)\\).  If \\( B\\in M_{n\\times n}( F)\\) results from adding a scalar multiple of one row to another then:",
  "\\( det( A) =det( B)\\).",
  "\\( det( A) =(-1)\\,det( B)\\).",
  "\\( det( A) =0\\)."],

["\\( det( AB) =\\)",
  "\\( det( A)\\,det( B)\\).",
  "\\( det( A)+det( B)\\).",
  "\\( det( A+B)\\)."],

["For \\( k\\in \\mathbb{Z}^{+}\\),  \\( det\\left( A^{k}\\right) = \\)",
  "\\( (det( A))^{k}\\).",
  "\\( k\\,det( A)\\).",
  "\\( det( A)\\)."],

["\\( det\\left( A^{T}\\right) = \\)",
  "\\( det( A)\\).",
  "\\( -det( A)\\).",
  "\\( 1/det( A)\\)."],

["\\( det\\left( A^{-1}\\right) = \\)",
  "\\( \\frac{1}{det( A)}\\).",
  "\\( det( A)\\).",
  "\\( -det( A)\\)."],

["For \\( A\\in M_{n\\times n}( F)\\),  \\( det( cA) = \\)",
  "\\( c^{n} det( A)\\).",
  "\\( c\\,det( A)\\).",
  "\\( n c\\,det( A)\\)."],

["If \\( A\\) is invertible then:",
  "\\( det( A)\\neq 0\\).",
  "\\( det( A)=0\\).",
  "\\( det( A)=1\\)."],

["If \\( A\\in M_{n\\times n}( F)\\) and \\( rank( A) < n\\) then:",
  "\\( det( A)=0\\).",
  "\\( det( A)\\neq 0\\).",
  "\\( A\\) is invertible."],

["If \\( A\\) is triangular then:",
  "\\( det( A)\\) is equal to the product of the diagonal entries of \\( A\\).",
  "\\( det( A)\\) is equal to the sum of the diagonal entries of \\( A\\).",
  "\\( det( A)=0\\)."],

["If \\( M\\in M_{n\\times n}( F)\\) where \\( M=\\begin{pmatrix} A & B\\\\O & C\\end{pmatrix}\\) where \\( A\\) and \\( C\\) are square matrices then:",
  "\\( det( M)=det( A)\\,det( C)\\).",
  "\\( det( M)=det( A)+det( C)\\).",
  "\\( det( M)=det( A)\\,det( B)\\,det( C)\\)."]

];
