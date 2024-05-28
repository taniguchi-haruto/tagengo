// import react from  "react"
import { Search } from "./Search";
export const Header = (props) => {
  const { postButton } = props;

  return (
    <header>
      <h1>レシピパッド</h1>
      {/* <Search
      onClick={postButton}
      ></Search> */}
      <button onClick={postButton}>検索</button>;
    </header>
  );
};
