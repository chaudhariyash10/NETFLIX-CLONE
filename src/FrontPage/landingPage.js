import React from "react";
import FormComponent from "./form";
class LandingPage extends React.Component {
  render() {
    return (
      <section className="landing-area" id="landing-area">
        <div className="landing-content">
          <div className="row">
            <div className="col-lg-6 col-md-12" id="main-logo">
              <img
                src={require("../../img/main-logo.png")}
                alt="main-logo"
                className="main-logo"
              />
            </div>
            <div className="col-lg-6 col-md-12 button-1">
              <button className="btn btn-default button-primary float-right">
                Sign In
              </button>
            </div>
          </div>
          <div className="landing-titles text-color justify-content-center">
            <div className="titles">
              <h1>Unlimited movies, TV</h1>
              <h1>shows and more.</h1>
              <h3>Watch anywhere. Cancel anytime.</h3>
            </div>

            <FormComponent />
          </div>
          <div className="inset-border"></div>
          <div className="background-image">
            <img
              src={require("../../img/Netflix-Background.jpg")}
              alt=""
              className="image"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default LandingPage;
