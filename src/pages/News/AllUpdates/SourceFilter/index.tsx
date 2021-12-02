import Button from "@/components/Button";
import { NewsSource } from "@/types/index";
import React from "react";

import styles from "./SourceFilter.module.scss";

const sources: NewsSource[] = [
  "xangle",
  "youtube",
  "medium",
  "github",
  "discord",
];

function SourceButton({ source }: { source: NewsSource }) {
  return (
    <Button noStyle className={styles.Button}>
      {source}
    </Button>
  );
}

function SourceFilter() {
  return (
    <div className={styles.SourceFilter}>
      {sources.map((source) => (
        <SourceButton key={source} source={source} />
      ))}
    </div>
  );
}

export default SourceFilter;
