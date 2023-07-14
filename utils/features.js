import jwt from "jsonwebtoken";



export const sendCookie = (res, user, message, statusCode = 200) =>{
    const token = jwt.sign({user_id: user._id}, process.env.JWT_SECRET);
    res.status(200).cookie("token", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none", // our FE and BE will be deployed on different url
        secure: process.env.NODE_ENV === "Development" ? false : true // mendatory if above option is used
    }).json({
        success: true,
        message: message
    });
}