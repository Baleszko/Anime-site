import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";

function Anime() {
  const router = useRouter();
  const { id } = router.query;
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    if (!id) {
      return;
    }
    const animeFetch = async () => {
      const animeFetchId = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      const jsonAnimeFetchId = await animeFetchId.json();
      setAnime(jsonAnimeFetchId.data);
    };

    animeFetch();
  }, [id]);
  return (
    <>
      <Header></Header>
      <p>{anime.mal_id}</p>
    </>
  );
}

export default Anime;
