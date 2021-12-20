//https://github.com/BAKAN05/ej4
const express = require('express');
const app = express();

app.get('/inicio',function(request,res){
    res.render(__dirname+'/index.html');
});

app.get('/products',function(request,res){
    res.render(__dirname+'/productos.html');
});

app.use(function(req, res, next){
    res.status(404).sendFile(__dirname+'/404.html')
});

const PORT = process.env.PORT || 3000;

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});

const productos = [
    { id: 1, objeto: "play", precio: "600$"},
    { id: 2, objeto: "xbox", precio: "600$",},
    { id: 3, objeto: "mobil", precio: "600$",},
    { id: 4, objeto: "tablet", precio: "600$",},
    { id: 5, objeto: "airpods", precio: "600$",},
    { id: 6, objeto: "pencil", precio: "600$",},
    { id: 7, objeto: "tv", precio: "600$",},
    { id: 8, objeto: "guantes", precio: "600$",},
    { id: 9, objeto: "youtube", precio: "600$",},
    { id: 10, objeto: "asf", precio: "600$",},
  ];

app.set("view engine", "ejs");

app.use(express.static("style.css"));
app.use(express.urlencoded({extended: false}))