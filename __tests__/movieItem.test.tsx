/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import MovieItem from "@/components/Movies/MovieItem";

const mockMovieItemData = {
  id: 1,
  title: "Mock Spider Man",
  vote_average: 99,
  poster_path: "mock",
  release_date: "2100",
  overview: "Mock Overview",
};

const altText = "TMDB";

describe("movieItem", () => {
  it("renders without crashing", () => {
    render(<MovieItem item={mockMovieItemData} />);

    expect(screen.getByTestId("test-0")).toHaveTextContent(
      mockMovieItemData.title
    );

    expect(screen.getByTestId("test-1")).toHaveTextContent(
      mockMovieItemData.release_date
    );

    expect(screen.getByTestId("test-2")).toHaveAttribute(
      "href",
      `/movie/${mockMovieItemData.id}?movieName=mock-spider-man`
    );

    expect(screen.getByAltText(altText)).toHaveAttribute(
      "src",
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    );
  });
});
