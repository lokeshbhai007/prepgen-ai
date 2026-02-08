import mongoose from "mongoose";

export const connectDB = async ()=>{

    try{

        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB sucessfully connected")
        

    }catch (error){
        console.log("DB error")
        process.exit()
    }

}