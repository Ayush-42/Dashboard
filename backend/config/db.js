import mongoose from "mongoose";

const Connection= async() =>  {
    const URL = `mongodb+srv://ayush123:ayush123@cluster0.c6zmipa.mongodb.net/`;

    try{
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log('Database Connected Successfully!!');
    }catch(err){
        console.log(err,'Database connection Failed!!');
    }
}

export default Connection;