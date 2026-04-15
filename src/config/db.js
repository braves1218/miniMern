import mongoose from "mongoose";

export async function connectDB(uri){
    try{
        await mongoose.connect(uri)
        console.log("conectado a mongoDB")
    }catch(err){
        console.error("Error en la conexion a Mongo: ",err.message)
        process.exit(1)
    }
}