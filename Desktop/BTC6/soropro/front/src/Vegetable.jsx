import { useEffect, useState } from "react";
import "./imgList.css";
// import {FoodList} from "./FoodList"

export const Vegetable = (props) => {
  const { selectFood, select } = props;
  let height = 100;

  return (
    <main className="list">
      <h2>野菜</h2>
      <div className="foodList">
        <button onClick={select}>
          <img
            id={"キャベツ"}
            src="../vegetableImg/キャベツ.jpeg"
            height={height}
          ></img>
        </button>
        <button onClick={select}>
          <img
            id={"ブロッコリー"}
            src="../vegetableImg/ブロッコリー.jpeg"
            height={height}
          ></img>
        </button>
        <button onClick={select}>
          <img
            id={"レタス"}
            src="../vegetableImg/レタス.jpeg"
            height={height}
          ></img>
        </button>
        <button onClick={select}>
          <img
            id={"アスパラガス"}
            src="../vegetableImg/アスパラガス.jpeg"
            height={height}
          ></img>
        </button>
        <button onClick={select}>
          <img
            id={"ジャガイモ"}
            src="../vegetableImg/ジャガイモ.jpeg"
            height={height}
          ></img>
        </button>
        <button onClick={select}>
          <img
            id={"だいこん"}
            src="../vegetableImg/だいこん.jpeg"
            height={height}
          ></img>
        </button>
        <button onClick={select}>
          <img
            id={"たまねぎ"}
            src="../vegetableImg/たまねぎ.jpeg"
            height={height}
          ></img>
        </button>
        <button onClick={select}>
          <img
            id={"トマト"}
            src="../vegetableImg/トマト.jpeg"
            height={height}
          ></img>
        </button>
        <button onClick={select}>
          <img
            id={"なす"}
            src="../vegetableImg/なす.jpeg"
            height={height}
          ></img>
        </button>
        <button onClick={select}>
          <img
            id={"にんじん"}
            src="../vegetableImg/にんじん.jpeg"
            height={height}
          ></img>
        </button>
        <button onClick={select}>
          <img
            id={"ねぎ"}
            src="../vegetableImg/ねぎ.jpeg"
            height={height}
          ></img>
        </button>
        <button onClick={select}>
          <img
            id={"はくさい"}
            src="../vegetableImg/はくさい.jpeg"
            height={height}
          ></img>
        </button>
        <button onClick={select}>
          <img
            id={"ほうれん草"}
            src="../vegetableImg/ほうれん草.jpeg"
            height={height}
          ></img>
        </button>
        <button onClick={select}>
          <img
            id={"もやし"}
            src="../vegetableImg/もやし.jpeg"
            height={height}
          ></img>
        </button>
        <button onClick={select}>
          <img
            id={"レンコン"}
            src="../vegetableImg/レンコン.jpeg"
            height={height}
          ></img>
        </button>
      </div>
    </main>
  );
};
