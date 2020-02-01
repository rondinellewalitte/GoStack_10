const express = require("express"); // IMPORTANDO A PACOTE CHAMADO EXPRESS

const server = express(); //INICIANDO UM SERVIDOR

server.use(express.json()); //FAZER EXPRESS, OUVIR JSON NO BODY.

const array = [];




server.use((req,res,next)=>{

    console.count("Numero de requisicoes");

    next();
})

function checkIdExists(req,res,next){
    if(array.indexOf(req.params.id)){
        return res.status(400).json({error:"Nao existe esse ID"});
    }
    return next();
}


server.post('/projects',(req,res)=>{
    array.push(req.body);
    return res.json({message:"Cadastrado com sucesso!!"});
})

server.get('/projects',(req,res)=>{
    return res.json(array);
})

server.put('/projects/:id',checkIdExists,(req,res)=>{
    const {id}=req.params;
    array[id].title = req.body.title;
    return res.json(array[id]);
})

server.delete('/projects/:id',checkIdExists,(req,res)=>{
    const {id}=req.params;
    array.splice(id,1);
    return res.json({message:"Deletado com sucesso"});
})

server.post('/projects/:id/tasks',(req,res)=>{
    const {id}=req.params;
    const {Task} = req.body;
    array[id].Task.push(Task);
    return res.json(array[id]);
})




server.listen(3000); //SERVIDOR OUVINDO NA PORTA 3000