/*core module
1.os module
2.path module
3.fs module
4.events module
5.http module */

//1.path module..
// import path from "path";
// import os from "os";

// let myPath =
//   "C:/Users/berti/OneDrive/Documents/raw-nodejs/02 core_module in nodejs/app.js";

// let parsedPath = path.parse(myPath);
// let dirname = path.dirname(myPath);
// let ext = path.extname(myPath);

//console.log(ext);

//2.OS module...
// const os = require("os");

// let typeofos = os.type();
// let archofos = os.arch();
// let hostnameofos = os.hostname();
// let platformOfMyOs = os.platform();
// let freememOfOs = os.freemem();
// let cpusOfOs = os.cpus();

//console.log(cpusOfOs);

//fs module...
const fs = require("fs");
// fs.writeFileSync("test.txt", "by there");
// fs.appendFileSync("test.txt", " hi there");

// let data = fs.readFileSync("./test.txt", { encoding: "utf-8" });
// console.log(data); //.toString()

fs.unlink("test.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("File deleted successfully");
});
