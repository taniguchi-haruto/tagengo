import { useEffect, useState } from "react";
import "./imgList.css";
// import {FoodList} from "./FoodList"
const selectFood = [];
export const Vegetable = () => {
  let height = 100;

  const postButton = (e) => {


   
    selectFood.push(e.currentTarget);
    console.log(selectFood)
  };

  return (
    <main className="list">
      <h2>野菜</h2>
      <div className="foodList">
        <button onClick={postButton}>
          <img src="../vegetableImg/キャベツ.jpeg" height={height}></img>
        </button>
        <button onClick={postButton}>
          <img src="../vegetableImg/ブロッコリー.jpeg" height={height}></img>
        </button>
        <button onClick={postButton}>
          <img src="../vegetableImg/レタス.jpeg" height={height}></img>
        </button>
        <button onClick={postButton}>
          <img src="../vegetableImg/アスパラガス.jpeg" height={height}></img>
        </button>
        <button onClick={postButton}>
          <img src="../vegetableImg/ジャガイモ.jpeg" height={height}></img>
        </button>
        <button onClick={postButton}>
          <img src="../vegetableImg/だいこん.jpeg" height={height}></img>
        </button>
        <button onClick={postButton}>
          <img src="../vegetableImg/たまねぎ.jpeg" height={height}></img>
        </button>
        <button onClick={postButton}>
          <img src="../vegetableImg/トマト.jpeg" height={height}></img>
        </button>
        <button onClick={postButton}>
          <img src="../vegetableImg/なす.jpeg" height={height}></img>
        </button>
        <button onClick={postButton}>
          <img src="../vegetableImg/にんじん.jpeg" height={height}></img>
        </button>
        <button onClick={postButton}>
          <img src="../vegetableImg/ねぎ.jpeg" height={height}></img>
        </button>
        <button onClick={postButton}>
          <img src="../vegetableImg/はくさい.jpeg" height={height}></img>
        </button>
        <button onClick={postButton}>
          <img src="../vegetableImg/ほうれん草.jpeg" height={height}></img>
        </button>
        <button onClick={postButton}>
          <img src="../vegetableImg/もやし.jpeg" height={height}></img>
        </button>
        <button onClick={postButton}>
          <img src="../vegetableImg/レンコン.jpeg" height={height}></img>
        </button>
      </div>
    </main>
  );
};
