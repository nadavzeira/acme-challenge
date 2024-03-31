import { render, fireEvent } from "@testing-library/react";
import DropDowns from ".";
import {
  FiltersProvider,
  useFiltersContext,
} from "../../../../contexts/filtersContext";
import { useScientistsListContext } from "../../../../contexts/scientistsListContext_v1";

jest.mock("../../../../contexts/filtersContext", () => ({
  ...jest.requireActual("../../../../contexts/filtersContext"),
  useFiltersContext: jest.fn(),
}));

jest.mock("../../../../contexts/scientistsListContext", () => ({
  ...jest.requireActual("../../../../contexts/scientistsListContext"),
  useScientistsListContext: jest.fn(),
}));

describe("DropDowns", () => {
  beforeEach(() => {
    (useFiltersContext as jest.Mock).mockReturnValue({
      setGenderFilter: jest.fn(),
      setNationalityFilter: jest.fn(),
    });

    (useScientistsListContext as jest.Mock).mockReturnValue({
      scientistsData: [
        { nat: "USA" },
        { nat: "UK" },
        { nat: "Canada" },
      ],
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls setGenderFilter when gender is changed", () => {
    const { getByLabelText, getByText } = render(
      <FiltersProvider>
        <DropDowns />
      </FiltersProvider>
    );
    const genderSelect = getByLabelText("Gender") as HTMLSelectElement;
    fireEvent.mouseDown(genderSelect);
    const maleOption = getByText("Male");
    fireEvent.click(maleOption);
    expect(useFiltersContext().setGenderFilter).toHaveBeenCalledWith("male");
  });

  it("calls setNationalityFilter when nationality is changed", () => {
    const { getByLabelText, getByText } = render(
      <FiltersProvider>
        <DropDowns />
      </FiltersProvider>
    );
    const nationalitySelect = getByLabelText("Nationality") as HTMLSelectElement;
    fireEvent.mouseDown(nationalitySelect);
    const usaOption = getByText("USA");
    fireEvent.click(usaOption);
    expect(useFiltersContext().setNationalityFilter).toHaveBeenCalledWith([
      "USA",
    ]);
  });
});
