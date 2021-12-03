import Button from "@/components/Button";
import React from "react";

import styles from "./NavButtons.module.scss";

interface Props {
  handleNext: () => void;
  handlePrev: () => void;
}

function NavButtons({ handleNext, handlePrev }: Props) {
  return (
    <div className={styles.NavButtons}>
      <Button noStyle className={styles.Button} onClick={handlePrev}>
        Prev
      </Button>
      <Button noStyle className={styles.Button} onClick={handleNext}>
        Next
      </Button>
    </div>
  );
}

export default NavButtons;
