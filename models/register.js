import mongoose from "mongoose";
import { Schema } from "mongoose";


const newuser = new Schema({

    name: String,
    email: String,
    password: String,
   
});

export default mongoose.model("Users", newuser);