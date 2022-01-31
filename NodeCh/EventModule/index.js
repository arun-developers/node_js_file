// Events Module;-

// Node.js has a built-in-module, called "Event".
// where you can create , fire-, and listen for your own Events. 

// Example-1 - Registering for the Event to be fired only one time using once .

// Example-2- Create an Event emitter instance and register a couple of callbacks .

// Example-3- Registering for the Event with callbacks parameters . 

// Example-1 ; 

// const EventsEmitter = require("events");
// const { features } = require("process");

// const event = new EventsEmitter();

// event.on("sayMyName", () => {
//     console.log("My name is Arun");
// })

// event.emit("sayMyName");

// The concept is quite simple emitter objects emit named events that couse previouslly registerd 
// listeners to be called . so an emitter object basically has two main features 

// Emitting name events . 
// Registering and unregistering listener functions . 

// // Example-2 ;


// const EventsEmitter = require("events");

// const event = new EventsEmitter();

// event.on("sayMyName", () => {
//     console.log("My name is Arun");
// });

// event.on("sayMyName", () => {
//     console.log("My name is Arun");
// });

// event.on("sayMyName", () => {
//     console.log("My name is Arun");
// });

// event.emit("sayMyName");

// Example-3 ; 

// const EventsEmitter = require("events");

// const event = new EventsEmitter();

// event.on("checkpage",(sc,msg) =>{
//     console.log(`status code is ${sc} and the page ${msg}`);
// });

// event.emit("checkpage",200,"ok");

