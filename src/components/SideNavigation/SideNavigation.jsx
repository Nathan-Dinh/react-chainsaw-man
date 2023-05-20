import React from "react";
import "./SideNavigation.css";
import Home from "../../image/SideNavigationImage/Home.webp"
import Character from "../../image/SideNavigationImage/Character.webp"
import Video from "../../image/SideNavigationImage/Video.webp"
import Feeback from "../../image/SideNavigationImage/Feedback.webp"

const SideNavigation = () => {
  return (
    <div className="Block-1">
      <nav className="Main-Container One">
        <div className="container">
          <img src={Home} alt="Avatar" className="image" />
          <div className="overlay">
            <a href="../Main/Main.html">
              <div className="text">
                <h4>CLICK!!!</h4>
              </div>
            </a>
          </div>
          <h3>Home</h3>
        </div>
        <div className="container">
          <img
            src={Character}
            alt="Avatar"
            className="image"
          />
          <div className="overlay">
            <a href="../Characters/Character.html">
              <div className="text">
                <h4>CLICK!!!</h4>
              </div>
            </a>
          </div>
          <h3>Character</h3>
        </div>
        <div className="container">
          <img
            src={Video}
            alt="Avatar"
            className="image"
          />
          <div className="overlay">
            <a href="../Video/VideoPage.html">
              <div className="text">
                <h4>CLICK!!!</h4>
              </div>
            </a>
          </div>
          <h3>Video</h3>
        </div>
        <div className="container">
          <img
            src={Feeback}
            alt="Avatar"
            className="image"
          />
          <div className="overlay">
            <a href="../Feedback/Feedback.html">
              <div className="text">
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
