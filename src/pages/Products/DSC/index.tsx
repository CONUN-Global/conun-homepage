import Header from "./Header";
import Intro from "./Intro";
import Body from "./Body";

import styles from "./DSC.module.scss";

function DSC() {
  return (
    <div className={styles.MainContainer}>
      <Header />
      <Intro />
      <Body />
    </div>
  );
}
export default DSC;
