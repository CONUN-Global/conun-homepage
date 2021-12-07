import { Trans } from "@lingui/macro";

import PcRoom from "@/assets/icons/pc_room.svg";
import styles from "./Body.module.scss";

function Body() {
  return (
    <div className={styles.Body}>
      <div className={styles.BodyContainer}>
        <div className={styles.TextTop}>
          <Trans id="By participating, your smart device is part of an ecosystem that has gathered many idle resources  to function as a high level computation mechanism that serves complex and vital projects around the world." />
        </div>
        <div className={styles.Diagram}>
          <PcRoom />
        </div>
        <div className={styles.TextBottom}>
          <div>
            <Trans id="Earn money while you sleep is our motto.” In return for borrowing idle personal resources, a user is automatically compensated through our network. Their return gains are equivalent to the resources they provide. Whether it be one smartphone or several computer laboratories, they will benefit from their participation." />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
