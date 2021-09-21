const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/hello", (req, res) => {
  console.log("Request received");
  res.send({message: "Hello World", timestamp: (new Date()).getTime()}).status(200);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));