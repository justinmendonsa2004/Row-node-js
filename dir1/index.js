
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get("/example1", (req, res) => {
//res.cookie("name", "relson");
//res.cookie("age", "32");
res.clearCookie("name")
res.send("Example route")
});

app.listen(8000, () => {
    console.log("server is running on port 8000");
})