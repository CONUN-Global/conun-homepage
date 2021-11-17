import styles from "./DrawerToggleButton.module.scss";

function DrawerToggleButton({ ...props }) {
  const { onclick } = props;
  return (
    <div onClick={onclick} className={styles.ToggleButtonContainer}>
      <div className={styles.ToggleButton}></div>
      <div className={styles.ToggleButton}></div>
      <div className={styles.ToggleButton}></div>
    </div>
  );
}
export default DrawerToggleButton;
