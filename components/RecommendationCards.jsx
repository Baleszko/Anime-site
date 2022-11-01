import Image from "next/image";
import styles from "../styles/Card.module.css";

function Card({ content, firstData, secondData }) {
  return (
    <div className={styles.card}>
      <p>{content}</p>
      {/* <Image
        className={styles.image}
        src={cardData.images.webp.large_image_url}
        width={300}
        height={350}
        layout="responsive"
        alt={`Picture of the ${cardData.title}`}
      ></Image>
      <h3 className={styles.h3}>{cardData.title}</h3> */}
    </div>
  );
}

export default Card;
