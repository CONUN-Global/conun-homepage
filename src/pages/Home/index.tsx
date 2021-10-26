import Main from "./Main";
import AboutIntro from "./About/AboutIntro";
import UseCaseSection from "./About/UseCaseSection";
import Product from "./About/Product";
import RoadMap from "./About/RoadMapSection";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.Home}>
      <Main />
      <AboutIntro />
      <Product />
      <UseCaseSection />
      <RoadMap />
    </div>
  );
}

export default Home;
