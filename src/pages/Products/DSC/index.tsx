import Header from "./Header";
import Intro from "./Intro";
import Body from "./Body";
import Architecture from "./Architecture";
import UseCase from "./UseCase";

import styles from "./DSC.module.scss";

function DSC() {
  return (
    <div className={styles.MainContainer}>
      <Header />
      <Intro />
      <Body />
      <Architecture />
      <UseCase />
    </div>
  );
}
export default DSC;
