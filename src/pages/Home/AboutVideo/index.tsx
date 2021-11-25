import VideoPlayer from "@/components/VideoPlayer";

import styles from "./AboutVideo.module.scss";

function AboutVideo() {
  return (
    <div className={styles.VideoPage}>
      <div className={styles.VideoContainer}>
        <VideoPlayer url={"https://youtu.be/pwkrE2mpIiA"} />
      </div>
    </div>
  );
}
export default AboutVideo;
