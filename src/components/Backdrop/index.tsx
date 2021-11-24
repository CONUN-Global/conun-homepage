import styles from "./Backdrop.module.scss";

function Backdrop({ ...props }) {
  const { onclick } = props;
  return <div onClick={onclick} className={styles.Backdrop}></div>;
}

export default Backdrop;
