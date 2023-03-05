const express = require("express");
const cors = require("cors");

// express app
const app = express();

// middlewire
app.use(express.json());
app.use(cors());

//port
const PORT = process.env.PORT || 4000;
// listening for request
app.listen(PORT, (req, res) => {
  console.log(`setver running on port ${PORT}`);
});
