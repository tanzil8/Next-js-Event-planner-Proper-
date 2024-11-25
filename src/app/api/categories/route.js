
import { connectDB } from "@/lib/db/ConnectDB";
import { CategoriesModels } from "@/lib/models/categories";



export async function GET(request) {
await connectDB()
const Categories = await CategoriesModels.find()
return Response.json({masg: 'Categories fetch success full ', Categories : Categories, },{status: 200})
}
 
 
 
export async function POST(request) {
await connectDB()
const obj = await request.json();
let newCate = new CategoriesModels(obj)
   await newCate.save()
   return Response.json({masg: 'user add success full', newCate: newCate }, {status: 201})

}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 
