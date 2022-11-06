import Image from "next/image";
import styles from "../styles/RecommendationCards.module.css";

function Card({ content, firstData, secondData }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.subtitleContainer}>
          <h2 className={styles.subtitle}>If you like...</h2>
          <h2 className={styles.subtitle}>...then you might like</h2>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={firstData.images.webp.large_image_url}
            alt={firstData.title}
            loading="lazy"
            layout="fill"
          ></Image>
        </div>

        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={secondData.images.webp.large_image_url}
            alt={secondData.title}
            loading="lazy"
            layout="fill"
          ></Image>
        </div>
        <h3> {firstData.title} </h3>
        <h3> {secondData.title} </h3>

        <p className={styles.content}>{content}</p>
      </div>
    </>
  );
}

export default Card;
