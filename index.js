const express = require("express");
const app = express();
app.listen(5000, () => {
  console.log("listening on port");
});
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "A straightforward node-based API designed for custom redirection purposes."
    );
});
app.get("/onlinejudge", (req, res) => {
  res.redirect("https://github.com/somsingh23");
});
app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});
