import React from "react";

class DownloadShows extends React.Component {
  render() {
    return (
      <div className="download-shows">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-18">
            <img
              src={require("../../../img/Download.jpg")}
              alt=""
              className="download-shows-img"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-18">
            <div className="more-info-titles">
              <h1 className="h1 text-color">
                Download your shows to watch offline.
              </h1>
              <h3 className="h3 text-color">
                Save your favourites easily and always have
              </h3>
              <h3 className="h3 text-color">something to watch.</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DownloadShows;
