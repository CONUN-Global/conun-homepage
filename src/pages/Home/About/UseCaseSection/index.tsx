import Card from "@/components/Card";
// import { Trans } from "@lingui/macro";

import DrawingIcon from "@/assets/icons/drawing_icon.svg";
import CalculatorIcon from "@/assets/icons/calculator_icon.svg";
import AI from "@/assets/icons/ai_icon.svg";
import GraphIcon from "@/assets/icons/graph_icon.svg";
import SurveyIcon from "@/assets/icons/survey_icon.svg";
import ScienceIcon from "@/assets/icons/science_icon.svg";
import styles from "./UseCaseSection.module.scss";

const USE_CASE_CONTENT = [
  {
    title: "Life Science and Research Projects",
    description:
      "Biological research to improve existing treatments and develop new treatments for disease treatment is one of the areas using distributed computing, and distributed computing environments can be used for research in university research institutes and bio-industries.",
    image: <ScienceIcon />,
  },
  {
    title: "Big Data and Analysis Projects",
    description:
      "It is used to process text mining, opinion mining, social network analysis, and cluster analysis for analysis of unstructured data such as social media and existing methods such as data mining, natural language processing, and pattern recognition processing using big data analysis technology.",
    image: <GraphIcon />,
  },
  {
    title: "Deep Learning and Models Projects",
    description:
      "In the field of artificial intelligence, you can quickly create a deep learning model designed by users in areas such as convolutional neural networks (CNNs), circulatory neural networks (RNNs), and reinforcement learning to implement a multi-process environment that allows you to learn deep learning algorithms.",
    image: <AI />,
  },
  {
    title: "Academic/sociocultural ISSUES",
    description:
      "Participants in the general-purpose network can directly or indirectly participate in various academic research and social and cultural issues to obtain additional revenue, while creating a community that improves the quality of life and develops culture through research and discussion.",
    image: <SurveyIcon />,
  },
  {
    title: "Computer Graphic and Processing Projects",
    description:
      "Computer-generated images (CGI) in the field of computer graphics are used to process projects such as movies, television programs, advertisements, simulators, simulations, and three-dimensional computer graphics quickly and cheaply.",
    image: <DrawingIcon />,
  },
  {
    title: "Scientific Calculations",
    description:
      "Scientific calculations that require complex and fast computing power.",
    image: <CalculatorIcon />,
  },
];
function UseCaseSection() {
  return (
    <div className={styles.CardContainer}>
      {USE_CASE_CONTENT.map((card, i) => {
        return (
          <Card
            key={i}
            title={card.title}
            description={card.description}
            image={card.image}
            size="small"
          />
        );
      })}
    </div>
  );
}

export default UseCaseSection;
