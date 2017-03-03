var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname,'/app')));
app.use(express.static('/bootstrap'));

app.use(express.static(path.join(__dirname,'/')));

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
            name:"Collins",
            address:"234",
            workingHours:'9-12',
            serialNumber:1,
            goods:[
                {
                    name:"Collins",
                    description:"blablabla"
                },
                {
                    name:"Collins",
                    description:"blablabla"
                },

                {
                    name:"Collins",
                    description:"blablabla"
                }
            ]
        },
        {
            name:"Collins",
            address:"234",
            workingHours:'9-12',
            serialNumber:2,
            goods:[
                {
                    name:"Collins",
                    description:"blablabla"
                },
                {
                    name:"Collins",
                    description:"blablabla"
                },
                ,
                {
                    name:"Collins",
                    description:"blablabla"
                },
                ,
                {
                    name:"Collins",
                    description:"blablabla"
                }
            ]
        },
        {
            name:"Collins",
            address:"234",
            workingHours:'9-12',
            serialNumber:3,
            goods:[
                {
                    name:"Collins",
                    description:"blablabla"
                },
                {
                    name:"Collins",
                    description:"blablabla"
                }
            ]
        },
        {
            name:"Collins",
            address:"234",
            workingHours:'9-12',
            serialNumber:4,
            goods:[
                {
                    name:"Collins",
                    description:"blablabla"
                },
                {
                    name:"Collins",
                    description:"blablabla"
                }
            ]
        }

    ]);
});

app.get("/goods/:num", function(req, res,next) {

    console.log("GET /goods");
    var num = req.params.num;
    res.send([
        {
            name:"Collins1",
            description:"blablabla1"
        },
        {
            name:"Collins2",
            description:"blablabla2"
        },
        {
            name:"Collins3",
            description:"blablabla3"
        },
        {
            name:"Collins4",
            description:"blablabla4"
        },
        {
            name:"Collins5",
            description:"blablabla5"
        }
    ]);
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