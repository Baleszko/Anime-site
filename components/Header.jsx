import Link from "next/link";
import styles from "../styles/Header.module.css";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.linkContainer}>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/top">
          <a className={styles.link}>Top</a>
        </Link>
      </div>
      <SearchBar></SearchBar>
    </header>
  );
}

export default Header;
