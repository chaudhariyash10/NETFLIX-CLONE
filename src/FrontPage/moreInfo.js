import React from "react";
import KidsSection from "./MoreInfo/kids";
import TVSection from "./MoreInfo/tv-section";
import DownloadShows from "./MoreInfo/download-shows";
import WatchEverywhere from "./MoreInfo/WatchEverywhere";
import FAQs from "./MoreInfo/FAQs";
import FormComponent from "./form";
import WhiteMargin from "./whiteMargin";
class MoreInfo extends React.Component {
  render() {
    return (
      <div>
        <KidsSection />
        <WhiteMargin />
        <TVSection />
        <WhiteMargin />
        <DownloadShows />
        <WhiteMargin />
        <WatchEverywhere />
        <WhiteMargin />
        <FAQs />
        <FormComponent/>
        <WhiteMargin/>
      </div>
    );
  }
}

export default MoreInfo;
