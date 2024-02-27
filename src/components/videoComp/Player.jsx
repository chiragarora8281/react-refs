import { useRef, useState } from "react"

/* eslint-disable react/prop-types */
const Player = ({selectedVideo}) => {
  let [toggle, setToggle] = useState(true);
  let VideoRef = useRef();

  let handleVideoControls = () => {
    if(toggle === true){
      VideoRef.current.play();
      VideoRef.current.autoPlay === true;
    }else{
      VideoRef.current.pause();
    }
    setToggle(!toggle)
  }
  return (
    <div>
        {/* <video src={selectedVideo} ref={VideoRef} onClick={handleVideoControls} autoPlay></video> */}
        <video src={selectedVideo} controls autoPlay></video>
        {/* <iframe
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/xR3V5Ow2dTI?si=X16gnprtIY8Q-30u"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
    </div>
  )
}

export default Player