import { Trans } from "@lingui/macro";

import Horizontal from "@/components/Card/Horizontal";
import Caption from "@/components/Caption";
import DscDiagram from "@/assets/icons/dsc.svg";

import styles from "./Intro.module.scss";

const introduction = {
  header: <Trans id="Conun DSC Ecosystem" />,
  title: <Trans id="INTRODUCTION" />,
  description: (
    <Trans id="The computers and smartphones we use daily are high performance devices used for complex games, internet browsing, and socializing. Yet when connected to a supercomputing platform that device becomes a resource. A supercomputing platform is a worldwide network that gathers CPU GPU and RAM resources of smart devices." />
  ),
  image: <DscDiagram />,
};

function Intro() {
  return (
    <div className={styles.IntroContainer}>
      <Horizontal className={styles.HorizontalCard}>
        <div className={styles.TextContainer}>
          <Caption
            className={styles.Caption}
            headColor="sky"
            textSize="large"
            header={introduction.header}
            title={introduction.title}
          />
          <p className={styles.Description}>{introduction.description}</p>
        </div>
        <div className={styles.ImageContainer}>{introduction.image}</div>
      </Horizontal>
    </div>
  );
}
export default Intro;
