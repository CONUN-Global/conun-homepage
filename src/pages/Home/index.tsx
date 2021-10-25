import Main from "./Main";
import AboutIntro from "./About/AboutIntro";
import AboutCardsSection from "./About/AboutCardsSection";
import VideoSection from "./About/VideoSection";
import Product from "./About/Product";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.Home}>
      <Main />
      <AboutIntro />
      <AboutCardsSection />
      <VideoSection />
      <Product />
    </div>
  );
}

export default Home;
