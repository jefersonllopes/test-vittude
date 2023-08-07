import { render, screen } from "@testing-library/react";
import Header from "./index";
import SideMenu from "../../components/SideMenu/index";

test("renders the header page", () => {
  render(<Header />);
  const element = screen.getByTestId("content-right-side-items");
  expect(element).toHaveTextContent("Site Institucional");
  expect(element).toHaveTextContent("Blog");
});

test("renders the side menu page", () => {
  render(<SideMenu />);
  const element = screen.getByTestId("content-side-menu");
  expect(element).toHaveTextContent("Site Institucional");
  expect(element).toHaveTextContent("Blog");
});
