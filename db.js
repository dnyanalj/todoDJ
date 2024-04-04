const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://admin:MONGODJ412105@cluster0.zmde4vo.mongodb.net/todos");

const todoschema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const task=mongoose.model('todos',todoschema);

//export link
module.exports={
    task:task
}