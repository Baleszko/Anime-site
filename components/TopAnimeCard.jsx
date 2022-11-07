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
      <h2 className={styles.title}>
        {id}. <p>{topItem.title} </p>
      </h2>
    </div>
  );
}

export default TopAnimeCard;
