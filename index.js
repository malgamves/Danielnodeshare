var express = require ('express');
var bodyParser = require("body-parser");

var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var allItems=[{"item":"Haha"},{"item":"Haha"}];
app.get('/items',(req,res) => {
    res.send({allItems});
});
app.post('/items', (req,res) => {
    allItems.push(req.body);
    res.sendStatus(200);
});
var server = app.listen(3000,()=>{
    console.log("Server Running At http://localhost:" + server.address().port)
});