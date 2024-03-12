const User = require("../models/user.models");

exports.createUser = async(req,res) => {
    try{
        const token = jwt.sign({password: req.body.password}, process.env.SECRET_KEY)
        const createdUser = await User.create({...req.body, token: token})
        res.status(201).json(createdUser)
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }

}