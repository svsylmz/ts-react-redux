/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import Select from "react-select";
import selectEvent from "react-select-event";

interface Option {
  label: string;
  value: string;
}
type Options = Array<Option>;

const OPTIONS: Options = [
  { label: "mock-sort-1", value: "mock-sort-1" },
  { label: "mock-sort-2", value: "mock-sort-2" },
  { label: "mock-sort-3", value: "mock-sort-3" },
  { label: "mock-sort-4", value: "mock-sort-4" },
];
const defaultProps = {
  options: OPTIONS,
  name: "mockSelect",
  inputId: "mockSelect",
};

const renderForm = (select: React.ReactNode) => {
  const result = render(
    <form role="form">
      <label htmlFor="mockSelect">mock-select</label>
      {select}
    </form>
  );
  const form = result.getByRole("form");
  const input = result.getByLabelText("mock-select");
  return { ...result, form, input };
};

describe("The openMenu event helper", () => {
  it("opens the menu", () => {
    const { getByLabelText, queryByText } = renderForm(
      <Select {...defaultProps} />
    );
    expect(queryByText("mock-sort-1")).toBeNull();
    selectEvent.openMenu(getByLabelText("mock-select"));
    expect(queryByText("mock-sort-1")).toBeInTheDocument();
  });

  it("does not prevent selecting options", async () => {
    const { form, input, getByText } = renderForm(<Select {...defaultProps} />);
    selectEvent.openMenu(input);
    expect(getByText("mock-sort-1")).toBeInTheDocument();
    expect(getByText("mock-sort-2")).toBeInTheDocument();
    expect(getByText("mock-sort-3")).toBeInTheDocument();
    expect(getByText("mock-sort-4")).toBeInTheDocument();
    await selectEvent.select(input, "mock-sort-3");
    expect(form).toHaveFormValues({ mockSelect: "mock-sort-3" });
  });
});

describe("The select event helpers", () => {
  it("selects an option in a single-option input", async () => {
    const { form, input } = renderForm(<Select {...defaultProps} />);
    expect(form).toHaveFormValues({ mockSelect: "" });
    await selectEvent.select(input, "mock-sort-1");
    expect(form).toHaveFormValues({ mockSelect: "mock-sort-1" });
  });

  it("re-selects an option in a single-option input", async () => {
    const { form, input } = renderForm(<Select {...defaultProps} />);
    expect(form).toHaveFormValues({ mockSelect: "" });
    await selectEvent.select(input, "mock-sort-1");
    await selectEvent.select(input, "mock-sort-1");
    await selectEvent.select(input, "mock-sort-1");
    expect(form).toHaveFormValues({ mockSelect: "mock-sort-1" });
  });
});
