const express = require("express");
const app = express();
const config = require("./knexfile.js");
const knex = require("knex")(config);
const foodList = [
  "./img/キャベツ.jpeg",
  "./img/レタス.jpeg",
  "./img/ブロッコリー.jpeg",
];

app.use("/", express.static(__dirname + "/front/dist"));

app.get("/api/foodList", (req, res) => {
  res.json(foodList);
});
app.use("/", express.json());

app.post("/api/foodList", (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});
const recipeList = [];
app.get("/api/:recipe_id", async (req, res) => {
  let id = Number(req.params.recipe_id);

  let test = await Promise.all([knex("recipes").select("*")]).then((e) => {
    e.filter((arr) => {
      arr.filter((obj) => {
        recipeList.push(obj);
      });
    });
    const newArr = e.filter((obj) => id === obj.recipe_id);
    res.send(newArr);
  });
  // id === obj[recipe_id] ?res.send(knex.select("recipes_name"))
});

app.get("/api/:recipe_id", async (req, res) => {
  res.json(recipeList);
});

let recipe = [];
app.post("/api/recipe", async (req, res) => {
  // console.log(req)
  const body = req.body;
  const result = [];
  console.log("list", recipeList);
  recipeList.filter(async (obj) => {
    let newArr = obj.recipe_ingredien;
    newArr = newArr.split(",");

    await newArr.filter((ele) => {
      body.filter((item) => {
        if (ele === item) {
          return result.push(obj.recipe_name);
        }
      });
    });
  });

  recipe = Array.from(new Set(result));
  res.json(recipe);
  console.log("recipe",recipe);
  res.end();
});
app.get("/api/recipe", (req, res) => {
  res.json(recipe);
  console.log("recipe2",recipe);
});
// app.post("/api/recipe", (req, res)=> {
//   console.log(req.body)
// })
app.listen(3000, () => {
  console.log("server is running 3000");
});
