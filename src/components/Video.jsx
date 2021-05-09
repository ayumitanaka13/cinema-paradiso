import React from "react";

const Video = () => {
  return (
    <div className="Video">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/oQHkTCq5e8c?autoplay=1&mute=1&playsinline=1&loop=1&modestbranding=1&playlist=oQHkTCq5e8c"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
