import React, { useEffect, useState } from "react";
import IMAGES from "../../../image/CharactersImage.js";

const CharacterCards = (props) => {
  return (
    <>
      {props.characters.map((character) => {
        return (
          <div className="Character-Card zoom">
            <header>
              <img src={character.image} alt="#" />
            </header>
            <div>
              <h3>{character.name}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CharacterCards;
