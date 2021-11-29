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
    <div className={style.ListContainer}>
      <p>{section}</p>
      <div className={style.List}>
        {items.map((item, i: number) => (
          <Item key={i} name={item.name} path={item.path} />
        ))}
      </div>
    </div>
  );
}

export default List;
