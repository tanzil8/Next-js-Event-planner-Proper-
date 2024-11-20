import { ConnectDB } from "@/lib/db/ConnectDB";
import { UserModels } from "@/lib/models/user";

export async function GET(request) {
await ConnectDB()
const users = await UserModels.find()
return Response.json({masg: 'user fetch success full ', user : users, },{status: 200})
}
 
 
 
export async function POST(request) {}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 
