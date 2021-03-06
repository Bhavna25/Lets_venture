const express = require("express");
const os = require("os");
const app = express();

app.use(express.static("dist"));

app.listen(process.env.PORT || 8000, () =>
  console.log(`Listening on port ${process.env.PORT || 8000}!`)
);
