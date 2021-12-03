import React from "react";

import { ARCHITECTURE_CONTENT } from "./Content";

import Horizontal from "@/components/Card/Horizontal";
import Caption from "@/components/Caption";

import ArchitectureIcon from "@/assets/icons/architecture.svg";
import styles from "./Architecture.module.scss";

function Architecture() {
  return (
    <div className={styles.Architecture}>
      <Horizontal className={styles.Card}>
        <div className={styles.ImageContainer}>
          <ArchitectureIcon />
        </div>
        <div className={styles.TextContainer}>
          {ARCHITECTURE_CONTENT.map((item, i: number) => {
            return (
              <div key={i} className={styles.Text}>
                <Caption titleColor="green" title={item.title} />
                <p className={styles.Description}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </Horizontal>
    </div>
  );
}

export default Architecture;
