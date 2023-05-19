import React from "react";

const FeedbackAside = () => {
  return (
    <div class="Block-3">
        <aside class="Main-Container Three">
          <h2>Give us some additional Feedback</h2>

          <div>
            <input id="Fun" name="Fun" type="checkbox" />
            <label for="Fun">Fun to vist</label>
          </div>

          <div>
            <input id="checkbox" name="checkbox" type="checkbox" />
            <label for="checkbox">Well designed</label>
          </div>

          <div>
            <input id="color" name="color" type="checkbox" />
            <label for="color">Used good colors</label>
          </div>

          <div>
            <input id="very" name="very" type="checkbox" />
            <label for="very">Ver informative</label>
          </div>

          <div>
            <h2>Will you visit this site again?</h2>
            <input id="no" name="radio" type="radio" />
            <label for="no"> - Yes</label>

            <input id="Yes" name="radio" type="radio" />
            <label for="Yes"> - No</label>
          </div>
        </aside>
      </div>
  );
};

export default FeedbackAside
