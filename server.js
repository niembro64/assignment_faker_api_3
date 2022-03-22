const express = require("express");
const app = express();
var faker = require("@faker-js/faker");
const port = 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User {
  //   constructor(_id=8, firstName="eric", lastName="niemo", phoneNumber="80000", email="niemo@gmail.com", password="12345") {
  // constructor(options = {_id, firstName, lastName, phoneNumber, email, password}) {
  constructor(options = {_id: "0", firstName: "Roby", lastName: "Daniele", phoneNumber: "1234", email: "roby@gmail.com", password: "asdfasdf"}) {
    this._id = options._id;
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.phoneNumber = options.phoneNumber;
    this.email = options.email;
    this.password = options.password;
  }
}

class Company {
  constructor() {
    this._id = 8;
    this.name = "google";
    this.address = {
      street: "here street",
      city: "NYC",
      state: "New York",
      zipCode: 63808,
      country: "USA",
    };
  }
}

const eric = new User({id: "3", firstName: "Eric", lastName:"Niemo", phoneNumber: "12345", email: "niemo@gmail.com", password: "1234"})
const roby = new User();
const microsoft = new Company();
const google = new Company();

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
  console.log("getting new user");
  res.json({
    // Object.key(eric)[0]:
    _id: eric._id,
    firstName: eric.firstName,
    lastName: eric.lastName,
    phoneNumber: eric.phoneNumber,
    email: eric.email,
    password: eric.password,
  });
});

// COMPANY
app.get("/api/company/new", (req, res) => {
  console.log("getting new company");
  res.json({
    _id: microsoft._id,
    name: microsoft.name,
    address: microsoft.address,
  });
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

app.listen(port, () => console.log(`Running on port ${port}`));
