import React from "react";
import "./MainCard";

const Card = (props) => {
  return <main className="Main">{props.children}</main>;
};

export default Card;
