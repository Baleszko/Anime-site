import SearchByNameCard from "../components/SearchByNameCard.jsx";

function SearchByName({ anime }) {
  return (
    <div>
      {anime.map((item) => (
        <SearchByNameCard
          key={item.mal_id}
          anime={item}
          id={item.mal_id}
        ></SearchByNameCard>
      ))}
    </div>
  );
}

export default SearchByName;
