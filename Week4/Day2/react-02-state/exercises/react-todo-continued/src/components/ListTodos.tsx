import { useState } from "react";
import ListItem from "./ListItem";

export type Item = {
  id: number;
  task: string;
  complete: boolean;
};

interface TodoProps {
  list: Item[];
  addList: () => void;
}

function ListTodos({ list, addList }: TodoProps) {
  const [tolatList, setTolatList] = useState(list);
  const [input, setInput] = useState("");
  const handleOnChange = (e: any) => {
    setInput(e.target.value);
  };
  const handleOnAdd = () => {
    setTolatList([
      ...tolatList,
      { id: tolatList.length + 1, task: input, complete: false },
    ]);
  };
  return (
    <>
      <ul>
        <ListItem items={tolatList} />
      </ul>
      <input type="text" value={input} onInput={handleOnChange} />
      <button onClick={handleOnAdd}>Save</button>
    </>
  );
}

export default ListTodos;
