const mongoose = require('mongoose')

const studentSchema = mongoose.Schema(
    {
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: false,
    }
})
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;