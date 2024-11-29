import mongoose from "mongoose";
const { Schema } = mongoose;

const categoriesSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  thumbnail: {type: String},
  
});






export const CategoriesModels = mongoose.models.Categories || mongoose.model('Categories', categoriesSchema); 