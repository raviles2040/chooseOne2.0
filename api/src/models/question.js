const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestionSchema = new Schema({
    question: {type: String, required: true},
    optionOne: {type: {
        title: String,
        image: String,
        votes: {type: Number , default:0}
    }, required: true},
    optionTwo: {type: {
        title: String,
        image: String,
        votes: {type: Number , default:0}
    }, required: true},
    createdBy: {type: String, required: true}
});

module.exports = mongoose.model('Question', QuestionSchema);