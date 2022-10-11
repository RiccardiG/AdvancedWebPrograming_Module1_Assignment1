const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

const dogs = [
  {name:"Jimbo" , breed: "Husky"},
  {name:"Spark", breed: "Golden Retriever"}
]

const admins = [
  {name: "Root", age: -1, index:0},
  {name: "Giuliano", age:20, index:1}
]

app.get('/dogs', (req, res) => {
  res.json(dogs);
});

app.get('/admins', (req, res) => {
  res.json(admins);
});

app.get('/admins/:id', (req, res) => {
  res.json(admins[parseInt(req.params.id)]);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.get('/user/:id', (req, res) => {
  res.send(`Welcome user ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


