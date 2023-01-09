import { useEffect, useState } from "react";
import Header from "../components/Header";
import TopAnimes from "../components/TopAnimes";
import Error from "../components/Error";

function Top() {
  const [topAnimes, setTopAnimes] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topAnimeFetch = await fetch("https://api.jikan.moe/v4/top/anime");
        const jsonTopAnimes = await topAnimeFetch.json();
        setTopAnimes(jsonTopAnimes.data);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="top_container">
      <Header></Header>
      {isError ? <Error></Error> : <TopAnimes top={topAnimes}></TopAnimes>}
    </div>
  );
}

export default Top;
