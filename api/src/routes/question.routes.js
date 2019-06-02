const express = require('express');
const router = express.Router();
const Question = require('../models/question');

router.get('/', async (req, res) => {
    const preguntas = await Question.find();
    res.json(preguntas);
});

router.get('/:id', async (req, res) => {
    const pregunta = await Question.findById(req.params.id);
    res.json(pregunta);
});

router.post('/', async (req, res) => {
    const { question, optionOne, optionTwo } = req.body;
    const pregunta = new Question({ question, optionOne, optionTwo });
    await pregunta.save();
    res.json({status: 'Question Saved'});
});

router.put('/:id', async (req, res) => {
    const { question, optionOne, optionTwo } = req.body;
    const newQuestion = { question, optionOne, optionTwo };
    await Question.findByIdAndUpdate(req.params.id, newQuestion);
    res.json({status: 'Question Updated'});
});

router.delete('/:id', async (req, res) => {
    await Question.findByIdAndRemove(req.params.id);
    res.json({status: 'Question Deleted'});
});

module.exports = router;