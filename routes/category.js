import express from "express";
import { addCategory, updateCategory, deleteCategory } from "../controllers/category.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();
export default router;



router.post('/add', isAuthenticated, addCategory);
router.route('/:id').
    put(isAuthenticated, updateCategory).
    delete(isAuthenticated, deleteCategory);
