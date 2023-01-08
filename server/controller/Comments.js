const {Comments} = require('../models')

const GetCommentsByPostIdController = async(req,res)=>{
    const postId = req.params.postId;
    const comments = await Comments.findAll({where:{PostId:postId}})
    res.json(comments)
} 

const CreateCommentsController = async(req,res)=>{
    const comment = req.body;
    console.log(comment);
    const commentData = await  Comments.create(comment)
    res.json(commentData)
}

module.exports = {GetCommentsByPostIdController,CreateCommentsController};
