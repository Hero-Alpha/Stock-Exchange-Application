const { UserModel } = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// SIGNUP CONTROLLER

module.exports.Signup = async(req , res , next) => {
    try{
        const{email , username , contact , password , createdAt} = req.body;
        const existingUser = await UserModel.findOne({ email });
        if(existingUser){
            return res.json({message : "User already exists please Login"});
        }
        const user = await UserModel.create({email , username , contact , password , createdAt});
        const token = createSecretToken(user._id);
        res.cookie("token" , token , {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(201).json({message :"User signed in successfully" , success: true , user});
        next();
    }catch(error){
        console.error(error);
    }
};

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// LOGIN CONTROLLER

module.exports.Login = async(req , res , next) => {
    try{
        const { email , password } = req.body;
        if(!email || !password){
            return res.json({message: "All fields are required"});
        }
        const user = await UserModel.findOne({email});
        if(!user){
            return res.json({message: "Invalid password or email"});
        }
        
        const auth = await bcrypt.compare(password , user.password);
        if(!auth){
            return res.json({message: "Invalid password or email"});
        }
        
        const token = createSecretToken(user._id);
        res.cookie("token" , token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(201).json({message: "User logged in successfully" , success: true});
        next()
    }catch(error){
        console.error(error);
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------