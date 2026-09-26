// Format:
// [prompt, correct, distractor1, distractor2]
// [prompt, correct, distractor1, distractor2, "diagrams/file.svg"]
var question = [

["A point is:",
  "a precise location in space with no length, width, or thickness",
  "a location that has length but no width or thickness",
  "the shortest path joining two locations"],

["A line is:",
  "a straight path that extends forever in both directions, with no thickness and no endpoints",
  "a straight path with two endpoints and finite length",
  "a straight path that starts at a point and extends forever in one direction"],

["A plane is:",
  "a flat surface with length and width but no thickness, extending without bound",
  "a surface with length, width, and thickness",
  "the set of all points at a fixed distance from a given point"],

["Two-point postulate:",
  "through any two distinct points there is exactly one line",
  "through any two distinct points there are infinitely many lines",
  "through any two distinct points there is exactly one plane"],

["Shortest-distance postulate:",
  "the shortest path between two points is the line segment joining them",
  "the shortest path between two points is a circular arc",
  "the shortest path between two points follows two sides of a triangle"],

["The distance between two points on a number line is:",
  "the absolute value of the difference of their coordinates",
  "the sum of their coordinates",
  "the product of their coordinates"],

["A line segment is:",
  "the portion of a line lying between two points (the endpoints)",
  "a line that extends forever in both directions",
  "a path that starts at a point and extends forever in one direction"],

["Segment addition postulate:",
  "if \\(B\\) lies on segment \\(AC\\), then \\(AB+BC=AC\\)",
  "if \\(B\\) lies on segment \\(AC\\), then \\(AB+AC=BC\\)",
  "if \\(B\\) does not lie on segment \\(AC\\), then \\(AB+BC=AC\\)"],

["Midpoint theorem:",
  "the midpoint of a segment divides it into two congruent segments, each half as long as the original",
  "the midpoint divides the segment into two pieces whose lengths sum to half the original",
  "any point between the endpoints is a midpoint",
  "diagrams/midpoint.svg"],

["Parallel lines are:",
  "coplanar lines that do not intersect",
  "coplanar lines that meet in exactly one point",
  "non-coplanar lines that never meet (skew lines)"],

["Parallel postulate:",
  "through a point not on line \\(L\\) there is exactly one line parallel to \\(L\\)",
  "through a point not on line \\(L\\) there are infinitely many lines parallel to \\(L\\)",
  "through a point not on line \\(L\\) there is no line parallel to \\(L\\)"],

["Congruent means:",
  "having equal measure (same length or same angle measure)",
  "having measures that sum to \\(180^\\circ\\)",
  "having the same shape but not necessarily the same size"],

["Two angles are supplementary when:",
  "their measures sum to \\(180^\\circ\\)",
  "their measures sum to \\(90^\\circ\\)",
  "their measures are equal"],

["Two angles are complementary when:",
  "their measures sum to \\(90^\\circ\\)",
  "their measures sum to \\(180^\\circ\\)",
  "their measures are equal"],

["A transversal is:",
  "a line that intersects two (or more) lines at distinct points",
  "a line parallel to two given lines",
  "a ray that bisects an angle"],

["Interior angles (transversal):",
  "the angles that lie between the two lines cut by the transversal",
  "the angles that lie outside the two lines cut by the transversal",
  "angles that share a vertex but no side"],

["Exterior angles (transversal):",
  "the angles that lie outside the two lines cut by the transversal",
  "the angles that lie between the two lines cut by the transversal",
  "angles whose measures sum to \\(90^\\circ\\)"],

["Corresponding angles are:",
  "angles in the same relative position at each intersection of a transversal with two lines",
  "angles on opposite sides of the transversal and between the two lines",
  "angles on the same side of the transversal and between the two lines",
  "diagrams/parallel-transversal.svg"],

["Alternate interior angles are:",
  "interior angles on opposite sides of the transversal",
  "interior angles on the same side of the transversal",
  "angles in the same relative position at each intersection"],

["Consecutive (same-side) interior angles are:",
  "interior angles on the same side of the transversal",
  "interior angles on opposite sides of the transversal",
  "angles that share a vertex but no side"],

["If two parallel lines are cut by a transversal then:",
  "corresponding angles are congruent, alternate interior angles are congruent, and consecutive interior angles are supplementary",
  "corresponding angles are supplementary and consecutive interior angles are congruent",
  "all eight angles are congruent and none are supplementary"],

["A ray is:",
  "the set of points consisting of an endpoint and all points of a line on one side of that endpoint",
  "a straight path that extends forever in both directions",
  "the portion of a line between two endpoints"],

["An angle is:",
  "the figure formed by two rays that share an endpoint (the vertex)",
  "the figure formed by two lines that do not meet",
  "the portion of a line between two points",
  "diagrams/angle.svg"],

["Vertical angles are:",
  "the opposite angles formed when two lines intersect; they share a vertex but no side",
  "adjacent angles that share a side and form a straight line",
  "angles whose measures sum to \\(90^\\circ\\)",
  "diagrams/vertical-angles.svg"],

["A linear pair is:",
  "two adjacent angles whose noncommon sides form a line; the angles are supplementary",
  "two angles that share a vertex but no side",
  "two angles whose measures sum to \\(90^\\circ\\)",
  "diagrams/linear-pair.svg"],

["Vertical angle theorem:",
  "vertical angles are congruent",
  "vertical angles are supplementary",
  "vertical angles are complementary"],

["The measure of an angle is:",
  "the amount of rotation from one ray to the other about the vertex, in degrees or radians",
  "the length of the two rays",
  "the area enclosed by the two rays"],

["Perpendicular lines are:",
  "intersecting lines that form a right angle",
  "lines that never intersect",
  "coplanar lines that share no points"],

["An acute angle is:",
  "an angle whose measure is less than \\(90^\\circ\\)",
  "an angle whose measure is \\(90^\\circ\\)",
  "an angle whose measure is greater than \\(90^\\circ\\) and less than \\(180^\\circ\\)"],

["A right angle is:",
  "an angle whose measure is \\(90^\\circ\\)",
  "an angle whose measure is less than \\(90^\\circ\\)",
  "an angle whose measure is \\(180^\\circ\\)"],

["An obtuse angle is:",
  "an angle whose measure is greater than \\(90^\\circ\\) and less than \\(180^\\circ\\)",
  "an angle whose measure is less than \\(90^\\circ\\)",
  "an angle whose measure is \\(90^\\circ\\)"],

["Supplementary angle theorem:",
  "if two angles are supplementary to the same angle, then they are congruent",
  "if two angles are supplementary to the same angle, then they are complementary",
  "if two angles are supplementary, then each measures \\(90^\\circ\\)"],

["Complementary angle theorem:",
  "if two angles are complementary to the same angle, then they are congruent",
  "if two angles are complementary to the same angle, then they are supplementary",
  "if two angles are complementary, then each measures \\(180^\\circ\\)"],

["Angle addition postulate:",
  "if \\(B\\) is in the interior of \\(\\angle AVC\\), then \\(m\\angle AVB+m\\angle BVC=m\\angle AVC\\)",
  "if \\(B\\) is in the interior of \\(\\angle AVC\\), then \\(m\\angle AVB=m\\angle AVC\\)",
  "if \\(B\\) is not in the interior of \\(\\angle AVC\\), then \\(m\\angle AVB+m\\angle BVC=m\\angle AVC\\)"],

["An angle bisector is:",
  "a ray that divides an angle into two congruent angles",
  "a ray that divides an angle into two supplementary angles",
  "a line through the vertex perpendicular to one side"],

["Angle bisector theorem (definition form):",
  "if a ray bisects an angle, the two resulting angles are congruent and each is half the original",
  "if a ray bisects an angle, the two resulting angles are supplementary",
  "if a ray bisects an angle, each new angle equals the original angle"]

];
