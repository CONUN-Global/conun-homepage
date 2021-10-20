import Main from "./Main";
import AboutIntro from "./LandingPage/AboutIntro";
import AboutCardsSection from "./LandingPage/AboutCardsSection";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.Home}>
      <Main />
      <AboutIntro />
      <AboutCardsSection />
    </div>
  );
}

export default Home;
