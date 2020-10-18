import React from "react";

class WatchEverywhere extends React.Component{
    render() {
        return (
          <div className="watch-everywhere">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-18">
                <div className="more-info-titles">
                  <h1 className="h1 text-color">Watch everywhere.</h1>
                  <h3 className="h3 text-color">
                    Stream unlimited movies and TV shows on your phone, tablet,
                    laptop, and TV.
                  </h3>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-18">
                <img
                  src={require("../../../img/device-pile-in.png")}
                  alt=""
                  className="watch-everywhere-img"
                />
              </div>
            </div>
          </div>
        );
    }
}

export default WatchEverywhere;