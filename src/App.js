import React from "react";
import PropTypes from "prop-types";

function Food({name, picture, rating}) {
  return (
  <div>
    <h2>I Like {name}</h2>
    <h4>{picture}</h4>
    <p>{rating}</p>
  </div>)

}

const foodILike = [
  {
    id:1,
    name: "김치",
    picture: "김치 사진",
    rating: 4.2
  },
  {
    id:2,
    name: "김치전",
    picture: "김치전 사진",
    rating: 4.2
  },
  {
    id:3,
    name: "김",
    picture: "김 사진",
    rating: 4.2
  },
  {
    id:4,
    name: "김치국수",
    picture: "김치국수 사진",
    rating: 4.2
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
  <div className="App">
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.picture} rating={dish.rating}/>
      ))}
  </div>
  );
}

export default App;
