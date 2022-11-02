import Image from "next/image";
import styles from "../styles/RecommendationCards.module.css";

function Card({ content, firstData, secondData }) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={firstData.images.webp.large_image_url}
        width={200}
        height={250}
        alt={firstData.title}
        loading="lazy"
        // layout="responsive"
      ></Image>
      <h3>
        If you like...: <br />
        {firstData.title}
      </h3>

      <Image
        className={styles.image}
        src={secondData.images.webp.large_image_url}
        width={200}
        height={250}
        alt={secondData.title}
        loading="lazy"
        // layout="responsive"
      ></Image>
      <h3>
        ...then you might like: <br />
        {secondData.title}{" "}
      </h3>
      <p>{content}</p>
    </div>
  );
}

export default Card;
