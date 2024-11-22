import mongoose from "mongoose";

export async function connectDB() {
  try{
let connext = await mongoose.connect(process.env.MONGODB_URL)
console.log("mongodb connected  ");

  }
  catch(err){
    console.log('err',err);
    
  }
}