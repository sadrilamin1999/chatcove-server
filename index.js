require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");

// express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// endpoints
app.use("/api/user", userRouter);

//port
const PORT = process.env.PORT || 4000;

// routes
app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

// connect to db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // listening for request
    app.listen(PORT, (req, res) => {
      console.log(`connected to mongodb running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
