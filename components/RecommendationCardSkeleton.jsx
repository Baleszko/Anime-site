import styles from "../styles/RecommendationCardSkeleton.module.css";

function RecommendationCardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.subtitleContainer}>
        <h2 className={styles.subtitle}>If you like...</h2>
        <h2 className={styles.subtitle}>...then you might like</h2>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.imageCard}>
          <div className={styles.imageContainer}>
            <div className={styles.image}></div>
          </div>
          <h3 className={styles.title}></h3>
        </div>

        <div className={styles.imageCard}>
          <div className={styles.imageContainer}>
            <div className={styles.image}></div>
          </div>
          <h3 className={styles.title}> </h3>
        </div>
      </div>
    </div>
  );
}

export default RecommendationCardSkeleton;
