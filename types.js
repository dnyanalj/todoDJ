const zod=require("zod");
// make schema
const createTodo=zod.object({
    title:zod.string(),
    description:zod.string()
})
const updateTodo=zod.object({
    id:zod.string()
})

//export link
module.exports={
    createTodo:createTodo,
    updateTodo:updateTodo
}
