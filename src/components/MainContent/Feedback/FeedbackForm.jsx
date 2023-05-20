import React from "react";
import "./FeedbackForm.css";

const FeebackForm = () => {
  const SubmitHandler = (events) => {
    events.preventDefault();
  };

  return (
    <form onSubmit={SubmitHandler} className="Form-template">
      <div className="User-input">
        <label for="user-name">User Name</label>
        <input
          type="text"
          id="user-name"
          name="user-name"
          autofocus
          tabindex="1"
          value=""
          placeholder="Enter your first name"
          maxlength="10"
          className="form-control"
        />
      </div>
      <div className="User-input">
        <label for="user-name">User Name</label>
        <input
          type="text"
          id="user-name"
          name="user-name"
          autofocus
          tabindex="1"
          value=""
          placeholder="Enter your first name"
          maxlength="10"
          className="form-control"
        />
      </div>
      <div className="User-input">
        <label for="user-name">User Name</label>
        <input
          type="text"
          id="user-name"
          name="user-name"
          autofocus
          tabindex="1"
          value=""
          placeholder="Enter your first name"
          maxlength="10"
          className="form-control"
        />
      </div>
      <div className="User-input">
        <label for="user-name">User Name</label>
        <input
          type="text"
          id="user-name"
          name="user-name"
          autofocus
          tabindex="1"
          value=""
          placeholder="Enter your first name"
          maxlength="10"
          className="form-control"
        />
      </div>
      <textarea
        name="commens"
        id="comments"
        cols="50"
        rows="7"
        tabindex="6"
        placeholder="What can I improve..."
      ></textarea>
      <div id="buttons" className="mt-2 text-center">
        <input
          type="submit"
          value="Apply"
          tabindex="8"
          className="btn btn-primary"
        />
        <input
          type="reset"
          value="clear"
          tabindex="9"
          className="btn btn-secondary"
        />
      </div>
    </form>
  );
};

export default FeebackForm;
