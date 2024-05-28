import { useEffect, useState } from "react";

export const Search = (props) => {
  const { postButton } = props;
  console.log("test", postButton)
  const [search, searchButton] = useState(true);
  const [foodList, setList] = useState([]);
  useEffect(() => {
    fetch("/api/:recipe_id")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, [search]);


  return <button onClick={postButton}>検索</button>;
};
