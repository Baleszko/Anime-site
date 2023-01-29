import SearchByNameCard from "../components/SearchByNameCard.jsx";

function SearchByName({ anime }) {
  return (
    <>
      {anime.map((item) => (
        <SearchByNameCard key={item.mal_id} anime={item}></SearchByNameCard>
      ))}
    </>
  );
}

export default SearchByName;
