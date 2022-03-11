import React from "react";
import "./MyImage.css";

const MyImage = ({ src }) => {
  return <img className="img" src={src} alt="test" />;
};

export default MyImage;
