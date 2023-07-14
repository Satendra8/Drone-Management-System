import {SiteDataModel} from "../models/site_data.js"


export const addSite = async (req, res, next) =>{
    try{
        console.log("inside create site--------", req.body);
        const {site_name, position} = req.body;
        console.log("user", req.user)
        const user_id = req.user._id;
        const site = await SiteDataModel.create({
            user_id: user_id,
            site_name: site_name,
            position: position,
        });

        res.status(201).json({
            success: true,
            results: site
        });
    }
    catch(error){
        next(error);
    }
}

export const updateSite = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { site_name, position } = req.body;
      const user_id = req.user._id;
  
      const site = await SiteDataModel.findOneAndUpdate(
        { _id: id },
        { site_name: site_name, position: position },
        { new: true }
      );
  
      if (!site) {
        return res.status(404).json({ message: 'Site not found' });
      }
  
      res.status(200).json({ site, message: 'Site data updated successfully' });
    } catch (error) {
      next(error);
    }
  };

export const getSite = async (req, res, next) => {
    try {
      console.log("inside get", req.params)
      const { id } = req.params;
      const user_id = req.user._id;
  
      const site = await SiteDataModel.findOne({ _id: id });
  
      if (!site) {
        return res.status(404).json({ message: 'Site not found' });
      }
  
      res.status(200).json({ site });
    } catch (error) {
      next(error);
    }
  };

export const deleteSite = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user_id = req.user._id;
  
      const site = await SiteDataModel.findOneAndDelete({ _id: id });
  
      if (!site) {
        return res.status(404).json({ message: 'Site not found' });
      }
  
      res.status(200).json({ message: 'Site deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
