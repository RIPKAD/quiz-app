// Format: [prompt, correct, distractor1, distractor2]
var question = [

["A circle is:",
  "a planar curve consisting of all points at a fixed distance from a given center",
  "a planar curve of points at varying distances from a center",
  "a solid consisting of all points at a fixed distance from a center"],

["A radius is:",
  "the segment (or its length) from the center to a point on the circle",
  "a segment joining two points on the circle and not through the center",
  "a line that meets the circle in one point"],

["A diameter is:",
  "a chord through the center; its length is twice the radius",
  "any chord that does not pass through the center",
  "a tangent segment"],

["A chord is:",
  "a segment joining two points on the circle",
  "a line that meets the circle in exactly one point",
  "a ray from the center"],

["A secant is:",
  "a line that intersects the circle in two points (and so contains a chord)",
  "a line that meets the circle in exactly one point",
  "a segment from the center to the circle"],

["Two circles are congruent provided that:",
  "they have congruent radii (equivalently, congruent diameters)",
  "they share a center but have different radii",
  "they have equal circumferences but unequal radii"],

["Two circles are concentric provided that:",
  "they lie in the same plane and share the same center",
  "they have the same radius but different centers",
  "they intersect in two points"],

["A central angle of a circle is:",
  "an angle whose vertex is the center and whose sides are radii",
  "an angle whose vertex lies on the circle and whose sides are chords",
  "an angle formed by two tangents"],

["An inscribed angle is:",
  "an angle whose vertex is on the circle and whose sides are chords",
  "an angle whose vertex is the center",
  "an angle formed by two radii"],

["Inscribed-angle right-angle theorem:",
  "an inscribed angle that intercepts a semicircle is a right angle",
  "an inscribed angle that intercepts a semicircle is acute",
  "a central angle that intercepts a semicircle is a right angle"],

["Inscribed angles intercepting the same arc:",
  "are congruent",
  "are supplementary",
  "have measures equal to the intercepted arc"],

["An arc is:",
  "a connected piece of the circle between two endpoints, including the endpoints",
  "a chord",
  "a radius"],

["A semicircle is:",
  "an arc whose length is half the circumference (intercepted by a diameter)",
  "an arc shorter than a quarter of the circle",
  "the entire circle"],

["A minor arc is:",
  "an arc shorter than a semicircle",
  "an arc longer than a semicircle",
  "an arc equal to the whole circle"],

["A major arc is:",
  "an arc longer than a semicircle",
  "an arc shorter than a semicircle",
  "a diameter"],

["The measure of a full circle is:",
  "\\(360^\\circ\\) or \\(2\\pi\\) radians",
  "\\(180^\\circ\\) or \\(\\pi\\) radians",
  "\\(90^\\circ\\)"],

["The measure of a minor arc is:",
  "the measure of its central angle",
  "twice its central angle",
  "half its inscribed angle subtracted from \\(360^\\circ\\)"],

["The measure of a major arc is:",
  "\\(360^\\circ\\) minus the measure of the corresponding minor arc",
  "equal to the minor arc",
  "always \\(180^\\circ\\)"],

["Arc length is:",
  "\\( (m^\\circ/360^\\circ)\\cdot 2\\pi r \\), where \\(m^\\circ\\) is the central angle",
  "\\( m^\\circ \\cdot r \\) with no factor of \\(\\pi\\)",
  "\\( 2\\pi r \\) regardless of the angle"],

["Congruent arcs and chords theorem:",
  "in the same circle or in congruent circles, congruent chords have congruent arcs and conversely",
  "congruent chords have unequal arcs",
  "arc congruence never implies chord congruence"],

["Equidistant chords theorem:",
  "chords equidistant from the center are congruent",
  "chords equidistant from the center are unequal",
  "distance from the center does not affect chord length"],

["Chord-tangent angle theorem:",
  "the angle formed by a chord and a tangent at the point of contact equals half the intercepted arc",
  "that angle equals the intercepted arc",
  "that angle equals the central angle of a different arc"],

["Perpendicular bisector of a chord:",
  "passes through the center of the circle",
  "is tangent to the circle",
  "never meets the center"],

["Intersecting chords theorem:",
  "if two chords intersect inside a circle, the product of the segments of one chord equals the product of the segments of the other",
  "the sums of the segments are equal",
  "the products of the whole chords are equal and the segments are ignored"],

["A secant angle is:",
  "an angle whose sides lie on two secants; the vertex may be inside or outside the circle",
  "an angle formed by two radii only",
  "a central angle"],

["Secant angle with vertex inside the circle:",
  "measures one-half the sum of the arc it intercepts and the arc intercepted by its vertical angle",
  "measures one-half the difference of the intercepted arcs",
  "equals the sum of the two intercepted arcs"],

["Secant angle with vertex outside the circle:",
  "measures one-half the difference of the intercepted arcs",
  "measures one-half the sum of the intercepted arcs",
  "equals the larger intercepted arc"],

["Two secant segments theorem:",
  "from an external point, (whole secant)\\(\\times\\)(external part) is the same for both secants",
  "the external parts alone are equal and the wholes are ignored",
  "the products of the internal parts are equal"],

["Secant-tangent segment theorem:",
  "from an external point, (whole secant)\\(\\times\\)(external part) equals the square of the tangent segment",
  "the tangent equals the external part of the secant",
  "the tangent squared equals the internal part only"],

["Tangent-radius theorem:",
  "a tangent is perpendicular to the radius (or diameter) at the point of contact",
  "a tangent is parallel to the radius at the point of contact",
  "a tangent bisects the radius"],

["Two tangents from the same external point:",
  "are congruent",
  "are perpendicular",
  "have lengths equal to the radius"],

["A common tangent is:",
  "a line tangent to two coplanar circles",
  "a chord of both circles",
  "a common secant only"],

["The circumference of a circle is:",
  "\\(C=2\\pi r\\) or \\(C=\\pi d\\)",
  "\\(C=\\pi r^{2}\\)",
  "\\(C=4\\pi r^{2}\\)"],

["The area of a circle is:",
  "\\(A=\\pi r^{2}\\) or \\(A=\\pi(d/2)^{2}\\)",
  "\\(A=2\\pi r\\)",
  "\\(A=4\\pi r^{3}/3\\)"],

["The area of a sector is:",
  "\\( (m^\\circ/360^\\circ)\\cdot\\pi r^{2} \\)",
  "\\( (m^\\circ/360^\\circ)\\cdot 2\\pi r \\)",
  "\\( \\pi r^{2} \\) regardless of the angle"]

];
