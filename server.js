const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const router = require("./controllers/index");

const hbs = exphbs.create({ extname: ".hbs" });

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", router);

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.listen(port, () => {
  console.log(`the server is listening on port ${port}`);
});
