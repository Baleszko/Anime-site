import styles from "../styles/TopAnime.module.css";
import TopAnimeCard from "./TopAnimeCard";

function TopAnimes({ top }) {
  return (
    <main className={styles.main}>
      {top.map((topItem) => (
        <TopAnimeCard key={topItem.mal_id} topItem={topItem}></TopAnimeCard>
      ))}
    </main>
  );
}

export default TopAnimes;
