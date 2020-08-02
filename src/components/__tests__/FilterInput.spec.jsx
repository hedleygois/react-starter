import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FilterInput } from "../FilterInput";
import '@testing-library/jest-dom/extend-expect';

describe("FilterInpit", () => {
  it("calls onChange when the input changes", () => {
    const onChange = jest.fn();
    render(<FilterInput onChange={onChange} onFocus={jest.fn()}/>);
    userEvent.type(screen.getByTestId("filter-input"), "bla");
    expect(screen.getByTestId("filter-input")).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledWith("bla");
  });
});