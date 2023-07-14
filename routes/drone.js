import express from "express";
import { addDrone, updateDrone, deleteDrone, shiftDrone, getDronesByCategory, getDronesBySite} from "../controllers/drone.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();
export default router;



router.post('/add', isAuthenticated, addDrone);
router.route('/:id')
  .put(isAuthenticated, updateDrone)
  .delete(isAuthenticated, deleteDrone);
router.get('/site/:site_id', isAuthenticated, getDronesBySite);
router.post('/shift/:id', isAuthenticated, shiftDrone);
router.get('/category/:category_id', isAuthenticated, getDronesByCategory);

