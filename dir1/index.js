const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());

const connectionUrl = "mongodb://localhost:27017";
const client = new MongoClient(connectionUrl);

let student;

async function startServer() {
  try {
    await client.connect();
    console.log("Database connection successful");

    const db = client.db("schoolDb");
    student = db.collection("student");

    app.listen(8000, () => {
      console.log("Server running on port 8000");
    });
  } catch (error) {
    console.error(error);
  }
}

startServer();

// Add student (single)
app.post("/student", async (req, res) => {
  try {
    await student.insertOne(req.body);
    res.status(201).send("Student added successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get students (optional age filter)
app.get("/student", async (req, res) => {
  try {
    const { age } = req.query;
    const query = {};

    if (age) {
      query.age = parseInt(age);
    }

    const data = await student.find(query).toArray();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//update student
app.put("/student", (req, res, next) => {
  const { age } = req.query;
  const { dept } = req.body;
  student.updateMany({ age }, { $set: { dept } }).then((data) => {
    console.log(data);
    res
      .status(200)
      .json({ message: "student deleted successfully" })
      .catch((error) => res.status(500).send({ message: error.message }));
  });
});

//delete student
app.delete("/student", (req, res, next) => {
  const { email } = req.query;
  student
    .findOneAndDelete({ email: email })
    .then(() =>
      res.status(200).json({ message: "student deleted successfully" }),
    )
    .catch((error) => res.status(500).json({ message: error.message })); //DeleteMany
});

/*const express = require("express");
const mongodb = require("mongodb");

const app = express();
app.use(express.json());

const connectionUrl = "mongodb://localhost:27017";
const client = new mongodb.MongoClient(connectionUrl);

client
  .connect()
  .then(() => console.log("Database connection successful"))
  .catch((error) => console.log(error));

const db = client.db("schoolDb");
const student = db.collection("student");

app.post("/student", (req, res) => {
  student
    .insertMany(req.body)
    .then(() => {
      res.status(201).send("Student added successfully");
    })
   .catch((error) => res.status(500).send(error.message)),
});

//get student
app.get("/student", (req, res) => {
  const { age } = req.query;

  student
    .find({ age: parseInt(age) })
    .toArray()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});


const errormiddleware = (error, req, res, next) => {
  res.status(500).send(error.message);
};

app.use(errormiddleware);

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
*/
