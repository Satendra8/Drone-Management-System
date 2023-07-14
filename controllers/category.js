import {CategoryModel} from "../models/category.js"

export const addCategory = async (req, res, next) => {
    try {
      console.log("add categoty");
      const { name, color, tag_name } = req.body;
      console.log("user", req.user);
      const user_id = req.user._id;
      
      const category = await CategoryModel.create({
        user_id: user_id,
        name,
        color,
        tag_name,
        created_at: new Date(),
        updated_at: new Date(),
      });
    
      res.status(201).json({ category, message: 'Category added successfully' });
    } catch (error) {
      next(error);
    }
  };
  
  export const updateCategory = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, color, tag_name } = req.body;
    
      const category = await CategoryModel.findByIdAndUpdate(
        id,
        { name, color, tag_name, updated_at: new Date() },
        { new: true }
      );
    
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
    
      res.json({ category, message: 'Category updated successfully' });
    } catch (error) {
      next(error);
    }
  };
  
  export const deleteCategory = async (req, res, next) => {
    try {
      const { id } = req.params;
    
      const category = await CategoryModel.findByIdAndDelete(id);
    
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
    
      res.json({ message: 'Category deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
