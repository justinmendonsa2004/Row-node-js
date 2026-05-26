// const fs = require("fs");
// fs.writeFile("test.text", "hi there", function (error) {
//   if (!error) {
//     console.log("File created Successfully");
//   }
// });

// console.log("This is sync");

//fs append..
// const fs = require("fs");

// fs.appendFile("test.txt", " by there", function (error) {
//   if (!error) {
//     console.log("File created successfully");
//   }
// });

// console.log("This is Sync");

//read file...
// const fs = require("fs");

// fs.readFile("./test.txt", function (error, data) {
//   if (!error) {
//     console.log(data.toString());
//   }
// });

//delete text file...
const fs = require("fs");

fs.unlink("./test.txt", function (error) {
  if (!error) {
    console.log("File deleted successfully");
  }
});
