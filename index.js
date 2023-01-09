const express = require("express");
const app = express();
const ejs = require("ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

//홈
app.get("/", async function (req, res) {
  //   console.log(JSON.stringify(uesr, null, 2));
  res.render("pages/userinfo.ejs");
});
app.get("/010", async function (req, res) {
  //   console.log(JSON.stringify(uesr, null, 2));
  res.render("pages/setting.ejs");
});
//포트연결
const port = 3001;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
