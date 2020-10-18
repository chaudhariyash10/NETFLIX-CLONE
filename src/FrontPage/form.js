import React from "react";

class FormComponent extends React.Component {
  render() {
    return (
      <form action="" className = "wrapper">
        <div className="input-box">
           <h5>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h5>
          <input
            type="email"
            placeholder="Email address"
            className="email-input"
            required
          />
         
          <button
            type="button"
            className="text-uppercase button-primary get-started-button"
          >
            <span>
              get started
              <img src="../../icons/chevron_right_white_54x54.png" alt="" />
            </span>
          </button>
        </div>
      </form>
    );
  }
}

export default FormComponent;