import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Error from "../../components/Error";
import style from "../../styles/animeSearch.module.css";
import SearchByName from "../../components/SearchByName";
import { TailSpin } from "react-loader-spinner";
import CantFind from "../../components/CantFind";

function Search() {
  const router = useRouter();
  const { name } = router.query;
  const [anime, setAnime] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (!name) {
      return;
    }
    const animeFetch = async () => {
      try {
        setIsLoading(true);
        const animeFetchName = await fetch(
          `https://api.jikan.moe/v4/anime?q=${name}`
        );
        if (animeFetchName.ok) {
          const jsonAnimeFetchName = await animeFetchName.json();
          setAnime(jsonAnimeFetchName.data);
          if (Object.keys(jsonAnimeFetchName.data).length === 0) {
            setIsEmpty(true);
          } else {
            setIsEmpty(false);
          }
          setIsLoading(false);
        }
        if (animeFetchName.status >= 400 && animeFetchName.status <= 499) {
          setIsError(true);
        }
        if (animeFetchName.status >= 500 && animeFetchName.status <= 599) {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
      }
    };

    animeFetch();
  }, [name]);

  const renderPage = () => {
    if (isError) {
      return <Error></Error>;
    }
    if (isEmpty) {
      return <CantFind></CantFind>;
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
    return <SearchByName anime={anime}></SearchByName>;
  };

  return <div className={style.container}>{renderPage()}</div>;
}

export default Search;
