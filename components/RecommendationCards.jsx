import Image from "next/image";
import Link from "next/link";
import styles from "../styles/RecommendationCards.module.css";

function Card({ content, firstData, secondData, userName }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.subtitleContainer}>
          <h2 className={styles.subtitle}>If you like...</h2>
          <h2 className={styles.subtitle}>...then you might like</h2>
        </div>

        <div className={styles.cardContainer}>
          <Link href={`anime/${firstData.mal_id}`}>
            <div className={styles.imageCard}>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src={firstData.images.webp.large_image_url}
                  alt={firstData.title}
                  loading="lazy"
                  layout="fill"
                ></Image>
              </div>
              <h3 className={styles.title}> {firstData.title} </h3>
            </div>
          </Link>

          <Link href={`anime/${secondData.mal_id}`}>
            <div className={styles.imageCard}>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src={secondData.images.webp.large_image_url}
                  alt={secondData.title}
                  loading="lazy"
                  layout="fill"
                ></Image>
              </div>
              <h3 className={styles.title}> {secondData.title} </h3>
            </div>
          </Link>
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
