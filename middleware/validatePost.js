const validatePost = (req, res, next) => {
  if (Object.keys(req.body).length == 0) return res.status(400).json({
    message: 'missing post data'
  });

  if (!req.body.text) return res.status(400).json({
    message: 'missing required text field'
  });

  next();
}

module.exports = validatePost;
