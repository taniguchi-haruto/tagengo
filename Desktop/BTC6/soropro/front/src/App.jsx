import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./Header";
import { Vegetable } from "./Vegetable";
import { Meat } from "./Meat";


function App() {
  // const [foodList, setList] = useState([]);

  useEffect(() => {
    // fetch
    // http://localhost:3000/api/list
    // https://hogehoge.onrender.com

    // fetch("/api/foodList")
    //   .then((res) => res.json())
    //   .then((data) => setList(data));
  });

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

  return (
    <>
      <Header></Header>
      {/* <button onClick={postButton}>POST</button> */}
      <Vegetable></Vegetable>
      <Meat></Meat>
      
    </>
  );
}

export default App;
