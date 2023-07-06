import React from "react";
import idleLogo from "../../assets/idle-logo.gif";
import appStoreIcon from "../../assets/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg";
import ReuBeenHeader from "./ReuBeenHeader";
import Feed from "../../assets/demo-images/Feed.png";
import FriendRequests from "../../assets/demo-images/FriendRequests.png";
import Comments from "../../assets/demo-images/Comments.png";
import Type from "../../assets/demo-images/Type.png";
import UserRecord from "../../assets/demo-images/UserRecord.png";
import playStoreLogo from '../../assets/google-play-badge.png'
import Landing from "../../assets/demo-images/Landing.png";
import LogDetails from "../../assets/demo-images/LogDetails.png";
import Location from "../../assets/demo-images/Location.png";


const ReubeenMain = () => {
  const images = [
    UserRecord,
    LogDetails,
    Location,
    Type,
    Feed,
    Comments,
    FriendRequests,
    Landing
  ];

  function Slideshow(delay, images) {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );

      return () => {
        resetTimeout();
      };
    }, [index]);

    return (
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((image, index) => (
            <img className="slide" key={index} src={image}></img>
          ))}
        </div>

        {/* <div className="slideshowDots">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div> */}
      </div>
    );
  }

  return (
    <>
      <ReuBeenHeader />
      <div className="reubeen-background">
        <div
          className="reubeen-half"
          style={{
            justifyContent: "space-evenly",
            height: "70vh",
            marginTop: "4%",
          }}
        >
          <div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center', width: '100%'}}>

            <img src={idleLogo} className="idle-logo"></img>
            </div>
            <p
              style={{
                textAlign: "center",
                color: "#8ed3ff",
                fontSize: 50,
                margin: 0,
                fontWeight: "800",
              }}
            >
              ReuBeen
            </p>
            <p className='text-large' style={{ textAlign: "center", color: "#c2e6fc" }}>
              The Social Sandwich App
            </p>
          </div>
          <div style={{}}>
            <p className='text-med' style={{ textAlign: "center", color: "#c2e6fc" }}>
              Rate and share your sandwich creations and discoveries
            </p>
            <p className='text-med' style={{ textAlign: "center", color: "#c2e6fc" }}>
              Connect with like-minded sandwich enthusiasts
            </p>
            <p className='text-med' style={{ textAlign: "center", color: "#c2e6fc" }}>
              Become a part of the sandwich community
            </p>
          </div>
          <div className='button-container'>
            <a href="https://apps.apple.com/us/app/reubeen/id6443568550" className='link'>
              <img className='apple' src={appStoreIcon}></img>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.delangedev.reubeen&hl=en&gl=US" className='link' >
              <img className='google' src={playStoreLogo} ></img>
            </a>
          </div>
        </div>
        <div className="reubeen-half slideshow-container">{Slideshow(10000, images)}</div>
      </div>
      <div
        style={{
          backgroundColor: "#0d1317",
          height: "5vh",
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <p style={{ margin: 0, padding: 0, color: "#c2e6fc" }}>
          © 2023 dbdruid. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default ReubeenMain;
