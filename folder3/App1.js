
//os

const os =require("os");

let typeofos = os.type();
let archofos =os.arch();
let hostnameofos =os.hostname();
let platformOfMyOs=os.plathform();
let freememOfOs =os.freemem();
let cpusOfOs =os.cpus();

console.log(platformOfMyOs);