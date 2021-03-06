import { Trans } from "@lingui/macro";

import DrawingIcon from "@/assets/icons/drawing_icon.svg";
import CalculatorIcon from "@/assets/icons/calculator_icon.svg";
import AI from "@/assets/icons/ai_icon.svg";
import GraphIcon from "@/assets/icons/graph_icon.svg";
import SurveyIcon from "@/assets/icons/survey_icon.svg";
import ScienceIcon from "@/assets/icons/science_icon.svg";

export const USE_CASE_CONTENT = [
  {
    title: <Trans id="Life Science and Research Projects" />,
    description: (
      <Trans id="Biological research to improve existing treatments and develop new treatments for disease treatment is one of the areas using distributed computing, and distributed computing environments can be used for research in university research institutes and bio-industries." />
    ),
    image: <ScienceIcon style={{ width: "100%" }} />,
  },
  {
    title: <Trans id="Big Data and Analysis Projects" />,
    description: (
      <Trans id="It is used to process text mining, opinion mining, social network analysis, and cluster analysis for analysis of unstructured data such as social media and existing methods such as data mining, natural language processing, and pattern recognition processing using big data analysis technology." />
    ),
    image: <GraphIcon style={{ width: "100%" }} />,
  },
  {
    title: <Trans id="Deep Learning Projects" />,
    description: (
      <Trans id="In the field of artificial intelligence, you can quickly create a deep learning model designed by users in areas such as Convolutional Neural Networks (CNNs), Circulatory Neural Networks (RNNs), and reinforcement learning to implement a multi-process environment that allows you to learn deep learning algorithms." />
    ),
    image: <AI style={{ width: "100%" }} />,
  },
  {
    title: <Trans id="Academic / sociocultural ISSUES" />,
    description: (
      <Trans id="Participants in the general-purpose network can directly or indirectly participate in various academic research and social and cultural issues to obtain additional revenue, while creating a community that improves the quality of life and develops culture through research and discussion." />
    ),
    image: <SurveyIcon style={{ width: "100%" }} />,
  },
  {
    title: <Trans id="Computer Graphic and Processing Projects" />,
    description: (
      <Trans id="Computer-generated images (CGI) in the field of computer graphics are used to process projects such as movies, television programs, advertisements, simulators, simulations, and three-dimensional computer graphics quickly and cheaply." />
    ),
    image: <DrawingIcon style={{ width: "100%" }} />,
  },
  {
    title: <Trans id="Scientific Calculations" />,
    description: (
      <Trans id="Scientific calculations that require complex and fast computing power." />
    ),
    image: <CalculatorIcon style={{ width: "100%" }} />,
  },
];
