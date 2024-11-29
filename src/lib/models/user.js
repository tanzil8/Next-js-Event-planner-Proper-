
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
    bio: String,
    role: {type : String, default : "user" , enum: [ 'admin', 'user']}

    
  });
export const UserModels = mongoose.models.User || mongoose.model('User', userSchema)