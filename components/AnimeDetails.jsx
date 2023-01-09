import style from "../styles/animeDetails.module.css";
import Image from "next/image";

function AnimeDetails({ anime }) {
  return (
    <main className={style.main}>
      <div className={style.imgContainer}>
        <Image
          className={style.img}
          src={anime.images?.webp.large_image_url}
          alt="images from the anime"
          layout="fill"
        />
      </div>
      <div className={style.dataContainer}>
        <h1> {anime.title} </h1>
        <p>Japanise titele: {anime.title_japanese}</p>
        <div className={style.ranking}>
          <p>Rank: {anime.rank}</p>
          <p>score: {anime.score}</p>
        </div>
        <p>{anime.type} </p>
        <p>{anime.episodes}</p>
        <p>{anime.duration}</p>
        <ul className={`${style.genres} ${style.listToCommas}`}>
          {anime.genres?.map((item) => (
            <li key={item.mal_id}> {item.name}</li>
          ))}
        </ul>
        <ul className={`${style.licensors} ${style.listToCommas}`}>
          {anime.licensors?.map((item) => (
            <li key={item.mal_id}> {item.name}</li>
          ))}
        </ul>
        <p></p>
        <p></p>
      </div>
      <div className={style.youtubeVideoContainer}>
        <embed
          className={style.youtubeVideo}
          type="video/webm"
          src={anime.trailer?.embed_url}
          height="720"
          width="1280"
        ></embed>
      </div>
    </main>
  );
}

export default AnimeDetails;
