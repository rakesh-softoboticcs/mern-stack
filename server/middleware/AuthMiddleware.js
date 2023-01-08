const { verify } = require("jsonwebtoken");

const validateToken = (req,res,next)=>{
    console.log(req.header);
    const accessToken = req
    console.log(accessToken);

    if(!accessToken) res.json({error:"User is not logged in"})

    try {
        const validToken = verify(accessToken,'importantsecret');

        if(validToken) return next();
    } catch (error) {
        return res.json({error:error})
    }
}

module.exports = {validateToken}