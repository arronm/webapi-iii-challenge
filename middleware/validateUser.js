const validateUser = (req, res, next) => {
  if (Object.keys(req.body).length == 0) return res.status(400).json({
      message: 'missing user data'
  });

  if (!req.body.name) return res.status(400).json({
    message: 'missing required name field'
  });
  
  next();
}

module.exports = validateUser;
