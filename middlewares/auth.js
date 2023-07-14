import jwt from "jsonwebtoken"
import { User } from "../models/user.js";


export const isAuthenticated = async (req, res, next)=>{
    const {token} = req.cookies
    if(!token){
        res.status(403).json({
            success: false,
            message: 'User not Login'
        });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.user_id);
    if(!user){
        res.status(403).json({
            success: false,
            message: 'User not Login'
        });
    }
    req.user = user;
    next();
}