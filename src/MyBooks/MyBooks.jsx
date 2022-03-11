import React from "react";
import "./myBooks.css";
import MyImage from "../MyImage/MyImage";

const MyBooks = (props) => {
  return (
    <div className="bookContainer">
      <div className="text">Title: {props.name}</div>
      <div className="text">Year: {props.year}</div>
      <div className="text">Author: {props.writter}</div>
      <div className="imgContainer">
        <MyImage src={props.src} />
      </div>
      <div className="text">Quote: {props.quote}</div>
    </div>
  );
};

export default MyBooks;
