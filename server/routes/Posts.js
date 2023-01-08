const express = require("express");
const router = express.Router();
const {CreatePostsController,GetPostsController,GetPostByIdController} = require('../controller/Posts');
const { validateToken } = require("../middleware/AuthMiddleware");


router.get("/",validateToken, GetPostsController);

router.post("/",validateToken, CreatePostsController)

router.get('/byId/:id',validateToken,GetPostByIdController)

module.exports = router;
