import React from "react";
import FeedbackAside from "./FeedbackAside";
import FeedbackForm from "./FeedbackForm";

const Feedback = (props) => {
  return(
    <>
      <div class="Block-2">
        <div class="Main-Container Two">
          <h1>FeedBack</h1>
          <FeedbackForm/>
        </div>
      </div>
      <FeedbackAside/>
    </>
  );
};

export default Feedback;
