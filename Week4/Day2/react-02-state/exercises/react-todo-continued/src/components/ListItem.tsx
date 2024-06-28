import { Item } from "./ListTodos";
import "../App.css";

interface ListItemProps {
  items: Item[];
}

function ListItem({ items }: ListItemProps) {
  return (
    <>
      {items.map((item: Item) => (
        <li key={item.id} className={item.complete ? "complete" : ""}>
          {item.id}. {item.task}
        </li>
      ))}
    </>
  );
}

export default ListItem;
