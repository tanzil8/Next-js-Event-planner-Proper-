import { connectDB } from "@/lib/db/ConnectDB";
import { UserModels } from "@/lib/models/user";

export async function GET(request) {
await connectDB()
const users = await UserModels.find()
return Response.json({masg: 'user fetch success full ', user : users, },{status: 200})
}
 
 
 
export async function POST(request) {
await connectDB()
const obj = await request.json();
let newUser = new UserModels(obj)
   await newUser.save()
   return Response.json({masg: 'user add success full', newUser: newUser }, {status: 201})

}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 
