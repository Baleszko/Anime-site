import styles from "../styles/TopAnime.module.css";
import TopAnimeCard from "./TopAnimeCard";

function TopAnimes({ top }) {
  return (
    <main className={styles.main}>
      {top.map((topItem, index) => (
        <TopAnimeCard
          key={topItem.mal_id}
          id={index + 1}
          topItem={topItem}
        ></TopAnimeCard>
      ))}
    </main>
  );
}

export default TopAnimes;
