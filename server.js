const express = require("express");
const app = express();
// var faker = require("faker");
// var faker = require("@faker-js/faker");
const { faker } = require("@faker-js/faker");
const port = 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const p = (a) => {
  console.log(a);
};

p(faker.name.findName());
p(faker.name.findName());
p(faker.name.findName());
p(faker.name.findName());

class User {
  //   constructor(_id=8, firstName="us", lastName="niemo", phoneNumber="80000", email="niemo@gmail.com", password="12345") {
  // constructor(options = {_id, firstName, lastName, phoneNumber, email, password}) {
  constructor(
    options = {
      // _id: faker.random.number(100),
      _id: "0",
      firstName: "default",
      lastName: "default",
      phoneNumber: "default",
      email: "default@gmail.com",
      password: "default",
    }
  ) {
    this._id = faker.datatype.number(100);
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
    // this._id = options._id;
    // this.firstName = options.firstName;
    // // this.firstName = faker.name.findName();
    // this.lastName = options.lastName;
    // this.phoneNumber = options.phoneNumber;
    // this.email = options.email;
    // this.password = options.password;
  }
}

class Company {
  constructor() {
    this._id = faker.datatype.number(100);
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    };
  }
}

const us = new User({
  _id: "3",
  firstName: "Eric",
  lastName: "Niemo",
  phoneNumber: "12345",
  email: "niemo@gmail.com",
  password: "1234",
});
const roby = new User({
  _id: "3",
  firstName: "Roby",
  lastName: "Niemo",
  phoneNumber: "12345",
  email: "niemo@gmail.com",
  password: "1234",
});
const comp = new Company();
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
app.get("/api/tester", (req, res) => {
  console.log("tester api");
  res.json([faker.name.findName(), new Date().getTime()]);
});

// USER
app.get("/api/users/new", (req, res) => {
  console.log("getting new user");
  // res.json(
  //   us
  // );
  res.json({
    // Object.key(us)[0]:
    _id: us._id,
    firstName: us.firstName,
    lastName: us.lastName,
    phoneNumber: us.phoneNumber,
    email: us.email,
    password: us.password,
  });
  // res.json({
  //   _id: faker.datatype.number(100),
  //   firstName: faker.name.firstName(),
  //   lastName: faker.name.lastName(),
  //   phoneNumber: faker.phone.phoneNumber(),
  //   email: faker.internet.email(),
  //   password: faker.internet.password(),
  // });
});

// COMPANY
app.get("/api/company/new", (req, res) => {
  console.log("getting new company");
  res.json({
    _id: comp._id,
    name: comp.name,
    address: comp.address,
  });
});
// COMPANY & USER
app.get("/api/user/company", (req, res) => {
  console.log("getting new user & company");
  res.json({
    us,
    comp,
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
