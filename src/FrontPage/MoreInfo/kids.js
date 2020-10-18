import React from "react";

class KidsSection extends React.Component {
  render() {
    return (
      <div className="kids-profile">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-18">
            <img
              className="kids-img"
              src={require("../../../img/Kids-Profile.jpg")}
              alt="Kids Profile"
            />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-18">
            <div className="more-info-titles">
              <h1 className="h1 text-color">Create profiles for kids.</h1>
              <h3 className="h3 text-color">
                Send kids on adventures with their favourite
              </h3>
              <h3 className="h3 text-color">
                characters in a space made just for them—
              </h3>
              <h3 className="h3 text-color">free with your membership.</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KidsSection;
