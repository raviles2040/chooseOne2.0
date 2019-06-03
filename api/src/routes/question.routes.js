const express = require('express');
const router = express.Router();
const { extname } = require('path');
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, global.appRoot + '/uploads')
    },
    filename: (req, file, cb) => {
        // Generating a 32 random chars long string
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        //Calling the callback passing the random name generated with the original extension name
        cb(null, `${randomName}${extname(file.originalname)}`)
      }
  }) 

var upload = multer({storage: storage});

const Question = require('../models/question')

router.get('/', async (req, res) => {
    const preguntas = await Question.find();
    res.json(preguntas);
});

router.get('/:id', async (req, res) => {
    const pregunta = await Question.findById(req.params.id);
    res.json(pregunta);
});

router.post('/', async (req, res) => {
    const { question, optionOne, optionTwo, createdBy } = req.body;
    optionOne.image = 'default-img.png';
    optionTwo.image = 'default-img.png';
    const pregunta = new Question({ question, optionOne, optionTwo, createdBy });
    await pregunta.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(pregunta);
    });
    // res.json({status: 'Question Saved'});
});

router.put('/img', upload.single('file'), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file);
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