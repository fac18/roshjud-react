import React from "react";
import { render } from "@testing-library/react";
import UserImage from "./UserImage";

test("Jest is working", () => {
  expect(true).toBeTruthy();
});

test("Render the github user component", () => {
  const { getByText } = render(<UserImage />);
  getByText("Enter user name");
});
