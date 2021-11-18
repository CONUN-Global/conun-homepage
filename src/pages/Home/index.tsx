import Main from "./Main";
import AboutIntro from "./AboutIntro";
import AboutVideo from "./AboutVideo";
import UseCaseSection from "./UseCaseSection";
import Product from "./Product";
import RoadMap from "./RoadMapSection";
import ConunNews from "./ConunNews";
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
