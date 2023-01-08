const {Comments} = require('../models')

const GetCommentsByPostIdController = async(req,res)=>{
    const postId = req.params.postId;
    const comments = await Comments.findAll({where:{PostId:postId}})
    res.json(comments)
} 

const CreateCommentsController = async(req,res)=>{
    const comment = req.body;
    console.log(comment);
    await  Comments.create(comment)
    res.json(comment)
}

module.exports = {GetCommentsByPostIdController,CreateCommentsController};
