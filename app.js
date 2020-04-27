const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
//import routes here
const authRoutes = require("./routes/auth");

//DB Connection
//This is local DB connection
//Change this address to cloud host
const db = "mongodb://localhost:27017/smartfinances";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log(err);

    console.log("DB CONNECTION ERROR");
  });

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser()); //used to put or delete some values into the cookies
app.use(cors());

//Routes here
app.use("/api", authRoutes);

//Port
const port = process.env.PORT || 8000;

//Starting Server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
