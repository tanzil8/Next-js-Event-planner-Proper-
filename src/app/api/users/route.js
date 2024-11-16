
import { ConnectDB } from "@/lib/db/ConnectDB";
import { UserModels } from "@/lib/models/user";


export async function GET(request) {

    await ConnectDB()
    console.log('mongoDB connect');
    const users = await UserModels.find()
    return Response.json(users, {status: 200})
}
 

console.log('conneted');
export async function POST(request) {
    await ConnectDB();
    
    
    const obj = await request.json();
    let newUser = new UserModels(obj)
    await newUser.save()
    return Response.json(newUser, {status: 201})
}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 

 
        