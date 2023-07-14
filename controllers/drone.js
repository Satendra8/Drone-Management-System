import {DroneModel} from "../models/drone.js"
import {SiteDataModel} from "../models/site_data.js"
import {MissionModel} from "../models/mission.js"


export const addDrone = async (req, res, next) => {
    try {
      console.log("add Drone", req.body);
      const { site_id, drone_id, drone_type, make_name, name } = req.body;

      const site = await SiteDataModel.findById(site_id);
      if (!site) {
        return res.status(404).json({ message: 'Site not found' });
      }
  
      const drone = await DroneModel.create({
        drone_id,
        created_at: new Date(),
        deleted_by: null,
        deleted_on: null,
        drone_type,
        make_name,
        name,
        updated_at: new Date(),
        site_id: site_id,
      });
  
      res.status(201).json({ drone, message: 'Drone added successfully' });
    } catch (error) {
      next(error);
    }
  };
  

  export const updateDrone = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { drone_id: updatedDroneId, ...updateFields } = req.body;
  
      // Set updated_at to current time
      updateFields.updated_at = new Date();
  
      const drone = await DroneModel.findOneAndUpdate(
        { _id: id },
        { drone_id: updatedDroneId, ...updateFields },
        { new: true }
      );
  
      if (!drone) {
        return res.status(404).json({ message: 'Drone not found' });
      }
  
      res.status(200).json({ drone, message: 'Drone updated successfully' });
    } catch (error) {
      next(error);
    }
  };
  

  export const deleteDrone = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const drone = await DroneModel.findOneAndUpdate(
        { _id: id },
        { deleted_by: req.user.name, deleted_on: new Date(), is_deleted: true },
        { new: true }
      );
  
      if (!drone) {
        return res.status(404).json({ message: 'Drone not found' });
      }
  
      res.status(200).json({ message: 'Drone deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
  
  
  export const getDronesBySite = async (req, res, next) => {
    try {
      const { site_id } = req.params;
  
      const drones = await DroneModel.find({ site_id: site_id });
  
      res.json({ drones });
    } catch (error) {
      next(error);
    }
  };
  

  export const shiftDrone = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { from_site_id, to_site_id } = req.body;
  
      const fromSite = await SiteDataModel.findById(from_site_id);
      const toSite = await SiteDataModel.findById(to_site_id);
  
      if (!fromSite || !toSite) {
        return res.status(404).json({ message: 'Site not found' });
      }
  
      const drone = await DroneModel.findOneAndUpdate(
        { _id: id, site_id: fromSite._id },
        { site_id: toSite._id },
        { new: true }
      );
  
      if (!drone) {
        return res.status(404).json({ message: 'Drone not found' });
      }
  
      res.json({ drone, message: 'Drone shifted successfully' });
    } catch (error) {
      next(error);
    }
  };
  
  export const getDronesByCategory = async (req, res, next) => {
    try {
      const { category_id } = req.params;
  
      const missions = await MissionModel.find({ category_id: category_id });
      console.log("missions", missions);
      // get drone ids of missiom
      const droneIds = missions.map((mission) => mission.drone_id);

      const drones = await DroneModel.find({ _id: { $in: droneIds } });
  
      res.status(200).json({ drones });
    } catch (error) {
      next(error);
    }
  };
  