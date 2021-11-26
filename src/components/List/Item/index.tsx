import styles from "./Item.module.scss";

interface ItemProps {
  name: string;
  path: string;
}
function Item({ name, path }: ItemProps) {
  return (
    <p className={styles.ItemContainer}>
      {name}: {path}
    </p>
  );
}

export default Item;
