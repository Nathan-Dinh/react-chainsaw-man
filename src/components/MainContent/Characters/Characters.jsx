import React from "react";
import "./Characters.css"
import CharacterAside from "./CharactersAside";
import CharacterCards from "./CharacterCards";
import IMAGES from "../../../image/CharactersImage.js";

const Characters = () => {
  return (
    <>
      <div class="Block-2">
        <div class="Main-Container Two">
          <header class="Main-Top-Header">
            <h1>Public Safety Devil Hunter</h1>
          </header>
          <div class="Main-Text">
            <CharacterCards characters={IMAGES}/>
          </div>
        </div>
      </div>
      <CharacterAside/>
    </>
  );
};

export default Characters;
