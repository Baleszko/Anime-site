import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Error from "../../components/Error";
import style from "../../styles/animeId.module.css";
import AnimeDetails from "../../components/AnimeDetails";

function Anime() {
  const router = useRouter();
  const { id } = router.query;
  const [anime, setAnime] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    const animeFetch = async () => {
      try {
        const animeFetchId = await fetch(
          `https://api.jikan.moe/v4/anime/${id}/full`
        );
        const jsonAnimeFetchId = await animeFetchId.json();
        setAnime(jsonAnimeFetchId.data);
      } catch (error) {
        setIsError(true);
      }
    };

    animeFetch();
  }, [id]);

  return (
    <div className={style.container}>
      {/* <Header></Header> */}
      {isError ? <Error></Error> : <AnimeDetails anime={anime}></AnimeDetails>}
    </div>
  );
}

export default Anime;
