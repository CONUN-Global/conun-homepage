import Header from "./Header";
import Intro from "./Intro";
import Architecture from "./Architecture";
import UseCase from "./UseCase";

import styles from "./DSC.module.scss";

function DSC() {
  return (
    <div className={styles.MainContainer}>
      <Header />
      <Intro />
      <Architecture />
      <UseCase />
    </div>
  );
}
export default DSC;
