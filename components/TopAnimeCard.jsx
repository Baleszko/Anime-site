import Image from "next/image";
import Link from "next/link";
import styles from "../styles/TopAnimeCard.module.css";

function TopAnimeCard({ topItem, id }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={topItem.images?.webp.image_url}
          alt={topItem.title}
          layout="fill"
        ></Image>
      </div>
      <div className={styles.dataContainer}>
        <Link href={`anime/${topItem.mal_id}`}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>{id}.</h2>
            <h3>{topItem.title} </h3>
          </div>
        </Link>

        <div className={styles.scoreContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className={styles.svg}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <p className={styles.score}>{topItem.score}</p>
        </div>
        <h4>{topItem.rating}</h4>
        <h4>{topItem.episodes ? `${topItem.episodes} episode` : null}</h4>
        <ul className={styles.genresList}>
          {topItem.genres.map((item) => (
            <li key={item.mal_id}> {item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TopAnimeCard;
