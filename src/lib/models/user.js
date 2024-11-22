
import mongoose from 'mongoose'
const { Schema } = mongoose;

const userSchema = new Schema({
    fullname: String,
    email: String,
    Password: String,
    location:{
        lat: Number,
        long: Number
    },
    profileImg: String,
    address: String,
    bio: String

    
  });
export const UserModels = mongoose.models.User || mongoose.model('User', userSchema)