// JSON stands for javaScript object Notation . 
// JSON is a lightweight format for storing and transporting data . 
// JSON is often used when data is sent from a server to web page . 

// note ; - must use double cout with string
// // - object data convert into JSON then use : Stringify mrthod ;
// // - JSON data convert into object data then use : Parse method ;

// // const fs = require("fs");
// const bioData = {
//     Name : "Arun singh",
//     Age : 26,
//     Qualification : "B Tech",
// };

// console.log(bioData.Name);
// console.log(bioData.Age);


// const jsonData = JSON.stringify(bioData);

// console.log(jsonData);

// const objData = JSON.parse(jsonData);

// console.log(objData);

// o/p => {"Name":"Arun singh","Age":26,"Qualification":"B Tech"} = jsonData

// { Name: 'Arun singh', Age: 26, Qualification: 'B Tech' }=objData

// Note ; we cant use console.log(jsonData.Qualification);
        // = we cant use console.log(objData.Qualification);


        // challange time 

// // 1 ; data convert into JSON, 
// // 2 ; add Data into 2nd File ,
// // 3 ; readFile
// // 4 ; again convert json into  object orignal File 
// // 5 ; console.log     


// const fs = require("fs");
// const bioData = {
//     Name : "Arun singh",
//     Age : 26,
//     Qualification : "B Tech",
// };

// // const jsonData = JSON.stringify(bioData);

// // fs.writeFile("json1.json", jsonData,(err) =>{
// //     console.log("Done");
// // });

// fs.readFile("json1.json","utf-8",(err,data) =>{
//     // console.log(data);

//     // again convert json into  object orignal File 

//     const objData = JSON.parse(data);
//     console.log(objData);
// });









