const express = require("express");
const app = express();
const port = 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User {
  constructor() {
    this._id = 8;
    this.firstName = "eric";
    this.lastName = "niemo";
    this.phoneNumber = "350";
    this.email = "niemo@gmail.com";
    this.password = "testpass";
  }
}

class Compoany {
  constructor() {
    this._id = 8;
    this.name = "eric";
    this.address = "niemo";
    this.street = {
      street: "block street",
      city: "NYC",
      state: "New York",
      zipCode: 63808,
      country: "USA",
    };
  }
}

const eric = new User();
const roby = new User();

app.get("/", (req, res) => {
  console.log("newer one");
  res.json({
    "//message": "comment on message",
    message: "here's some message",
  });
});
app.get("/api", (req, res) => {
  console.log("trying to talk to database");
  res.json({ message: "here is your response, sir" });
});

app.get("/api/other", (req, res) => {
  console.log("getting other route");
  res.json([
    "here is item 0",
    "you can put whatever you want in here!",
    new Date().getTime(),
  ]);
});

// USER
app.get("/api/users/new", (req, res) => {
  console.log("getting other route");
  res.json([eric._id, eric.firstName, eric.lastName]);
});

// COMPANY
app.get("/api/company/new", (req, res) => {
  console.log("getting other route");
  res.json([
    "here is item 0",
    "you can put whatever you want in here!",
    new Date().getTime(),
  ]);
});

app.get("/api/repeat/:word", (req, res) => {
  console.log("trying to talk to database");
  res.json({ message: `here is your repeated word, sir: ${req.params.word}` });
});

app.post("/api/repeat", (req, res) => {
  console.log("taking in post request");
  res.json(req.body);
});

////////////////////

app.listen(port, () =>
  console.log(`Running on port ${port} is a new way I like to be!`)
);
