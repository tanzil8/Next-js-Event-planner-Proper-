
import { connectDB } from "@/lib/db/ConnectDB";
import { SubCategoriesModels } from "@/lib/models/subCategories";
import { CategoriesModels } from "@/lib/models/categories";




export async function GET(request) {
await connectDB()
const reqUrl = request.url;
const {searchParams} = new URL(reqUrl)

const query = {};
if (searchParams.get("categories")) {
   query.categories = searchParams.get("categories")
   
}
console.log("query",query);


const SubCategories = await SubCategoriesModels.find(query).populate('categories', 'title')
return Response.json({masg: 'SubCategories fetch success full ', SubCategorie : SubCategories, },{status: 200})


}
 
 
 
export async function POST(request) {
await connectDB()
const obj = await request.json();
let newSubCate = new SubCategoriesModels(obj)
   await newSubCate.save()
   return Response.json({masg: 'SubCategories add success full', newSubCate: newSubCate }, {status: 201})

}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 
