import React from 'react';

class TVSection extends React.Component{
    render()
    {
        return (
          <div className="tv-section">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-18">
                <div className="more-info-titles">
                  <h1 className="h1 text-color">Enjoy on your TV.</h1>
                  <h3 className="h3 text-color">
                    Watch on smart TVs, PlayStation, Xbox,
                  </h3>
                  <h3 className="h3 text-color">
                    Chromecast, Apple TV, Blu-ray players and
                  </h3>
                  <h3 className="h3 text-color">more.</h3>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-18">
                <img src={require("../../../img/tv.png")} alt="TV" className="tv" />
              </div>
            </div>
          </div>
        );
    }
}

export default TVSection;