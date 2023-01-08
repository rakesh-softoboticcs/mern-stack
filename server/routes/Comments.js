const express = require("express");
const router = express.Router();
const {GetCommentsByPostIdController,CreateCommentsController} = require('../controller/Comments')


router.get("/:postId", GetCommentsByPostIdController);
router.post('/',CreateCommentsController)


module.exports = router;