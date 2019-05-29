const express = 'express';
const validatePost = require('../middleware/validatePost');
const validatePostId = require('../middleware/validatePostId');

const router = express.Router();

router.get('/', (req, res) => {

});

router.get('/:id', validateUserID, async (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

module.exports = router;
