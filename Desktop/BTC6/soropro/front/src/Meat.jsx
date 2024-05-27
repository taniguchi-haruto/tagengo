import "./imgList.css";
export const Meat = () => {
  let height = 100;
  return (
    <main className="list">
      <h2>お肉</h2>
      <div className="foodList">
        <button>
          <img src="../meat/牛バラ・スライス.jpeg" height={height}></img>
        </button>
        <button>
          <img src="../meat/牛ヒレ.jpeg" height={height}></img>
        </button>
        <button>
          <img src="../meat/牛肩ロース.jpeg" height={height}></img>
        </button>
        <button>
          <img src="../meat/鶏もも肉.jpeg" height={height}></img>
        </button>
        <button>
          <img src="../meat/鶏胸肉.jpeg" height={height}></img>
        </button>
        <button>
          <img src="../meat/豚バラブロック.jpeg" height={height}></img>
        </button>
        <button>
          <img src="../meat/豚バラ薄切り.jpeg" height={height}></img>
        </button>
        <button>
          <img src="../meat/豚肩ロース.jpeg" height={height}></img>
        </button>
        <button>
          <img src="../meat/豚肩ロース薄切.jpeg" height={height}></img>
        </button>
        <button>
          <img src="../meat/合挽肉.jpeg" height={height}></img>
        </button>
      </div>
    </main>
  );
};
