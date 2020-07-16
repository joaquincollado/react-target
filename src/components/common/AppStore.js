import React from "react";
import iPhoneImg from "assets/common/i6.png";
import AppStoreBanner from "assets/common/appstore button.png";
import PlayIcon from "assets/common/play.png";
import FacebookIcon from "assets/common/Facebook.png";
import TwitterIcon from "assets/common/Twitter.png";

const AppStore = () => (
  <div className="col-xs-6 color-skyblue padding-bottom display-none--mobile">
    <div className="row justify-content-center position-relative">
      <img className="iphone-img" src={iPhoneImg} alt="iphone6"></img>
      <img className="absolute-center" src={PlayIcon} alt="play"></img>
    </div>
    <div className="row justify-content-center mb-4">
      <img className="icon-app-store" src={AppStoreBanner} alt="appstore"></img>
    </div>
    <div className="row justify-content-center">
      <img className="icon-left" src={FacebookIcon} alt="facebook"></img>
      <img className="icon-right" src={TwitterIcon} alt="twitter"></img>
    </div>
  </div>
);

export default AppStore;
