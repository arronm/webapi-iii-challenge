const express = require('express');

const server = express();

server.use(express.json());

const logger = (req, res, next) => {
  // logger middleware
  next();
}

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

// DELETE /api/users/id

// PUT /api/users/:id
