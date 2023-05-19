import React from "react";
import "./Characters.css"
import CharacterAside from "./CharactersAside";

const Characters = () => {
  return (
    <>
      <div class="Block-2">
        <div class="Main-Container Two">
          <header class="Main-Top-Header">
            <h1>Public Safety Devil Hunter</h1>
          </header>
          <div class="Main-Text">
            <div class="Character-Card zoom">
              <header>
                <img src="../../Image/Characters/Kishibe.webp" alt="#" />
              </header>
              <div>
                <h3>Captain Kishibe</h3>
              </div>
            </div>
            <div class="Character-Card zoom">
              <header>
                <img src="../../Image/Characters/Aki_Hayakawa.webp" alt="#" />
              </header>
              <div>
                <h3>Aki Hayakawa</h3>
              </div>
            </div>
            <div class="Character-Card zoom">
              <header>
                <img src="../../Image/Characters/Power.webp" alt="#" />
              </header>
              <div>
                <h3>Power</h3>
              </div>
            </div>
            <div class="Character-Card zoom">
              <header>
                <img src="../../Image/Characters/Denji.webp" alt="#" />
              </header>
              <div>
                <h3>Denji</h3>
              </div>
            </div>
            <div class="Character-Card zoom">
              <header>
                <img src="../../Image/Characters/Shark_Fiend.webp" alt="#" />
              </header>
              <div>
                <h3>Princi</h3>
              </div>
            </div>
            <div class="Character-Card zoom">
              <header>
                <img src="../../Image/Characters/Angel_Devil.webp" alt="#" />
              </header>
              <div>
                <h3>Angel</h3>
              </div>
            </div>
            <div class="Character-Card zoom">
              <header>
                <img src="../../Image/Characters/Himeno.webp" alt="#" />
              </header>
              <div>
                <h3>Himeno</h3>
              </div>
            </div>
            <div class="Character-Card zoom">
              <header>
                <img src="../../Image/Characters/Fushi.webp" alt="#" />
              </header>
              <div>
                <h3>Fushi</h3>
              </div>
            </div>
            <div class="Character-Card zoom">
              <header>
                <img src="../../Image/Characters/Madoka.webp" alt="#" />
              </header>
              <div>
                <h3>Madoka</h3>
              </div>
            </div>
            <div class="Character-Card zoom">
              <header>
                <img src="../../Image/Characters/Violence_Fiend.webp" alt="#" />
              </header>
              <div>
                <h3>Hirokazu Arai</h3>
              </div>
            </div>

            <div class="Character-Card zoom">
              <header>
                <img src="../../Image/Characters/Spider_Devil.webp" alt="#" />
              </header>
              <div>
                <h3>Galgali</h3>
              </div>
            </div>
            <div class="Character-Card zoom">
              <header>
                <img src="../../Image/Characters/Kobeni.webp" alt="#" />
              </header>
              <div>
                <h3>Kobeni Higashiyama</h3>
              </div>
            </div>
            <div class="Character-Card zoom">
              <header>
                <img src="../../Image/Characters/Arai.webp" alt="#" />
              </header>
              <div>
                <h3>Beam</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CharacterAside/>
    </>
  );
};

export default Characters;
