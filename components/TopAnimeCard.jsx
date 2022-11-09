import Image from "next/image";
import styles from "../styles/TopAnimeCard.module.css";

function TopAnimeCard({ topItem, id }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={topItem.images.webp.image_url}
          alt={topItem.title}
          layout="fill"
        ></Image>
      </div>
      <div className={styles.dataContainer}>
        <h2 className={styles.title}>{id}.</h2>
        <h3>{topItem.title} </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
          className={styles.svg}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>

        <p className={styles.score}>{topItem.score}</p>
      </div>
    </div>
  );
}

export default TopAnimeCard;
