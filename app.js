const express = require('express');
const { get } = require('mongoose');
const app = express();
const path = require('path');


app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index');
});

const port = 3000;
app.listen(port, ()=>{ console.log('Rodando '+port)});