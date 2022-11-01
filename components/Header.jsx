import Link from "next/link";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.link}>Home</a>
      </Link>
    </header>
  );
}

export default Header;
