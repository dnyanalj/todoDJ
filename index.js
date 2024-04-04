const express =require ("express");
const {createTodo}=require("./types");//zod import from types.js file
const {task}=require("./db")

const app=express();
app.use(express.json());
//
app.post("/todo",async function(req,res)
{
    const input=req.body;
    console.log(input)
    const check=createTodo.safeParse(input);

    if(!check)
    {
        res.status(411).json({
            msg:"wrong inputs"
        })
        return;
    }
    //put it in mongodb
    await  task.create({
        title:input.title,
        description:input.description,
        completed:false
    })
    res.json({
        msg:"todo created"
    })
})
//
app.get("/todos",async function(req,res){
    const todos=await todomongo.find({});//
    res.json(
        {
            todos
        })
})
//
app.put("/completed",async function(req,res)
{
    const input=req.body;
    const check=createTodo.safeParse(input);

    if(!check)
    {
        res.status(411).json({
            msg:"wrong inputs"
        })
        return;
    }

    await createTodo.update(
        {_id:req.body.id},              //what to update
        {completed:true}                //updates
        )               

    res.json({msg:"completed"})
}) 

app.listen(3100,()=>
{
    console.log("server running");
});

