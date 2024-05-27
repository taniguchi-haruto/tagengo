const express = require("express");
const app = express();
const config = require("./knexfile.js");
const knex = require("knex")(config);
const foodList = [
  "./img/キャベツ.jpeg",
  "./img/レタス.jpeg",
  "./img/ブロッコリー.jpeg",
];

app.use("/", express.static("/front/dist"));

app.get("/api/foodList", (req, res) => {
  res.json(foodList);
});
app.use("/", express.json());

app.post("/api/foodList", (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});
app.get("/api/:recipe_id", (req, res) => {
  let id = Number(req.params.recipe_id);
  let test = knex("recipes")
    .select("*")
    .then((e) => {
        // console.log(e)
      const newArr = e.filter((obj) => id === obj.recipe_id);
      res.send(newArr);
    });
  // id === obj[recipe_id] ?res.send(knex.select("recipes_name"))
});

app.listen(3000, () => {
  console.log("server is running 3000");
});
