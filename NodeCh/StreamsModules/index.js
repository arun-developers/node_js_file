// const fs = require("fs");

// const http = require("http");

// const server = http.createServer();

// server.on("request",(req,res) => {
//     fs.readFile("input.txt",(err,data) => {
//         if (err) return console.error(err);
//         res.end(data.toString);
//     });
    
// });

// server.listen(8080,"127.0.0.1");

// // //  2nd way 
// // 1 Reading from a Stream 
// // 2 Create a Readable Stream
// // 3 Handle stream Events --> data , end and error ;

// const Redablestream = fs.createReadStream("input.txt");

// Redablestream.on("data",(chunkdata) =>{
//     res.write(chunkdata);
// });
// Redablestream.on("end",() =>{
// res.end();
// });

// server.listen(8080,"127.0.0.1");


// Stream pipes in nodejs 



// Readable.pipe() Method

// const fs = require("fs");

// const http = require("http");

// const server = http.createServer();

// server.on("request",(req,res) =>{

// const rstream = fs.createReadStream("input.txt");
// rstream.pipe(res);
// });


// server.listen(8080,"127.0.0.1");

