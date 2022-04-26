import styles from "./VideoUpdates.module.scss";
import VideoCarousel from "./VideoCarousel";

function VideoUpdates() {
  return (
    <div className={styles.VideoUpdates}>
      <VideoCarousel />
    </div>
  );
}

export default VideoUpdates;
