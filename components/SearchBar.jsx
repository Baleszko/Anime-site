import style from "../styles/SearchBar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import searchSvg from "../public/search.svg";

function SearchBar() {
  const router = useRouter();
  let [searchText, setSearchText] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/search/${searchText}`);
      setSearchText("");
    }
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (searchText && e.key === "Enter") {
      router.push(`/search/${searchText}`);
      setSearchText("");
    }
  };

  return (
    <div className={style.searchBarContainer}>
      <input
        className={style.searchBar}
        type="search"
        placeholder="Search..."
        value={searchText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></input>
      <button onClick={handleClick} className={style.button}>
        <div className={style.logo}>
          <Image src={searchSvg} alt="search logo" layout="fill"></Image>
        </div>
      </button>
    </div>
  );
}

export default SearchBar;
