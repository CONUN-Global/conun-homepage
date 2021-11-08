import Main from "./Main";
import AboutIntro from "./About/AboutIntro";
import AboutVideo from "./About/AboutVideo";
import UseCaseSection from "./About/UseCaseSection";
import Product from "./About/Product";
import RoadMap from "./About/RoadMapSection";
import ConunNews from "./About/ConunNews";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.Home}>
      <Main />
      <AboutIntro />
      <AboutVideo />
      <Product />
      <UseCaseSection />
      <RoadMap />
      <ConunNews />
    </div>
  );
}

export default Home;
