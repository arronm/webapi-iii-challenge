const express = require('express');
const db = require('./userDb');
const validateUser = require('../middleware/validateUser');
const validateUserId = require('../middleware/validateUserId');

const router = express.Router();
router.use(express.json());

router.post('/', validateUser, async (req, res) => {
  // Unique key not handled correctly here on backend
  const user = await db.insert(req.body);
  res.status(201).json(user);
});

router.post('/:id/posts', validateUserId, async (req, res) => {
  res.json({
    user: req.user,
  });
});

router.get('/', async (req, res) => {
  const users = await db.get();
  res.json(users);
});

router.get('/:id', validateUserId, async (req, res) => {
  res.json({
    user: req.user,
  });
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validatePost(req, res, next) {

};

module.exports = router;
