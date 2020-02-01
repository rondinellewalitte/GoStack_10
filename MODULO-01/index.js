const express = require('express');


const server= express();

//TIPOS DE PARAMETROS

//QUERY PARAMS = ?teste=1
//ROUTE PARAMS = /users/1
//REQUEST BODY = {"name":"diego", "email":"rondinellewalitte@gmail.com"}

const users=['Rondinelle','Diego','Joao'];


server.get('/users/:index',(req,res)=>{
    const {index} = req.params;
    return res.json(users[index]);
});

server.listen(3000);