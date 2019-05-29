const express = require('express');

const db = require('./postDb');
const validatePostId = require('../middleware/validatePostId');

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
  const posts = await db.get();
  res.json(posts);
});

router.get('/:id', validatePostId, async (req, res) => {
  res.json(req.post);
});

router.delete('/:id', validatePostId, async (req, res) => {
  try {
    const records = await db.remove(req.params.id);
    
    if (!records) return res.status(404).json({
      message: 'Record could not be found for deletion',
    });

    res.json(req.post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Unknown server error trying to delete post by id',
    });
  }
});

router.put('/:id', validatePostId, async (req, res) => {
  const post = await db.update(req.params.id, {
    ...req.post,
    ...req.body,
  });
  res.json({
    ...req.post,
    ...req.body,
  });
});

module.exports = router;
