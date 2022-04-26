import React from "react";
import FeaturedCard from "./FeaturedCard";

import styles from "./Featured.module.scss";
import data from "../newsData.json";

function Featured() {
  return (
    <div className={styles.Featured}>
      <div className={styles.VideoCard}>
        <FeaturedCard newsData={data[0]} />
      </div>
    </div>
  );
}

export default Featured;
