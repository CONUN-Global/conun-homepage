import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  url: string;
}

function VideoPlayer({ url }: VideoPlayerProps) {
  return <ReactPlayer url={url} width="100%" height="100%" controls={true} />;
}
export default VideoPlayer;
