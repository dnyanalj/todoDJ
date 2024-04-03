const express =require ("express");
const app=expres();
app.use(express.json());
app.post("/todo",function(req,res){})
app.get("/todos",function(req,res){})
app.put("/completed",function(req,res){}) 
app.listen(3000);

