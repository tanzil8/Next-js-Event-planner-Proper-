import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: String,
  email: String,
  password: String,
  location: {
    lat: Number,
    long: Number,
  },
  profileImg: String,
  addres: String,
  bio: String,
});


export const UserModels = mongoose.model('Users', userSchema);