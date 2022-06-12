/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Header from "@/components/Header/Header";

describe("Header", () => {
  it("renders without crashing", () => {
    render(<Header />);
    expect(screen.getByText("Popular").closest("a")).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByText("Upcoming").closest("a")).toHaveAttribute(
      "href",
      "/upcoming"
    );
    expect(screen.getByText("Top Rated").closest("a")).toHaveAttribute(
      "href",
      "/toprated"
    );
  });
});
