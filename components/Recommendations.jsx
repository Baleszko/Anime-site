import styles from "../styles/Recommendations.module.css";
import RecommendationsCard from "./RecommendationCards";

function Recommendations({ recommendations }) {
  return (
    <main className={styles.cardWrapper}>
      <h1 className={styles.title}>Recommandations</h1>
      {recommendations.map((Item) => (
        <RecommendationsCard
          key={`${Item.mal_id}_${Item.user.username}`}
          content={Item.content}
          firstData={Item.entry[0]}
          secondData={Item.entry[1]}
          userName={Item.user.username}
        ></RecommendationsCard>
      ))}
    </main>
  );
}

export default Recommendations;
