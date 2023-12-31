import mongoose, { mongo } from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        // unique:true,
        required:true,
    },
    description:{
        type:String,
        // unique:true,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"User",
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})

export const Task = mongoose.model("Task",taskSchema);