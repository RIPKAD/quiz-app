// Format:
// [prompt, correct, distractor1, distractor2]
// [prompt, correct, distractor1, distractor2, "diagrams/file.svg"]
var question = [

["A triangle is:",
  "a three-sided polygon (three sides and three angles)",
  "a four-sided polygon",
  "a closed curve with no vertices"],

["An obtuse triangle is:",
  "a triangle with one angle greater than \\(90^\\circ\\)",
  "a triangle with every angle greater than \\(90^\\circ\\)",
  "a triangle with one angle equal to \\(90^\\circ\\)"],

["A right triangle is:",
  "a triangle with one angle equal to \\(90^\\circ\\)",
  "a triangle with one angle greater than \\(90^\\circ\\)",
  "a triangle with two right angles",
  "diagrams/right-triangle.svg"],

["An acute triangle is:",
  "a triangle with all three angles less than \\(90^\\circ\\)",
  "a triangle with exactly one angle less than \\(90^\\circ\\)",
  "a triangle with one right angle"],

["An oblique triangle is:",
  "a triangle with no right angle",
  "a triangle with exactly one right angle",
  "a triangle with two sides perpendicular"],

["An equilateral triangle is:",
  "a triangle with all three sides equal",
  "a triangle with exactly two sides equal",
  "a triangle with no sides equal"],

["An isosceles triangle is:",
  "a triangle with at least two sides equal",
  "a triangle with no sides equal",
  "a triangle with all angles greater than \\(90^\\circ\\)"],

["A scalene triangle is:",
  "a triangle with no two sides equal",
  "a triangle with two sides equal",
  "a triangle with all sides equal"],

["Triangle angle-sum theorem:",
  "the sum of the interior angles of a triangle is \\(180^\\circ\\)",
  "the sum of the interior angles of a triangle is \\(360^\\circ\\)",
  "the sum of the interior angles of a triangle is \\(90^\\circ\\)"],

["Exterior-angle sum for a triangle:",
  "the sum of the exterior angles of a triangle, one at each vertex, is \\(360^\\circ\\)",
  "the sum of the exterior angles is \\(180^\\circ\\)",
  "the sum of the exterior angles is \\(90^\\circ\\)"],

["An interior angle of a triangle is:",
  "an angle formed by two sides of the triangle, with its interior inside the triangle",
  "an angle formed by one side and the extension of another side",
  "an angle whose interior lies outside the triangle"],

["An exterior angle of a triangle is:",
  "an angle formed by one side and the extension of an adjacent side, lying outside the triangle",
  "an angle formed by two sides at a vertex, inside the triangle",
  "an angle opposite the longest side only"],

["Exterior-angle theorem:",
  "an exterior angle equals the sum of the two remote interior angles",
  "an exterior angle equals the adjacent interior angle",
  "an exterior angle equals the difference of the remote interior angles"],

["A perpendicular bisector of a side is:",
  "a line, ray, or segment through the midpoint of a side and perpendicular to that side",
  "a segment from a vertex to the midpoint of the opposite side",
  "a segment from a vertex perpendicular to the opposite side"],

["A median of a triangle is:",
  "a segment from a vertex to the midpoint of the opposite side",
  "a segment from a vertex perpendicular to the opposite side",
  "a line through the midpoint of a side and perpendicular to that side",
  "diagrams/triangle-parts.svg"],

["An altitude of a triangle is:",
  "a segment from a vertex perpendicular to the line containing the opposite side",
  "a segment from a vertex to the midpoint of the opposite side",
  "a segment that bisects an angle of the triangle"],

["An angle bisector of a triangle is:",
  "a segment from a vertex to the opposite side that bisects the angle at that vertex",
  "a segment from a vertex to the midpoint of the opposite side",
  "a segment from a vertex perpendicular to the opposite side"],

["Angle-side relationship in a triangle:",
  "the larger side lies opposite the larger angle, and the smaller side opposite the smaller angle",
  "the smallest side always lies opposite the largest angle",
  "the largest side is adjacent to the largest angle"],

["Congruent triangles are:",
  "triangles of the same size and shape: corresponding sides and corresponding angles are congruent",
  "triangles of the same shape but not necessarily the same size",
  "triangles whose corresponding sides are proportional but whose angles differ"],

["Triangle congruence criteria:",
  "SSS, SAS, ASA, and AAS (two angles and a non-included side)",
  "SSS, SSA, AAA, and SAA",
  "SAS only, together with AAA and SSA"],

["Right-triangle congruence shortcuts:",
  "HL (hypotenuse and a leg) is a standard criterion; HA, LA, and LL overlap ASA, AAS, or SAS",
  "SSA is sufficient in every right triangle, and AAA is sufficient as well",
  "no right-triangle shortcuts exist beyond SSS"],

["Similar triangles are:",
  "triangles whose corresponding angles are congruent and whose corresponding sides are proportional",
  "triangles whose corresponding sides are congruent and whose corresponding angles are proportional",
  "triangles of the same size but not necessarily the same shape"],

["AA similarity postulate:",
  "if two angles of one triangle are congruent to two angles of another, the triangles are similar",
  "if two angles of one triangle are congruent to two angles of another, the triangles are congruent",
  "if one pair of angles is congruent, the triangles are similar"],

["Similarity criteria for triangles:",
  "AAA (equivalently AA), SSS similarity (three pairs of proportional sides), or SAS similarity (an included angle and the adjacent sides proportional)",
  "SSS congruence of sides, or SSA in every case",
  "equal perimeters together with one right angle"],

["Midsegment theorem:",
  "the segment joining the midpoints of two sides is parallel to the third side and half as long",
  "that segment is perpendicular to the third side and equal to it",
  "that segment bisects the third side"],

["If two similar triangles have corresponding-side ratio \\(x:y\\), then:",
  "corresponding lengths (sides, perimeters, altitudes, medians, angle bisectors) are in the ratio \\(x:y\\), and areas are in the ratio \\(x^{2}:y^{2}\\)",
  "perimeters, corresponding lengths, and areas are all in the ratio \\(x:y\\)",
  "perimeters, corresponding lengths, and areas are all in the ratio \\(x^{2}:y^{2}\\)"],

["The acute angles of a right triangle:",
  "are complementary (sum to \\(90^\\circ\\))",
  "sum to \\(180^\\circ\\)",
  "are always congruent"],

["The Pythagorean theorem:",
  "in a right triangle, the square of the hypotenuse equals the sum of the squares of the legs",
  "the hypotenuse equals the sum of the legs",
  "the square of a leg equals the sum of the squares of the other leg and the hypotenuse",
  "diagrams/right-triangle.svg"],

["Right-triangle midpoint (hypotenuse) theorem:",
  "the midpoint of the hypotenuse is equidistant from all three vertices",
  "the midpoint of the hypotenuse is closer to the right-angle vertex than to the others",
  "the midpoint of a leg is equidistant from all three vertices"],

["The trigonometric ratios of an acute angle in a right triangle are:",
  "\\(\\sin=\\) opposite/hypotenuse, \\(\\cos=\\) adjacent/hypotenuse, \\(\\tan=\\) opposite/adjacent (SOH-CAH-TOA)",
  "sums of the sides of the triangle",
  "defined only in obtuse triangles"],

["The area of a triangle is:",
  "\\(A=\\frac{1}{2}bh\\), half the product of a base and the corresponding height",
  "\\(A=bh\\), the product of base and height",
  "half the sum of the three sides"],

["Heron’s formula:",
  "\\(A=\\sqrt{s(s-a)(s-b)(s-c)}\\) where \\(s=\\frac{1}{2}(a+b+c)\\) and \\(a,b,c\\) are the side lengths",
  "\\(A=\\sqrt{s(a+b+c)}\\) where \\(s=\\frac{1}{2}(a+b+c)\\)",
  "\\(A=s(s-a)(s-b)(s-c)\\) where \\(s=a+b+c\\)"]

];
