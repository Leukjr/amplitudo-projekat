import React from "react";
import "./movies.css";
import MyImage from "../MyImage/MyImage";

const Movies = (props) => {
  return (
    <div className="movie">
      <div className="text">Title: {props.name}</div>
      <div className="text">Year: {props.year}</div>
      <div className="text">Genre: {props.type.join(", ")}</div>
      <div className="text">Director: {props.director}</div>
      <div className="text">Actors: {props.actors.join(", ")}</div>
      <div className="imgContainer">
        <MyImage src={props.src} />
      </div>
    </div>
  );
};

export default Movies;
