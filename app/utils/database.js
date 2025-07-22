import mongoose from "mongoose"

const connectDB=()=>{
    //追加
    try{
        mongoose.connect(
            "mongodb+srv://e2moe60:TG8CoXLr4BSLk9uH@cluster0.1e3p46o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("Success:Connected to MongoDB");
    }catch{
        console.log("Failure:Unconnected to MongoDB")
        throw new Error()
    }
    //追加↑
}
export default connectDB