const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestionSchema = new Schema({
    question: {type: String, required: true},
    optionOne: {type: {
        title: String,
        image: String,
        votes: Number
    }, required: true},
    optionTwo: {type: {
        title: String,
        image: String,
        votes: Number
    }, required: true},
    createdBy: {type: String, required: true}
});

module.exports = mongoose.model('Question', QuestionSchema);