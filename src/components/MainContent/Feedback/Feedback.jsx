import React from "react";
import FeedbackAside from "./FeedbackAside";
import FeedbackForm from "./FeedbackForm";

const Feedback = (props) => {
  return(
    <>
      <div className="Block-2">
        <div className="Main-Container Two">
          <h1>FeedBack</h1>
          <FeedbackForm/>
        </div>
      </div>
      <FeedbackAside/>
    </>
  );
};

export default Feedback;
