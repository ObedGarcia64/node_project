const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
});

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    last_name: {type: String, required: true},
});

const studentSchema = mongoose.Schema({
    student_name: {type: String, required: true},
    student_last_name: {type: String, required: true},
});

module.exports = mongoose.model('Post', postSchema);
module.exports = mongoose.model('student', studentSchema);