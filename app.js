const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);

// app.use("/", (req, res, next) => {
//   console.log("This always runs");
//   next();
// });

// app.use("/add-product", (req, res, next) => {
//   res.send(
//     `<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>`
//   );
// });

// // app.use("/product", (req, res, next) => {
// //   console.log(req.body);
// //   res.redirect("/");
// // });

// app.post("/product", (req, res, next) => {
//     console.log(req.body);
//     res.redirect("/");
//   });
