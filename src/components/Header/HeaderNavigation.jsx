import React from "react";
import './HeaderNavigation.css'

const HeaderNavigation = (props) => {
  const onClickHandler = (event) => {
    props.findMode(event)
  };

  return (
    <nav className="Nav-1">
      <div className="dropdown">
        <a onClick={onClickHandler}>Home</a>
        <div className="dropdown-content">
          <a onClick={onClickHandler}>Page 1</a>
          <a onClick={onClickHandler}>Page 2</a>
        </div>
      </div>
      <div className="dropdown">
        <a onClick={onClickHandler}>Characters</a>
      </div>
      <div className="dropdown">
        <a onClick={onClickHandler}>Video</a>
      </div>
      <div className="dropdown">
        <a onClick={onClickHandler}>FeedBack</a>
      </div>
    </nav>
  );
};

export default HeaderNavigation;
