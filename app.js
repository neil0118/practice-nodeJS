const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const expressHbs = require("express-handlebars");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

//compile with EJS engine
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "404 Not Found", path: "" });
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
