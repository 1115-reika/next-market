import { NextResponse } from "next/server";
import connectDB from "../../../utils/database.js";
import { ItemModel } from "../../../utils/schemaModels.js";

export async function POST(request) {
  //追加↓
  const reqBody=await request.json()
  //console.log(reqBody)
  try{
    //console.log(await request.json()) 
    await connectDB()
    await ItemModel.create(reqBody)
    
  return NextResponse.json({ message: "アイテム作成成功～！" })
  }catch{
    
    return NextResponse.json({message: "アイテム作成失敗＞＜"})
  }
}






