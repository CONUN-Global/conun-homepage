import Main from "./Main";
import About from "./About";

import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.Home}>
      <Main />
      <About />
    </div>
  );
}

export default Home;
