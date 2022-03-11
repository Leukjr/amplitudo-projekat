import React from "react";
import MyImage from "../MyImage/MyImage.jsx";
import "./idCard.css";

const IdCard = ({ name, dateOfBirth, city, src }) => {
  return (
    <div className="idCard">
      <div className="text">Name: {name}</div>
      <div className="text">D.o.B: {dateOfBirth}.</div>
      <div className="text">City: {city}</div>
      <div className="imgContainer">
        <MyImage src={src} />
      </div>
    </div>
  );
};

export default IdCard;
