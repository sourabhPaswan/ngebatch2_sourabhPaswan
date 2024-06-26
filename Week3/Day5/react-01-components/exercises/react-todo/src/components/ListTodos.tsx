import ListItem from "./ListItem";

export type Item = {
  id: number;
  task: string;
  complete: boolean;
};

interface TodoProps {
  list: Item[];
}

function ListTodos({ list }: TodoProps) {
  return (
    <ul>
      <ListItem items={list} />
    </ul>
  );
}

export default ListTodos;
