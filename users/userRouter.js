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
  try {
    const posts = await db.getUserPosts(req.user.id);
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Unknown server error creating new posts for user by id',
    });
  }
});

router.get('/', async (req, res) => {
  const users = await db.get();
  res.json(users);
});

router.get('/:id', validateUserId, async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Unknown server error getting user by id',
    });
  }
});

router.get('/:id/posts', validateUserId, async (req, res) => {
  try {
    const posts = await db.getUserPosts(req.user.id);
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Unknown server error getting user posts by user id',
    });
  }
});

router.delete('/:id', validateUserId, async (req, res) => {
  try {
    await db.remove(req.user.id);
    res.json(req.user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Unknown server error removing user by id.',
    });
  }
});

router.put('/:id', validateUserId, async (req, res) => {
  await db.update(req.user.id, req.body);
  res.json({
    ...req.user,
    ...req.body,
  });
});

//custom middleware

function validatePost(req, res, next) {

};

module.exports = router;
