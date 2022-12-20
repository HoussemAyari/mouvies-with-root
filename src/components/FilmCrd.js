import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";

function FilmCrd({film}) {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={film.poster}  height= "400px" />
    <Card.Body>
      <Card.Title>{film.title}</Card.Title>
      <Card.Text>
       {film.decription}
      </Card.Text>
      <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    edit={false}
    value={film.rate}
  />
    </Card.Body>
  </Card>
    </div>
  )
}

export default FilmCrd
