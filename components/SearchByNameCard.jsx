import Image from "next/image";
import Link from "next/link";
import style from "../styles/SearchByNameCard.module.css";

function SearchByAnimeCard({ anime }) {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image
          className={style.image}
          src={anime.images?.webp.image_url}
          alt={anime.title}
          layout="fill"
        ></Image>
      </div>
      <div className={style.dataContainer}>
        <Link href={`../anime/${anime.mal_id}`}>
          <div className={style.titleContainer}>
            <h3>{anime.title} </h3>
          </div>
        </Link>
        <h4>{anime.rating}</h4>
        <h4>{anime.episodes ? `${anime.episodes} episode` : null}</h4>
        <ul className={style.genresList}>
          {anime.genres.map((item) => (
            <li key={item.mal_id}> {item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchByAnimeCard;
