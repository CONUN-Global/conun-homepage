import Button from "@/components/Button";
import React from "react";

import styles from "./NavButtons.module.scss";

function NavButtons() {
  return (
    <div className={styles.NavButtons}>
      <Button noStyle className={styles.Button}>
        Prev
      </Button>
      <Button noStyle className={styles.Button}>
        Next
      </Button>
    </div>
  );
}

export default NavButtons;
