import Image from "next/image";
import Link from "next/link";
import styles from "../styles/RecommendationCards.module.css";
import ReccomendationCardItems from "./RecommendationCardItems";

function Card({ content, firstData, secondData, userName }) {
  return (
    <>
      <div className={styles.card}>
        <h2 className={`${styles.subtitle} ${styles.firstTitle}`}>
          If you like...
        </h2>
        <h2 className={`${styles.subtitle} ${styles.secondTitle}`}>
          ...then you might like
        </h2>
        <div className={styles.firstCard}>
          <ReccomendationCardItems
            id={firstData.mal_id}
            imgUrl={firstData.images.webp.large_image_url}
            title={firstData.title}
          ></ReccomendationCardItems>
        </div>
        <div className={styles.secondCard}>
          <ReccomendationCardItems
            id={secondData.mal_id}
            imgUrl={secondData.images.webp.large_image_url}
            title={secondData.title}
          ></ReccomendationCardItems>
        </div>
        <div className={styles.contentContainer}>
          <h2>Description:</h2>
          <p className={styles.content}>{content}</p>
          <p className={styles.userName}>{userName}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
