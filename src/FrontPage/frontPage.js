import React from "react";
import LandingPage from "./landingPage";
import MoreInfo from "./moreInfo";
import WhiteMargin from "./whiteMargin";
class Main extends React.Component {
  render() {
    return (
      <div>
        <LandingPage />
        <WhiteMargin />
        <div className="more-info">
          <MoreInfo />
        </div>
        
      </div>
    );
  }
}

export default Main;
