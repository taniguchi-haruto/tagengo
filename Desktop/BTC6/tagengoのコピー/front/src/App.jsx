import { useEffect, useState } from "react";
import "./App.css";
import { Heder } from "./Heder";

import { Start } from "./Start";
import { User } from "./User";
function App() {
  // const [count, setCount] = useState(0)
  const [list, setList] = useState([]);
  const [start, setStart] = useState("start");
  const [display, setDisplay] = useState(true);
  const [country, setCountry] = useState("");
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState();



  useEffect(() => {
    getList();
  }, []);




  const getList = () => {
    fetch("/api/country")
      .then((res) => res.json())
      .then((data) => setList(data));
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === list[index].name) {
      setIndex((e) => e + 1);
      setValue((e.target.value = ""));
    }
  };
  const postUser = () => {
    fetch("/api/score", {
      method:'POST',
      headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ body: 'value' })
    })
  }

  return (
    <>
      <Heder></Heder>
      <User></User>
      <>
        {display && (
          <Start
            onClick={() => {
              setDisplay(!display);
            }}
            start={start}
            list={list}
          ></Start>
        )}
      </>
      {!display && (
        <div className="mondai">
          {/* <input
          className="input"
            type="text"
            placeholder="Type here..."
            value={inputValue}
            onChange={handleInputChange}
          /> */}
          {/* <p>
            {inputValue.split("").map((char, index) => (
              <span
                key={index}
                style={{ opacity: index === inputValue.length - 1 ? 1 : 0.5 }}
                placeholder="Type here..."
              >
                {char}
              </span>
            ))}
          </p> */}
          <div>
            <h4>{list[index].name}</h4>
            <input
              className="input"
              type="text"
              placeholder="Type here..."
              value={value}
              onChange={handleInputChange}
              style={{ outline: "none" }}
            />
            <h4>
              {value.split("").map((ele, index) => (
                <span
                  key={index}
                  style={{ opacity: index === value.length - 1 ? 1 : 0.5 }}
                >
                  {ele}
                </span>
              ))}
            </h4>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
