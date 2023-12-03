const express = require("express");
const { check, body } = require("express-validator");

const feedController = require("../controllers/feed");

const router = express.Router();

// GET /feed/posts
router.get("/posts", feedController.getPosts);

// POST /feed/post
router.post(
  "/post",
  [
    body("title").isLength({ min: 5, max: 20 }).isString().trim(),
    body("content").isLength({ min: 5, max: 20 }),
  ],
  feedController.createPost
);

module.exports = router;