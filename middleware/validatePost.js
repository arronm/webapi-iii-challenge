const userDB = require('../users/userDb');

const validatePost = async (req, res, next) => {
  if (Object.keys(req.body).length == 0) return res.status(400).json({
    message: 'missing post data'
  });

  if (!req.body.text) return res.status(400).json({
    message: 'missing required text field'
  });

  const user = await userDB.getById(req.params.id);

  if (!user) return res.status(400).json({
    message: 'invalid user id',
  });

  req.user = user;

  next();
}

module.exports = validatePost;
