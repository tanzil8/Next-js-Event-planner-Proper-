
import mongoose from "mongoose";
const { Schema } = mongoose;

const subCategoriesSchema = new Schema({
  title: String,
  description: String,
  thumbnail: String,
  categories : {type: mongoose.Types.ObjectId, ref: 'Categories'}
  
});


export const SubCategoriesModels = mongoose.model('subCategories', subCategoriesSchema);