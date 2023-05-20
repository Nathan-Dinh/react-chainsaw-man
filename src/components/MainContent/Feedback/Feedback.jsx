import React from "react";
import './Feedback.css';
import FeedbackAside from "./FeedbackAside";

const Feedback = (props) => {
  return(
    <>

      <div class="Block-2">
        <div class="Main-Container Two">
          <h1>FeedBack</h1>
          <form action="data.php" method="get">
            <label for="user-name">User Name</label>
            <input
              type="text"
              id="user-name"
              name="user-name"
              autofocus
              tabindex="1"
              value=""
              placeholder="Enter you name here"
              maxlength="10"
              class="form-control"
            />

            <label for="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              tabindex="2"
              value=""
              placeholder="Enter you name here"
              maxlength="10"
              class="form-control"
            />

            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              tabindex="3"
              autocomplete="email"
              placeholder="type email here"
              class="form-control"
            />
            <label for="Character">Favorite Character</label>
            <input
              id="Character"
              name="character"
              list="character"
              tabindex="5"
              class="form-control"
            />

            <label for="page">Page</label>
            <input
              id="page"
              name="website"
              list="website"
              tabindex="5"
              class="form-control"
            />

            <datalist id="character">
              <option value="Denji"></option>
              <option value="Makoto"></option>
              <option value="Arai"></option>
            </datalist>

            <datalist id="website">
              <option value="Video"></option>
              <option value="Home"></option>
              <option value="Character"></option>
              <option value="Feedback"></option>
            </datalist>
            <textarea
              name="commens"
              id="comments"
              cols="50"
              rows="7"
              tabindex="6"
              placeholder="What can I improve..."
            ></textarea>
            <div id="buttons" class="mt-2 text-center">
              <input
                type="submit"
                value="Apply"
                tabindex="8"
                class="btn btn-primary"
              />
              <input
                type="reset"
                value="clear"
                tabindex="9"
                class="btn btn-secondary"
              />
            </div>
          </form>
        </div>
      </div>
      <FeedbackAside/>
    </>
  );
};

export default Feedback;
