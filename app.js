const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const errorController = require("./controllers/error");
const sequelize = require("./util/database");
const Product = require("./models/products");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");
const Order = require("./models/order");
const OrderItem = require("./models/order-item");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

//db.auth("useradmin", "adminpassword")
//const MONGO_URI = 'mongodb://localhost:27017/auth';

//compile with EJS engine
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {});
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });
Product.belongsToMany(Order, { through: OrderItem });

sequelize
  .sync()
  // .sync({ force: true })
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "Neil", email: "hello@world.com" });
    }
    return user;
  })
  .then((user) => {
    user.getCart().then((cart) => {
      if(!cart)
        return user.createCart();
    });
  })
  .then((cart) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
