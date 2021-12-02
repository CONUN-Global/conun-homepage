import Main from "./Main";
import Intro from "./Intro";
import Business from "./Business";
import Video from "./Video";
import Product from "./Product";
import RoadMap from "./RoadMapSection";
import ConunNews from "./ConunNews";
import Footer from "./Footer";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.Home}>
      <Main />
      <Intro />
      <Business />
      <Video />
      <Product />
      <RoadMap />
      <ConunNews />
      <Footer />
    </div>
  );
}

export default Home;
