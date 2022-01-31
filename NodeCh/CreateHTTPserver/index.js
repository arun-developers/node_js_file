// 1; // The http.createServer() method includes request and response parameters which is supplied 
// // by node js
// 2; The request object can be used to get information about the current HTTP request 
// // e .g ; url request header and data  
// // 3 ; The response object can be used to send a responce for a current HTTP request 
// 4 ; The response object from the HTTP server is supposed to be displayed as HTML you should include an 
// // HTTP header with the correct content type 

// Localhost ;- “The localhost is the default name describing the local computer address also known as
// the loopback address. For example, typing: ping localhost would ping the local IP address of 127.0. 0.1
//  (the loopback address).
// When setting up a web server or software on a web server, 127.0.

// // create server 

// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end("Hello from the other sides I am the big bull of the Stock market");

// });
// server.listen(8000, "127.0.0.1" ,() => {
//     console.log("To listening my port no 8000");
// });


// const http = require("http");

// const server = http.createServer((req, res) => {

//     // console.log(req.url);
//     if(req.url=="/"){
//         res.end("Hello from the HOME sides I am the big bull of the Stock market");  
//     }else if(req.url == "/about"){
//         res.writeHead(200,{"content-type": "text/html"});
//         res.end("<h1> Hello from the HOME sides I am the big bull of the Stock market</h1>");    
//     }else if (req.url == "/contact"){
//         res.writeHead(200,{"content-type": "text/plain"});
//         res.end("Hello from the CONTACT US sides I am the big bull of the Stock market");    
//     }else {
//         res.writeHead(404,{"content-type": "text/html"});
//         res.end("<h4> 404 ,Page not found </h4> ");  
//     }
//     res.end("Hello from the other sides I am the big bull of the Stock market");

// });
// server.listen(8000, "127.0.0.1" ,() => {
//     console.log("To listening my port no 8000");
// });




