import { connectDB } from "@/lib/db/ConnectDB";
import { UserModels } from "@/lib/models/user";
import    bcrypt  from "bcrypt";
import jwt from "jsonwebtoken"



 
 
export async function POST(request) {
await connectDB()
const obj = await request.json();
// user exist or not 
const user = await UserModels.findOne({email : obj.email})

if(!user) return Response.json({error: true, msg: "user not found"}, {status: 403})

const isPasswordValid = await bcrypt.compare(obj.Password, user.Password)

if (!isPasswordValid) {
    return Response.json({error: true, msg: "Password is not valid"}, {status: 403})
}

//    const saltRounds = 10;

//    const  PasswordHash = await bcrypt.hash(obj.Password, saltRounds)
//    obj.Password = PasswordHash;
//    let newUser = new UserModels(obj)
//       await newUser.save()
   var token = jwt.sign({ _id : user._id, rele: user.role }, process.env.JWT_KEY);


   console.log('obj', obj)

   return Response.json({masg: 'user login success full', User: user, token }, {status: 200 })

}
 

 