import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./Header";
import { Vegetable } from "./Vegetable";
import { Meat } from "./Meat";

function App() {
  const [foodList, setList] = useState([]);

  // const listCreator = async () => {
  //   const fetchedList = await fetch("/api/list");
  //   const listJson = await fetchedList.json();
  //   const result = await Promise.all(
  //     listJson.map((ele) => fetch(`/api/price/${ele.ticker_symbol}`))
  //   );
  //   const resultJson = await Promise.all(result.map((ele) => ele.json()));
  //   const bitObj = listJson.map((ele, index) => ({
  //     ...ele,
  //     current_price: Math.round(resultJson[index]),
  //   }));
  //   setList(bitObj);
  // };
  useEffect(() => {
    // fetch
    // http://localhost:3000/api/list
    // // https://hogehoge.onrender.com
    // fetch("/api/recipe")
    //   .then((res) => res.json())
    //   .then((data) => setList(data));
    // console.log("ugoiteru?");
  }, []);

  //   const postButton = () => {
  //     // fetch post request
  //     fetch("/api/list", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ body: "value" }),
  //     //   main: {
  //     //     "Content-Type": "image/jpeg",
  //     //   },
  //     });
  //   };
  useEffect(() => {
    fetch("/api/:recipe_id", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //
  });
  const selectFood = [];
  const select = (e) => {
    selectFood.push(e.target.id);
  };
  const postButton = async () => {
    await fetch("/api/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectFood),
    }).then((res)=> res.json())
    .then((data) => setList(data))
    // await fetch("/api/recipe")
    //   .then((res) => res.json())
    //   .then((data) => setList(data));
  };

  return (
    <>
      <Header postButton={postButton}></Header>
      <ul>
        {foodList.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>

      <Vegetable selectFood={selectFood} select={select}></Vegetable>
      <Meat></Meat>
    </>
  );
}

export default App;
