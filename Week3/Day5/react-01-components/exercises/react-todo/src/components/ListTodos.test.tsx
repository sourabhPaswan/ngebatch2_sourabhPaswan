import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ListTodos from "./ListTodos";

describe("List item/items", () => {
  const todos = [
    {
      id: 1,
      task: "Walk the Dog",
      complete: false,
    },
    {
      id: 2,
      task: "Feed the Cat",
      complete: true,
    },
  ];
  it("Should render items", () => {
    render(<ListTodos list={todos} />);
    const foundElement = screen.getByText(/Walk the Dog/);
    expect(foundElement).toBeVisible();
  });
});
