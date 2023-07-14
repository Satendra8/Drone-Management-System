import express from "express";
import { addMission, updateMission, deleteMission, getMissionsBySite, getMissionsByCategory } from "../controllers/mission.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();
export default router;



router.post('/add', isAuthenticated, addMission);
router.get('/site/:site_id', isAuthenticated, getMissionsBySite);
router.get('/category/:category_id', isAuthenticated, getMissionsByCategory);
router.route('/:id')
  .put(isAuthenticated, updateMission)
  .delete(isAuthenticated, deleteMission);


