const events = require("events");

const{EventEmitter} = events;

const eventEmitter = new EventEmitter();

//register an event
eventEmitter.on("event-1", function(obj){
    console.log("Hi there");
    console.log(obj);
});

console.log("i am sync");

//emit or raise an event
eventEmitter.emit("event-1",{msg:"by there", })