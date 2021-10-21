import styles from "./VideoSection.module.scss";
function VideoSection() {
  return (
    <div className={styles.VideoContainer}>
      <video
        src={"https://youtu.be/pwkrE2mpIiA"}
        width="750"
        height="500"
        controls
      ></video>
    </div>
  );
}
export default VideoSection;
