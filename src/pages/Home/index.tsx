import Main from "./Main";
import AboutIntro from "./About/AboutIntro";
import VideoSection from "./About/VideoSection";
import UseCaseSection from "./About/UseCaseSection";
import Product from "./About/Product";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.Home}>
      <Main />
      <AboutIntro />
      <VideoSection />
      <Product />
      <UseCaseSection />
    </div>
  );
}

export default Home;
