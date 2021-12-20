const express = require('express');
const app = express();

app.get('/inicio',function(request,res){
    res.sendFile(__dirname+'/index.html');
});

app.get('/products',function(request,res){
    res.sendFile(__dirname+'/productos.html');
});

app.use(function(req, res, next){
    res.status(404).sendFile(__dirname+'/404.html')
});

const PORT = process.env.PORT || 3000;

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});