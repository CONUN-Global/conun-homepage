import Button from "@/components/Button";
import { NewsSource } from "@/types/index";
import classNames from "classnames";
import React from "react";

import styles from "./SourceFilter.module.scss";

const sources: NewsSource[] = [
  "xangle",
  "youtube",
  "medium",
  "github",
  "discord",
];

interface Props {
  activeFilter: NewsSource | null;
  setFilter: (filter: NewsSource | null) => void;
}

interface ButtonProps {
  source: NewsSource;
  activeFilter: NewsSource | null;
  setFilter: (filter: NewsSource | null) => void;
}

function SourceButton({ source, activeFilter, setFilter }: ButtonProps) {
  const handleClick = () => {
    if (activeFilter === source) {
      setFilter(null);
    } else {
      setFilter(source);
    }
  };

  return (
    <Button
      noStyle
      className={classNames(styles.Button, {
        [styles.filterIsActive]: activeFilter === source,
      })}
      onClick={handleClick}
    >
      {source}
    </Button>
  );
}

function SourceFilter({ activeFilter, setFilter }: Props) {
  return (
    <div className={styles.SourceFilter}>
      {sources.map((source) => (
        <SourceButton
          key={source}
          source={source}
          activeFilter={activeFilter}
          setFilter={setFilter}
        />
      ))}
    </div>
  );
}

export default SourceFilter;
