import mongoose from "mongoose";

export async function ConnectDB() {
  try{
let connext = await mongoose.connect(process.env.MONGODB_URL)
console.log('connext',connext);

  }
  catch(err){
    console.log('err',err);
    
  }
}