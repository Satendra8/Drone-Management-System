import express from "express";
import { addSite, updateSite, deleteSite, getSite } from "../controllers/site_data.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();
export default router;



router.post('/add', isAuthenticated, addSite);
router.route('/:id').
    get(isAuthenticated, getSite).
    put(isAuthenticated, updateSite).
    delete(isAuthenticated, deleteSite)