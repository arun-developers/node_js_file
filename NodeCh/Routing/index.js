const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {

    // console.log(req.url);
    if(req.url=="/"){
        res.end("Hello from the HOME sides I am the big bull of the Stock market");  
    }else if(req.url == "/about"){
        res.writeHead(200,{"content-type": "text/html"});
        res.end("<h1> Hello from the HOME sides I am the big bull of the Stock market</h1>");    
    }else if (req.url == "/contact"){
        res.writeHead(200,{"content-type": "text/plain"});
        res.end("Hello from the CONTACT US sides I am the big bull of the Stock market");    
    }else if (req.url == "/userapi"){
        fs.readFile(`${__filename}userapi.json`,"utf-8",(err,data) => {
            console.log(data);
            res.end(data);
        });

    }else {
        res.writeHead(404,{"content-type": "text/html"});
        res.end("<h4> 404 ,Page not found </h4> ");  
    }
    res.end("Hello from the other sides I am the big bull of the Stock market");

});
server.listen(8000, "127.0.0.1" ,() => {
    console.log("To listening my port no 8000");
});
