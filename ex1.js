/// Using References (Normalization) -> Consistency

// let author = {
//   name: 'John',
// };
// let course = {
//   author: 'id',
// };

/// Using Embedded Documents (Denormalization) -> Performance
// let course = {
//   author: {
//     name: 'John',
//   },
// };

/// Hybrid  -> Particularly useful when we want to have a snapshot of our data at a qiven point in time

let author = {
  name: 'John',
  /// 50 other properties
};
let course = {
  author: {
    id: 'ref',
    name: 'John',
  },
};

/// Each approach has it's own strength and weakness, each approach depends on the application and it's querying requirements
/// There is a trade off between query performance and consistency
