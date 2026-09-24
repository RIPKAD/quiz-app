/* Master topic list.
   Each topic points at one file in /topics. That file lists the quiz banks.
   Add a new subject here, then add banks inside its topic file. */
const CATALOG = [
  { id: "geometry", title: "Geometry", file: "topics/geometry.js" },
  { id: "linalg", title: "Linear Algebra", file: "topics/linear-algebra.js" },
  { id: "topology", title: "Topology of Metric Spaces", file: "topics/topology.js" },
  { id: "measure", title: "Measure Theory", file: "topics/measure-theory.js" }
];
