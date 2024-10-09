const express = require("express")
const mysql= require("mysql2")
var bodyParser=require('body-parser')
var app=express()
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'*****',
    database:'5IV8'
})
con.connect();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(express.static('public'))

app.post('/agregarUsuario',(req,res)=>{
        let nombre=req.body.nombre
        let id=req.body.id

        con.query('INSERT INTO usuario (id_usuario, nombre) VALUES (?, ?)', [id, nombre], (err, respuesta, fields) => {
            if (err) {
                console.log("Error al conectar", err);
                return res.status(500).send("Error al conectar");
            }
           
            return res.send(`<h1>Nombre:</h1> ${nombre}`);
        });
   
})

app.get('/obtenerUsuario',(req,res)=>{
    con.query('select * from usuario', (err, respuesta, fields)=>{
        if(err)return console.log('ERROR: ', err);
        var userHTML=``;
        var i = 0;
        respuesta.forEach(user => {
            i++;
            userHTML += `<tr><td>${i}</td><td>${user.nombre}</td></tr>`;
        });

        return res.send(`<table>
            <tr>
                <th>id</th>
                <th>Nombre:</th>
            <tr>
            ${userHTML}
            </table>`
        );

    });
});

app.listen(3001,()=>{
    console.log('Servidor escuchando en el puerto 3001')
})