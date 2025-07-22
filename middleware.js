import { NextResponse } from "next/server";
import{jwtVerify}from "jose"

export async function middleware(request){
    console.log("ミドルウェア")
    const token="eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTc1MzE4NTMwNH0.L1IxaK16UGdVN_SBoAP-WA6KucvHH7IKv-BLR7rDDk8"
    
    //await request.headers.get("Authorizarion")?.split(" ")[1]
    if(!token){
return NextResponse.json({message:"トークンがありません"})
    }
    try{
        const secretKey=new TextEncoder().encode("next-market-app-book")
        const decodedJwt=await jwtVerify(token,secretKey)
        console.log("decodedJwt:",decodedJwt)
        return NextResponse.next()

    }catch{
        return NextResponse.json({message:"トークンが正しくないので、ログインしてください"})
    }
    
}

export const config={
    matcher:["/api/item/create","/api/item/update/:path*","/api/item/delete/:path*"],
}