/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import UserInfo from "./UserInfo";

/* eslint-enable */

describe("Display UserInfo", () => {
  it("should render the user's name", () => {
    // todo
    render(
      <UserInfo
        user={{
          avatarUrl: "https://robohash.org/Fiona?size=60x60",
          name: "Fiona Worx",
        }}
      />
    );
    const foundElement = screen.getByText(/Fiona Worx/);
    expect(foundElement).toHaveTextContent("Fiona Worx");
  });

  it("should render the user's image", () => {
    // todo
    render(
      <UserInfo
        user={{
          avatarUrl: "https://robohash.org/Fiona?size=60x60",
          name: "Fiona Worx",
        }}
      />
    );
    const foundImage = screen.getByAltText(/Fiona Worx avatar/);
    expect(foundImage).toHaveAttribute(
      "src",
      "https://robohash.org/Fiona?size=60x60"
    );
  });
});
