import React, { useState } from "react";

export default function Category() {
  const category = ["mobile", "tv", "pc","toy"];
  const [selected, setSelected] = useState("pc");
  const handleSelect = (selectedCategory: string) => {
    setSelected(selectedCategory);
  };
  return (
    <div>
      <CategoryDisplay
        category={category}
        onSelect={handleSelect}
        selected={selected}
      />
    </div>
  );
}
interface CategoryDisplayProps {
  category: string[];
  onSelect: (selectedCategory: string) => void;
  selected: string;
}

export function CategoryDisplay({
  category,
  onSelect,
  selected,
}: CategoryDisplayProps) {
  return (
    <select onChange={(event) => onSelect(event.target.value)} value={selected}>
      {category?.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
