import React from "react";
import FilmCrd from "./FilmCrd";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
function Home({films, Rate, search, searchForFilm, starSearch, setRate, addFilm}) {
  return (
    <div>
      <Searchbar searchForFilm={searchForFilm} starSearch={starSearch} setRate={setRate}  addFilm={addFilm}/>
      <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "900px",
        flexWrap: "wrap",
        justifyContent: "space-around",
        margin: "auto",
      }}
    >
      {films.film
        .filter((elt) => elt.title.toUpperCase().includes(search.toUpperCase()) && elt.rate>=Rate)
        .map((elt) => (
          <Link to={`/details/${elt.id}`}>
        <FilmCrd key={elt.id} film={elt}  />
              </Link>

        ))}
        
    </div>
    </div>
  );
}

export default Home;
