import React from "react";
import idleLogo from "../../assets/idle-logo.gif";
import appStoreIcon from "../../assets/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg";
import ReuBeenHeader from "./ReuBeenHeader";
import Comments from "../../assets/demo-images/Comments.png";
import Feed from "../../assets/demo-images/Feed.png";
import FriendRequests from "../../assets/demo-images/FriendRequests.png";
import FriendsList from "../../assets/demo-images/FriendsList.png";
import Location from "../../assets/demo-images/Location.png";
import LogDetails from "../../assets/demo-images/LogDetails.png";
import Type from "../../assets/demo-images/Type.png";
import UserRecord from "../../assets/demo-images/UserRecord.png";

const ReubeenMain = () => {
  const images = [
    UserRecord,
    Type,
    Location,
    Feed,
    LogDetails,
    Comments,
    FriendRequests,
    FriendsList,
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
            <img src={idleLogo} className="idle-logo"></img>
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
            <p style={{ textAlign: "center", color: "#c2e6fc", fontSize: 23 }}>
              The Social Sandwich App
            </p>
          </div>
          <div style={{}}>
            <p style={{ textAlign: "center", color: "#c2e6fc", fontSize: 20 }}>
              Rate and share your sandwich creations and discoveries
            </p>
            <p style={{ textAlign: "center", color: "#c2e6fc", fontSize: 20 }}>
              Connect with like-minded sandwich enthusiasts
            </p>
            <p style={{ textAlign: "center", color: "#c2e6fc", fontSize: 20 }}>
              Become a part of the sandwich community
            </p>
          </div>
          <div>
            <a href="https://apps.apple.com/us/app/reubeen/id6443568550">
              <img src={appStoreIcon}></img>
            </a>
          </div>
        </div>
        <div className="reubeen-half">{Slideshow(10000, images)}</div>
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
