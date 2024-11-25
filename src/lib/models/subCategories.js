
import mongoose from "mongoose";
const { Schema } = mongoose;

const subCategoriesSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  thumbnail: {type: String, required: true},
  categories : {type: mongoose.Types.ObjectId, ref: 'Categories', required: true}
  
});


export const SubCategoriesModels = mongoose.model('subCategories', subCategoriesSchema); 