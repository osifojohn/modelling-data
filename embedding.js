const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model(
  'Course',
  new mongoose.Schema({
    name: String,
    author: {
      type: authorSchema,
      required: true,
    },
  })
);

async function createCourse(name, author) {
  const course = new Course({
    name,
    author,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}

async function updateCourses(courseId) {
  // const course = await Course.findById(courseId);
  // course.author.name = 'Osifo john'; //// in respect to the parent
  // course.save();
  // course.author.save(); //// not possible, does not exist
  /// or
  const course = await Course.updateOne(
    { _id: courseId },
    {
      // $set: {
      //   'author.name': 'John Smith',
      // },
      $unset: {
        author: '',
      },
    }
  );
}
updateCourses('640efabe5276063d67960d0e');
// createCourse('Node Course', new Author({ name: 'Mosh' }));
