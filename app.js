const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("in another middleware");
  res.send("<h2>Hello from Express!</h2>");
  console.log("in second middleware");
});

app.listen(3000);
