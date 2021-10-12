import Button from "@/components/Button";

import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <Button>Search</Button>
    </div>
  );
}
export default Navbar;
