import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  url: string;
}

function VideoPlayer({ url }: VideoPlayerProps) {
  return (
    <ReactPlayer
      style={{ position: "absolute", top: 0, bottom: 0 }}
      url={url}
      width="100%"
      height="100%"
      controls={false}
    />
  );
}
export default VideoPlayer;
