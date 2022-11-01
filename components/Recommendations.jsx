import styles from "../styles/Recommendations.module.css";
import RecommendationsCard from "./RecommendationCards";

function Recommendations({ recommendations }) {
  return (
    <main className={styles.cardWrapper}>
      {recommendations.map((Item) => (
        <RecommendationsCard
          key={Item.mal_id}
          content={Item.content}
          firstData={Item.entry[0]}
          secondData={Item.entry[1]}
        ></RecommendationsCard>
      ))}
    </main>
  );
}

export default Recommendations;
