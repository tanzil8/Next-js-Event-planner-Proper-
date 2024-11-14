import mongoose from "mongoose";

const ConnectDB = () => {
  try{
let connect ;
connect = mongoose.connect(process.env.MONGODB_URL)
console.info('connect',connect);

  }catch(err){
console.log(err);
  }
}

export default ConnectDB