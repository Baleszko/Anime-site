import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Error from "../../components/Error";
import style from "../../styles/animeId.module.css";
import AnimeDetails from "../../components/AnimeDetails";
import { TailSpin } from "react-loader-spinner";

function Anime() {
  const router = useRouter();
  const { id } = router.query;
  const [anime, setAnime] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    const animeFetch = async () => {
      try {
        setisLoading(true);
        const animeFetchId = await fetch(
          `https://api.jikan.moe/v4/anime/${id}/full`
        );
        if (animeFetchId.ok) {
          const jsonAnimeFetchId = await animeFetchId.json();
          setAnime(jsonAnimeFetchId.data);
          setisLoading(false);
        }
        if (animeFetchId.status >= 400 && animeFetchId.status <= 499) {
          setIsError(true);
        }
        if (animeFetchId.status >= 500 && animeFetchId.status <= 599) {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
      }
    };

    animeFetch();
  }, [id]);

  const renderPage = () => {
    if (isError) {
      return <Error></Error>;
    }
    if (isLoading) {
      return (
        <TailSpin
          height="100"
          width="100"
          color="#ff8e3c"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperClass="loader"
          visible={true}
        />
      );
    }
    return <AnimeDetails anime={anime}></AnimeDetails>;
  };

  return <div className={style.container}>{renderPage()}</div>;
}

export default Anime;
