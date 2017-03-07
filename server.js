var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname,'/')));
app.use(express.static(path.join(__dirname,'/app')));
app.use(express.static('/bootstrap'));

app.get("/", function(req, res,next) {
    return res.sendFile(path.join(__dirname,"/app/index.html"));
});

app.get("/bootstrap/:folder/:file", function(req, res,next) {
    return res.sendFile(path.join(__dirname,"/bootstrap/"+req.params.folder+"/"+req.params.file));
});

app.get("/shopList", function(req, res,next) {

    console.log("GET /shopList");
    res.send([
        {
            name:"Rublevskiy",
            address:"Suharevskaya 62",
            serialNumber:0
        },
        {
            name:"5element",
            address:"Odincova 20",
            serialNumber:1
        },
        {
            name:"MTS",
            address:"Kalvaryiskaya 60",
            serialNumber:2
        },
        {
            name:"Velcom",
            address:"Goreckogo 2",
            serialNumber:3
        }
    ]);
});

app.get("/goods/:num", function(req, res,next) {

    console.log("GET /goods "+req.params.num);
    var num = req.params.num;
    switch(num){

        case "0":
            res.send([
                {
                    name:"RIKKI",
                    description:"Chocolate"
                },
                {
                    name:"HELEN",
                    description:"powder"
                },
                {
                    name:"GALLINA BLANCA",
                    description:"bouillon"
                },
                {
                    name:"DOVE",
                    description:"gel"
                },
                {
                    name:"DANONE",
                    description:"yogurt"
                }
            ]);
            break;
        case "1":
            res.send([
                {
                    name:"Lenovo",
                    description:"Lenovo IdeaPad 110-17ACL (80UM002FRA)"
                },
                {
                    name:"Asus",
                    description:"Asus F551CA-SX051D"
                },
                {
                    name:"Dell",
                    description:"Dell Inspiron 15 3541 (3541-8529)"
                }
            ]);
        break;
        default:
            res.send({});
            break;
    }

} );

app.post("/test", function(req, res) {
    /* some server side logic */
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log("post request");
    res.send({1:1,2:2,3:3});
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});