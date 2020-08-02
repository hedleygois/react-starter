import React from "react";

import {render, screen, waitFor, wait, fireEvent, within} from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "../redux/Setup";
import '@testing-library/jest-dom/extend-expect';

jest.setTimeout(10000);

describe("App", () => {
  it("renders the correct planets on filter", async () => {
    render(<Provider store={configureStore()}><App /></Provider>);
    await userEvent.type(screen.getByTestId("filter-input"), "Corus");
    const element = await screen.findByText("Coruscant");
    expect(element).toBeInTheDocument();
  });

  it("renders the correct people on filter", async () => {
    render(<Provider store={configureStore()}><App /></Provider>);
    await userEvent.type(screen.getByTestId("filter-input"), "Luke");
    const element = await screen.findByText("Luke Skywalker");
    expect(element).toBeInTheDocument();
  });

  it("renders the correct species on filter", async () => {
    render(<Provider store={configureStore()}><App /></Provider>);
    await userEvent.type(screen.getByTestId("filter-input"), "Ew");
    const element = await screen.findByText("Ewok");
    expect(element).toBeInTheDocument();
  });

  it("renders the correct details for selectet planet", async () => {
    render(<Provider store={configureStore()}><App /></Provider>);
    await userEvent.type(screen.getByTestId("filter-input"), "Nab");
    const element = await screen.findByText("Naboo");
    fireEvent.click(element);
    
    expect(within(screen.getByText("Name:")).getByText("R2-D2")).toBeInTheDocument();
    expect(within(screen.getByText("Planet:")).getByText("Unknown")).toBeInTheDocument();
    expect(within(screen.getByText("Gender:")).getByText("n/a")).toBeInTheDocument();
    expect(within(screen.getByText("Species:")).getByText("Unknown")).toBeInTheDocument();
  });

  // There's no valid relation between Person <-> Species on  the data
  // I could write another test mocking the client to fetch a valid data but I'm almost on my time limit already
  // At least the selector underneath is tested so we know (indirectly) that it should work
  it("renders the correct details for selectet species", async () => {
    render(<Provider store={configureStore()}><App /></Provider>);
    await userEvent.type(screen.getByTestId("filter-input"), "Hut");
    const element = await screen.findByText("Hutt");
    fireEvent.click(element);
    
    expect(screen.getByText("Sorry, no result for this species.")).toBeInTheDocument();
  });

  it("renders the correct details for selecte people", async () => {
    render(<Provider store={configureStore()}><App /></Provider>);
    await userEvent.type(screen.getByTestId("filter-input"), "Vader");
    const element = await screen.findByText("Darth Vader");
    fireEvent.click(element);
    
    expect(within(screen.getByText("Name:")).getByText("Darth Vader")).toBeInTheDocument();
    expect(within(screen.getByText("Planet:")).getByText("Unknown")).toBeInTheDocument();
    expect(within(screen.getByText("Gender:")).getByText("male")).toBeInTheDocument();
    expect(within(screen.getByText("Species:")).getByText("Unknown")).toBeInTheDocument();
  });
});