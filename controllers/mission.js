import {MissionModel} from "../models/mission.js";
import {SiteDataModel} from "../models/site_data.js";

export const addMission = async (req, res, next) => {
    try {
      const { site_id, drone_id, name, alt, speed, waypoints, category_id } = req.body;
  
      const site = await SiteDataModel.findById(site_id);
      if (!site) {
        return res.status(404).json({ message: 'Site not found' });
      }
  
      const mission = await MissionModel.create({
        site_id: site_id,
        drone_id: drone_id,
        name,
        alt,
        speed,
        waypoints,
        category_id: category_id,
        created_at: new Date(),
        updated_at: new Date(),
      });
  
      res.status(201).json({ mission, message: 'Mission added successfully' });
    } catch (error) {
      next(error);
    }
  };
  
  export const updateMission = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { site_id, drone_id, name, alt, speed, waypoints, category_id } = req.body;
  
      const site = await SiteDataModel.findById(site_id);
      if (!site) {
        return res.status(404).json({ message: 'Site not found' });
      }
  
      const mission = await MissionModel.findOneAndUpdate(
        { _id: id },
        { drone_id: drone_id, name, alt, speed, waypoints, category_id: category_id, updated_at: new Date() },
        { new: true }
      );
  
      if (!mission) {
        return res.status(404).json({ message: 'Mission not found' });
      }
  
      res.status(200).json({ mission, message: 'Mission updated successfully' });
    } catch (error) {
      next(error);
    }
  };
  
  export const deleteMission = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const mission = await MissionModel.findOneAndDelete({ _id: id });
  
      if (!mission) {
        return res.status(404).json({ message: 'Mission not found' });
      }
  
      res.json({ message: 'Mission deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
  
  export const getMissionsBySite = async (req, res, next) => {
    try {
      const { site_id } = req.params;
  
      const missions = await MissionModel.find({ site_id: site_id });
  
      res.status(200).json({ missions });
    } catch (error) {
      next(error);
    }
  };
  

  export const getMissionsByCategory = async (req, res, next) => {
    try {
      const { category_id } = req.params;
  
      const missions = await MissionModel.find({ category_id: category_id });
  
      res.status(200).json({ missions });
    } catch (error) {
      next(error);
    }
  };

