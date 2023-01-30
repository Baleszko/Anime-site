import { useEffect, useState } from "react";
import TopAnimes from "../components/TopAnimes";
import Error from "../components/Error";
import { TailSpin } from "react-loader-spinner";
import Head from "next/head";

function Top() {
  const [topAnimes, setTopAnimes] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const topAnimeFetch = await fetch("https://api.jikan.moe/v4/top/anime");
        if (topAnimeFetch.ok) {
          const jsonTopAnimes = await topAnimeFetch.json();
          setTopAnimes(jsonTopAnimes.data);
          setIsLoading(false);
        }
        if (topAnimeFetch.status >= 400 && topAnimeFetch.status <= 499) {
          setIsError(true);
        }
        if (topAnimeFetch.status >= 500 && topAnimeFetch.status <= 599) {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();
  }, []);

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
    return <TopAnimes top={topAnimes}></TopAnimes>;
  };

  return (
    <>
      <Head>
        <title>Top Animes</title>
      </Head>
      {renderPage()}
    </>
  );
}

export default Top;
