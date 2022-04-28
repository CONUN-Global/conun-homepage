import NewsHeader from "@/components/NewsHeader";
import styles from "./Press.module.scss";

import { Article } from "@/types/index";
import PressItem from "./PressItem";

export type Props = {
  data: {
    display: number;
    items: Article[];
    lastBuildData: string;
    start: number;
    total: number;
  };
};

function Press({ data }: Props) {
  return (
    <div className={styles.Container}>
      <div className={styles.HeaderContainer}>
        <NewsHeader>Press publicity</NewsHeader>
      </div>
      {data.items.map((article, index) => (
        <PressItem key={index} article={article} />
      ))}
    </div>
  );
}

export default Press;
