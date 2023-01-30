import style from "../styles/animeDetails.module.css";
import Image from "next/image";
import RelationDetails from "../components/RelationDetails.jsx";

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
        <div className={style.datas}>
          JAPANISE TITLE:
          <p className={style.data}>{anime.title_japanese}</p>
        </div>
        <div className={style.datas}>
          RANK: <p className={style.data}>{anime.rank}</p>
        </div>
        <div className={style.datas}>
          SCORE: <p className={style.data}>{anime.score}</p>
        </div>
        <div className={style.datas}>
          TYPE: <p className={style.data}>{anime.type} </p>
        </div>
        <div className={style.datas}>
          SOURCE: <p className={style.data}>{anime.source} </p>
        </div>
        <div className={style.datas}>
          EPISODE: <p className={style.data}>{anime.episodes}</p>
        </div>
        <div className={style.datas}>
          RATING: <p className={style.data}>{anime.rating}</p>
        </div>
        <ul className={`${style.genres} ${style.listToCommas} ${style.datas}`}>
          GENRES:
          {anime.genres?.map((item) => (
            <li className={style.data} key={item.mal_id}>
              {item.name}
            </li>
          ))}
        </ul>
        <ul
          className={`${style.licensors} ${style.listToCommas} ${style.datas}`}
        >
          PRODUCERS:
          {anime.producers?.map((item) => (
            <li className={style.data} key={item.mal_id}>
              {item.name}
            </li>
          ))}
        </ul>
        <ul
          className={`${style.licensors} ${style.listToCommas} ${style.datas}`}
        >
          LICENSORS:
          {anime.licensors?.map((item) => (
            <li className={style.data} key={item.mal_id}>
              {item.name}
            </li>
          ))}
        </ul>
        <p className={style.duration}>{anime.duration}</p>
      </div>
      <div className={style.relationContainer}>
        <h2>Relational content</h2>
        {anime.relations?.map((item, index) => (
          <RelationDetails
            key={index}
            relation={item.relation}
            entry={item.entry}
          ></RelationDetails>
        ))}
      </div>

      <h2>Trailer </h2>
      <div className={style.youtubeVideoContainer}>
        <iframe
          className={style.youtubeVideo}
          type="video/webm"
          src={`${anime.trailer?.embed_url}autoplay=0`}
          height="720"
          width="1280"
        ></iframe>
      </div>
    </main>
  );
}

export default AnimeDetails;
