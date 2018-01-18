const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mongooseUri = process.env.MONGOOSE_URI;
mongoose.connect(mongooseUri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const shortUrlRoute = require("./routes/shorturl");
const signUpRoute = require("./routes/user.route");

app.use("/",shortUrlRoute);
app.use("/shorten",shortUrlRoute);
app.use("/signUp",signUpRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
