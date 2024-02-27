/* eslint-disable react/prop-types */

import Player from "./Player";
import VideoItem from "./VideoItem";

/* eslint-disable no-unused-vars */
const VideoContainer = ({ state, selectedVideo, handleClick }) => {
  return (
    <section id="videoBlock">
      <article>
        <aside className="left">
          <Player selectedVideo={selectedVideo} />
        </aside>
        <aside className="right">
          {state.map((video) => {
            return <VideoItem key={video.id} video={video} handleClick={handleClick}/>;
          })}
        </aside>
      </article>
    </section>
  );
};

export default VideoContainer;
