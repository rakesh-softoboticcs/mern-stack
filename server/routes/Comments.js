const express = require("express");
const router = express.Router();
const {GetCommentsByPostIdController,CreateCommentsController} = require('../controller/Comments');
const { validateToken } = require("../middleware/AuthMiddleware");


router.get("/:postId",validateToken, GetCommentsByPostIdController);
router.post('/',validateToken,CreateCommentsController)


module.exports = router;