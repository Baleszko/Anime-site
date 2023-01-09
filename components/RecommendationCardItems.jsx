import style from "../styles/RecommendationCardItems.module.css";
import Link from "next/link";
import Image from "next/image";

function ReccomendationCardItems({ id, imgUrl, title }) {
  return (
    <div className={style.cardContainer}>
      <Link href={`anime/${id}`}>
        <div className={style.imageCard}>
          <div className={style.imageContainer}>
            <Image
              className={style.image}
              src={imgUrl}
              alt={title}
              loading="lazy"
              layout="fill"
            ></Image>
          </div>
          <h3 className={style.title}> {title} </h3>
        </div>
      </Link>
    </div>
  );
}

export default ReccomendationCardItems;
