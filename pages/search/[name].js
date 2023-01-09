import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Error from "../../components/Error";
import style from "../../styles/animeSearch.module.css";
import SearchByName from "../../components/SearchByName";

function Search() {
  const router = useRouter();
  const { name } = router.query;
  const [anime, setAnime] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!name) {
      return;
    }
    const animeFetch = async () => {
      try {
        const animeFetchName = await fetch(
          `https://api.jikan.moe/v4/anime?q=${name}`
        );
        const jsonAnimeFetchName = await animeFetchName.json();
        setAnime(jsonAnimeFetchName.data);
      } catch (error) {
        setIsError(true);
      }
    };

    animeFetch();
  }, [name]);

  return (
    <div className={style.container}>
      <Header></Header>
      {isError ? <Error></Error> : <SearchByName anime={anime}></SearchByName>}
    </div>
  );
}

export default Search;
