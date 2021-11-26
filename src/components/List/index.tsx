import Item from "./Item";
import style from "./List.module.scss";

interface ListProps {
  section: string;
  items: ItemProps[];
}
type ItemProps = {
  [key: string]: string;
};
function List({ section, items }: ListProps) {
  return (
    <div className={style.List}>
      <p>{section}</p>
      {items.map((item, i: number) => (
        <Item key={i} name={item.name} path={item.path} />
      ))}
    </div>
  );
}

export default List;
