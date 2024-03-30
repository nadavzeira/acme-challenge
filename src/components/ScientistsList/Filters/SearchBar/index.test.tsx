import { fireEvent, render, RenderResult } from "@testing-library/react";
import SearchBar from ".";
import {
  FiltersProvider,
  useFiltersContext,
} from "../../../../contexts/filtersContext";

jest.mock("../../../../contexts/filtersContext", () => ({
  ...jest.requireActual("../../../../contexts/filtersContext"),
  useFiltersContext: jest.fn(),
}));

const renderComponent = (): RenderResult => {
  return render(
    <FiltersProvider>
      <SearchBar />
    </FiltersProvider>
  );
};

describe("SearchBar", () => {
  beforeEach(() => {
    (useFiltersContext as jest.Mock).mockReturnValue({
      setSearchQuery: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls setSearchQuery without waiting for debounce interval", () => {
    const { getByLabelText } = renderComponent();
    const input = getByLabelText(
      "Search by name (Type '/' to focus on the search bar)"
    );

    fireEvent.change(input, { target: { value: "John" } });

    expect(useFiltersContext().setSearchQuery).not.toHaveBeenCalledWith("John");
  });

  it("calls setSearchQuery after the debounce interval", async () => {
    jest.useFakeTimers();
    const { getByLabelText } = renderComponent();
    const input = getByLabelText(
      "Search by name (Type '/' to focus on the search bar)"
    );
    fireEvent.change(input, { target: { value: "John" } });
    jest.advanceTimersByTime(300);
    expect(useFiltersContext().setSearchQuery).toHaveBeenCalledWith("John");
  });

  it('focuses the input when the "/" key is pressed', () => {
    const { getByLabelText } = renderComponent();
    const input = getByLabelText(
      "Search by name (Type '/' to focus on the search bar)"
    );
    fireEvent.keyDown(document, { key: "/" });
    expect(document.activeElement).toBe(input);
  });

  it("adds and removes event listeners correctly", () => {
    const addEventListenerSpy = jest.spyOn(document, "addEventListener");
    const removeEventListenerSpy = jest.spyOn(document, "removeEventListener");
    const { unmount } = renderComponent();
    expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledTimes(1);
  });
});
