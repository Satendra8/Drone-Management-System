import express from "express";
import UserRouter from "./routes/user.js";
import SiteRouter from "./routes/site_data.js";
import MissionRouter from "./routes/mission.js";
import DroneRouter from "./routes/drone.js";
import CategoryRouter from "./routes/category.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import { errMiddleware } from "./middlewares/error.js";
import cors from "cors"


export const app = express();

config({
    path: './data/config.env'
});

/** Using Middleware */
app.use(express.json()); //parse and extract json data, making it accessible in the req.body
app.use(cookieParser()); //parse the `Cookie` header from the request and populates in `req.cookies`
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    credentials: true // send cookie and headers to FE
}));



// Using Routes use this after all middlewares
app.use('/api/v1/user', UserRouter);
app.use('/api/v1/site', SiteRouter);
app.use('/api/v1/drone', DroneRouter);
app.use('/api/v1/mission', MissionRouter);
app.use('/api/v1/category', CategoryRouter);


app.get("", (req, res)=>{
    res.send("Home");
});

// error Handler Middleware
app.use(errMiddleware);