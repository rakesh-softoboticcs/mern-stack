const {Posts} = require("../models");

const CreatePostsController = async(req,res)=>{
    const posts = req.body;

    await Posts.create(posts);
  
    res.json(posts);
}

const GetPostsController = async(req,res)=>{
    const listOfAllPosts = await Posts.findAll();
    res.json(listOfAllPosts)
}

const GetPostByIdController = async(req,res)=>{
    const id = req.params.id;
    const post = await Posts.findByPk(id)
    res.json(post)
}


module.exports = {CreatePostsController,GetPostsController,GetPostByIdController}


