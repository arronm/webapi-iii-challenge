const express = require('express');
const helmet = require('helmet');
const logger = require('./middleware/logger');

const PORT = 4444;
const server = express();

// Express Middleware
server.use(helmet);
server.use(express.json());
server.use(logger);

server.listen(PORT, () => {
  console.log(`Server listening on localhost:${PORT}`);
});

server.get('/hello', (req, res) => {
  res.send('hello world');
});

server.get('/world', (req, res) => {
  res.send('world hello');
});

const validateUserId = (req, res, next) => {
  // validate userid middleware
  next();
}

const validateUser = (req, res, next) => {
  // validate user middleware
  next();
}

const validatePost = (req, res, next) => {
  // validate post middleware
  next();
}


// GET /api/users

// POST /api/users
// validateUser

// DELETE /api/users/:id
// validateUserId

// PUT /api/users/:id
// validateUserId
