import React from "react";
import iphone from "../../assets/common/i6.png";
import appstore from "../../assets/common/appstore button.png";
import play from "../../assets/common/play.png";
import fb from "../../assets/common/Facebook.png";
import tw from "../../assets/common/Twitter.png";
import "./AppStore.scss";

const AppStore = () => (
  <div className="col-6 color-skyblue">
    <div className="row justify-content-center mb-n80p">
      <img className="pt-80p" src={iphone} alt="iphone6"></img>
      <img className="play-button" src={play} alt="play"></img>
    </div>
    <div className="row justify-content-center mb-4">
      <img src={appstore} alt="appstore"></img>
    </div>
    <div className="row">
      <div className="col">
        <img className="float-right" src={fb} alt="facebook"></img>
      </div>
      <div className="col">
        <img src={tw} alt="twitter"></img>
      </div>
    </div>
  </div>
);

export default AppStore;
