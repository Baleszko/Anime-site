import style from "../styles/SearchBar.module.css";
import Image from "next/image";

function SearchBar() {
  return (
    <div className={style.searchBarContainer}>
      <input
        className={style.searchBar}
        type="search"
        placeholder="Search..."
      ></input>
      <button className={style.button}>
        <div className={style.logo}>
          <Image src="/search.svg" alt="search logo" layout="fill"></Image>
        </div>
      </button>
    </div>
  );
}

export default SearchBar;
