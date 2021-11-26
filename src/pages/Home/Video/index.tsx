import VideoPlayer from "@/components/VideoPlayer";

import styles from "./Video.module.scss";

function Video() {
  return (
    <div className={styles.VideoPage}>
      <div className={styles.VideoContainer}>
        <VideoPlayer url={"https://youtu.be/pwkrE2mpIiA"} />
      </div>
    </div>
  );
}
export default Video;
