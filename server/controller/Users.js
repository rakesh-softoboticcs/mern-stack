const {Users} = require("../models");
const bcrypt = require('bcrypt')
const {sign} = require('jsonwebtoken')

const CreateUserController = async(req,res)=>{
    const {username,password}= req.body;

    bcrypt.hash(password,10).then((hash)=>{
        Users.create({
            username:username,
            password:hash
        })

        res.status(201).send("Success")
    })
}

const GetUserController = async(req,res)=>{
    const {username,password} = req.body;

    const user =  await Users.findOne({where:{username:username}})

    if(!user) res.status(401).send({error:"User doesn't exist"})
    bcrypt.compare(password, user.dataValues.password).then((match)=>{
        if(!match) res.status(401).send({error:"Wrong combination of username and password"})
        const accessToken = sign({username:user.username,id:user.id},"importantsecret")
        res.status(200).send({accessToken:accessToken})
    })
}




module.exports = {CreateUserController,GetUserController}