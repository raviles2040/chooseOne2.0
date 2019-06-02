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

  const User = require('../models/user');

  router.get('/', async (req, res) => {
    const users = await User.find();
    res.json({
        message : 'Listado de usuarios',
        users: users
    });
});

router.get('/:id', async (req, res) => {
    const user = await Question.findById(req.params.id);
    res.json(user);
});

router.post('/', async (req, res) => {
    User.create(req.body.user);
    res.json({status: 'User Saved'});
});

router.put('/avatar/:id', upload.single('file'), (req, res, next) => {
    var id = req.params.id;
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
    User.updateOne( {_id: id },
        {
            $set : { avatar : file.filename }
        }, function (err, count) { 
            if (err) return next (err);
            callback(err, count);
         })

    res.send(file);
})

router.put('/:id', async (req, res) => {
    const newUser = req.body;
    await User.findByIdAndUpdate(req.params.id, newUser);
    res.json({status: 'User Updated'});
});


router.delete('/:id', async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'User Deleted'});
});

module.exports = router;