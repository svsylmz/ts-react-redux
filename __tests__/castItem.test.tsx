/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import CastItem from "@/components/MovieDetail/CastItem";

const mockCastItemData = {
  cast_id: 1,
  name: "TMDB Artist",
  character: "TMDB Man",
  profile_path: "mock",
};

const altText = "TMDB";

describe("castItem", () => {
  it("renders without crashing", () => {
    render(<CastItem item={mockCastItemData} />);

    expect(screen.getByTestId("test-3")).toHaveTextContent(
      mockCastItemData.name
    );

    expect(screen.getByTestId("test-4")).toHaveTextContent(
      mockCastItemData.character
    );

    expect(screen.getByAltText(altText)).toHaveAttribute(
      "src",
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    );
  });
});
