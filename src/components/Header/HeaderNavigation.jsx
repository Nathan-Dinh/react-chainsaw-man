import React from "react";
import './HeaderNavigation.css'

const HeaderNavigation = (props) => {
  const onClickHandler = (event) => {
    props.findMode(event)
  };

  return (
    <nav class="Nav-1">
      <div class="dropdown">
        <a onClick={onClickHandler}>Home</a>
        <div class="dropdown-content">
          <a onClick={onClickHandler}>Page 1</a>
          <a onClick={onClickHandler}>Page 2</a>
        </div>
      </div>
      <div class="dropdown">
        <a onClick={onClickHandler}>Characters</a>
      </div>
      <div class="dropdown">
        <a onClick={onClickHandler}>Video</a>
      </div>
      <div class="dropdown">
        <a onClick={onClickHandler}>FeedBack</a>
      </div>
    </nav>
  );
};

export default HeaderNavigation;
