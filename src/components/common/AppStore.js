import React from "react";
import iPhoneImg from "assets/common/i6.png";
import AppStoreBanner from "assets/common/appstore button.png";
import PlayIcon from "assets/common/play.png";
import FacebookIcon from "assets/common/Facebook.png";
import TwitterIcon from "assets/common/Twitter.png";

const AppStore = () => (
  <div className="col-6 color-skyblue">
    <div className="row justify-content-center position-relative">
      <img className="iphone-img" src={iPhoneImg} alt="iphone6"></img>
      <img className="absolute-center" src={PlayIcon} alt="play"></img>
    </div>
    <div className="row justify-content-center mb-4">
      <img src={AppStoreBanner} alt="appstore"></img>
    </div>
    <div className="row">
      <div className="col">
        <img className="float-right" src={FacebookIcon} alt="facebook"></img>
      </div>
      <div className="col">
        <img src={TwitterIcon} alt="twitter"></img>
      </div>
    </div>
  </div>
);

export default AppStore;
