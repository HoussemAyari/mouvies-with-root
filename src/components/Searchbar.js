import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ReactStars from "react-rating-stars-component";
import AddFilm from "./AddFilm";
import "./List.css";

function Searchbar({ searchForFilm, starSearch, setRate, addFilm }) {
  const handleChange = (e) => {
    searchForFilm(e.target.value);
  };
  const startChange = (e) => {
    starSearch(e.target.value);
  };
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <Form className="st">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleChange}
        />
        
      </Form>
      <ReactStars
        count={5}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
        onChange={ratingChanged}
      />
      <div className="styleAdd">
        <AddFilm addFilm={addFilm} />
      </div>
    </div>
  );
}

export default Searchbar;
