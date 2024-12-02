import { connectDB } from "@/lib/db/ConnectDB";
import { UserModels } from "@/lib/models/user";
import    bcrypt  from "bcrypt";
import jwt from "jsonwebtoken"


export async function GET(request) {
await connectDB()
const users = await UserModels.find()
return Response.json({masg: 'user fetch success full ', user : users, },{status: 200})
}
 
 
 
export async function POST(request) {
await connectDB()
const obj = await request.json();
// user exist or not 
const user = await UserModels.findOne({email : obj.email})

if(user) return Response.json({error: true, msg: "user already exist"}, {status: 403})

   const saltRounds = 10;
   console.log("obj.Password=>",obj.Password)
   console.log("saltRounds=>",saltRounds)
   const  PasswordHash = await bcrypt.hash(obj.Password, saltRounds)
   obj.Password = PasswordHash;
   let newUser = new UserModels(obj)
      await newUser.save()
   var token = jwt.sign({ _id : newUser._id, rele: newUser.role }, process.env.JWT_KEY);


   console.log('obj', obj)

   return Response.json({masg: 'user add success full', newUser: newUser, token }, {status: 201})

}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 
