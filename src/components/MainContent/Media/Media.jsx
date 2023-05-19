import React from "react";
import "./Media.css";
import MediaAside from "./MediaAside";

const Media = () => {
  return (
    <>
      <div class="Block-2">
        <div class="Main-Container Two">
          <h2 class="Container-Two Header">TAILER</h2>
          <div class="Container">
            <div class="Video-Container">
              <div class="Video-Wrapper">
                <iframe
                  class="responsive-iframe"
                  src="https://www.youtube.com/embed/l96zmDlWCBk"
                ></iframe>
              </div>
            </div>
            <br />

            <p>
              Watch Chainsaw Man on Crunchyroll!
              <a href="https://got.cr/cc-csmpv">https://got.cr/cc-csmpv</a>
            </p>

            <p>
              Crunchyroll Collection brings you the latest clips, openings, full
              episodes, and more from your favorite anime!
            </p>
            <br />
            <p>
              FREE 14-DAY CRUNCHYROLL TRIAL 🌟
              <a href="https://got.cr/cc-14dayspv">
                https://got.cr/cc-14dayspv
              </a>
            </p>
            <a href="#">#ChainsawMan</a>
            <a href="#">#Anime</a>
            <a href="#">#Crunchyroll</a>
          </div>
        </div>
      </div>
      <MediaAside />
    </>
  );
};

export default Media;
