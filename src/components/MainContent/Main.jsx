import React from "react";
import './Main.css'
import InformationOne from "./Information/InformationOne";
import InformationTwo from "./Information/InformationTwo";
import InformationThree from "./Information/InformationThree";
import Characters from "./Characters/Characters";
import Feedback from "./Feedback/Feedback";
import Video from "./Media/Media";

const Main = (props) => {
  if (props.mode === "Home") {
    return <InformationOne/>;
  } else if (props.mode === "Characters") {
    return <Characters />;
  } else if (props.mode === "Video") {
    return <Video />;
  } else if (props.mode === "FeedBack") {
    return <Feedback />;
  } else if (props.mode === "Page 1") {
    return <InformationTwo />;
  } else if (props.mode === "Page 2") {
return <InformationThree />;
  }
};

export default Main;
