const express = require("express");

const app =express();

app.get("/users",(req, res) => {
 res.send("users list");
});

app.get("/users/:userid",(req, res) => {
   let {userid} = req.params;
   console.log(userid);

    res.send("user id: "+ userid + " datail.");
});

app.listen(8000, () => {
    console.log("server is running on port 8000");
});