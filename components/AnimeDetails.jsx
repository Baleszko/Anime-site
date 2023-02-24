import style from "../styles/animeDetails.module.css";
import Image from "next/image";
import RelationDetails from "../components/RelationDetails.jsx";
import Trailer from "../components/Trailer";
import { useState, useEffect } from "react";

function AnimeDetails({ anime }) {
  const [isTrailer, setIsTrailer] = useState(false);

  useEffect(() => {
    if (anime.trailer?.embed_url === null) {
      setIsTrailer(false);
    } else {
      setIsTrailer(true);
    }
  }, [anime.trailer?.embed_url]);

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
      {isTrailer ? (
        <Trailer trailer={anime.trailer?.embed_url}></Trailer>
      ) : null}
    </main>
  );
}

export default AnimeDetails;
