const fs =require("fs");
const { buffer } = require("stream/consumers");

let readStream =fs.createReadStream("./data.txt")

let content =[];

readStream.on("data",  function(buffer){
    content.push(buffer);
});

readStream.on("end",function(){
    let actualData = Buffer.concat(content).toString();
    console.log(actualData);
});