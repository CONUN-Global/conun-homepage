import Header from "./Header";
import Intro from "./Intro";
import Architecture from "./Architecture";
import UseCase from "./UseCase";

import styles from "./DSC.module.scss";
import Chart from "./Chart";

function DSC() {
  return (
    <div className={styles.MainContainer}>
      <Header />
      <Intro />
      <Architecture />
      <UseCase />
      <Chart />
    </div>
  );
}
export default DSC;
