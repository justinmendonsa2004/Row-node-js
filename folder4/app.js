const events = require("events");
const fs =require("fs")

const{EventEmitter} = events;

const eventEmitter = new EventEmitter();

//register an event
eventEmitter.on("event-1", function(content){
   fs.writeFile("test.txt",content, function(error){
    if(!error){
        console.log("File created succesfully");
    }
   });
});
module.exports= eventEmitter;
