const express = require("express");
const router = express.Router();
const {CreatePostsController,GetPostsController,GetPostByIdController} = require('../controller/Posts')


router.get("/", GetPostsController);

router.post("/", CreatePostsController)

router.get('/byId/:id',GetPostByIdController)

module.exports = router;
