import React from "react";
import "./SideNavigation.css";

const SideNavigation = () => {
  const IMPORT_ALL = (req) => {
    let images = {};
    req.keys().map((item) => {
      images[item.replace("./", "")] = req(item);
    });
    return images;
  };

  const IMAGES = IMPORT_ALL(
    require.context("../../image/SideNavigationImage", false, /\.(webp)$/)
  );

  console.log(IMAGES)
  return (
    <div class="Block-1">
      <nav class="Main-Container One">
        <div class="container">
          <img src="" alt="Avatar" class="image" />
          <div class="overlay">
            <a href="../Main/Main.html">
              <div class="text">
                <h4>CLICK!!!</h4>
              </div>
            </a>
          </div>
          <h3>Home</h3>
        </div>

        <div class="container">
          <img
            src="../../Image/Container2Images/Feedback.webp"
            alt="Avatar"
            class="image"
          />
          <div class="overlay">
            <a href="../Characters/Character.html">
              <div class="text">
                <h4>CLICK!!!</h4>
              </div>
            </a>
          </div>
          <h3>Character</h3>
        </div>
        <div class="container">
          <img
            src="../../Image/Container2Images/Volume_03.webp"
            alt="Avatar"
            class="image"
          />
          <div class="overlay">
            <a href="../Video/VideoPage.html">
              <div class="text">
                <h4>CLICK!!!</h4>
              </div>
            </a>
          </div>
          <h3>Video</h3>
        </div>

        <div class="container">
          <img
            src="../../Image/Container2Images/Character.webp"
            alt="Avatar"
            class="image"
          />
          <div class="overlay">
            <a href="../Feedback/Feedback.html">
              <div class="text">
                <h4>CLICK!!!</h4>
              </div>
            </a>
          </div>
          <h3>Feedback</h3>
        </div>
      </nav>
    </div>
  );
};

export default SideNavigation;
