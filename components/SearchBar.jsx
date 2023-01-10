import style from "../styles/SearchBar.module.css";
import Image from "next/image";
import { useState } from "react";

function SearchBar() {
  let [searchText, setSearchText] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={style.searchBarContainer}>
      <input
        className={style.searchBar}
        type="search"
        placeholder="Search..."
        onChange={handleChange}
      ></input>
      <button onClick={handleClick} className={style.button}>
        <div className={style.logo}>
          <Image src="/search.svg" alt="search logo" layout="fill"></Image>
        </div>
      </button>
    </div>
  );
}

export default SearchBar;

//window.location.href="localhost:3000/top"
