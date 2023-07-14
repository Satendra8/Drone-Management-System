import { User } from "../models/user.js"
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";


export const registerUser = async (req, res, next) =>{
    try{
        console.log("inside create user", req.body);
        const {name, email, password} = req.body
        
        let user = await User.findOne({email: email})
        if(user){
            return next(new ErrorHandler("User with this email already exists!", 400));
        }
        const hashPassword = await bcrypt.hash(password, 10);
        user = await User.create({
            name: name,
            email: email,
            password: hashPassword,
        });

        sendCookie(res, user, "User Registered Successfully!", 201);
    }
    catch(error){
        next(error);
    }
}

export const loginUser = async (req, res, next) => {
    try{
        const {email, password} = req.body
        // used +password to get password also
        const user = await User.findOne({email: email}).select("+password");

        if(!user){
            return next(new ErrorHandler("User Doesn't Exist!", 400));
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return next(new ErrorHandler("Invalid Email or Password!", 400));
        }
        sendCookie(res, user, `Welcome back ${user.name}`, 200);
    }
    catch(error){
        next(error);
    }
}

export const getMyProfile = (req, res, next) => {
    console.log("req", req.user);
    res.status(200).json({
        success: true,
        user: req.user,
    });
}
