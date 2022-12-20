import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import FilmCrd from "./FilmCrd";
function Details({ films }) {
 
  const { id } = useParams();
  const foundFilm = films.film.find((elt) => elt.id == id);

  return (
    <>
      <div>
      {foundFilm.title}
      
      
      </div>;
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </>
  );
}

export default Details;
