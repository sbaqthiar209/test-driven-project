// @ts-nocheck
import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import StringCalculator from "../../src/pages/home";
import userEvent from "@testing-library/user-event";

describe("String Calculator Component Test", () => {
  const testInputString = "1,2,3";
  let inputElement: HTMLInputElement;
  beforeEach(() => {
    render(<StringCalculator />);
    inputElement = screen.getByTestId("input-element");
  });

  it("Check if String Calculator UI is rendered", () => {
    expect(inputElement).toBeInTheDocument();
  });

  it("User will type text in the input and test if controlled component is working fine using React state", async () => {
    inputElement = screen.getByTestId("input-element");
    await userEvent.type(inputElement, testInputString);
    expect(inputElement).toHaveValue(testInputString);
  });

  it("Check if Add button is working with correctly", async () => {
    inputElement = screen.getByTestId("input-element");
    await userEvent.type(inputElement, testInputString);
    expect(inputElement).toHaveValue(testInputString);
  });
});

describe("Assessment test cases for String calculator", () => {
  const testInputString = "1,2,3";
  let inputElement: HTMLInputElement;
  beforeEach(() => {
    render(<StringCalculator />);
    inputElement = screen.getByTestId("input-element");
  });

  it("Check if Add is adding the comma separated digits correctly", async () => {
    inputElement = screen.getByTestId("input-element");
    await userEvent.type(inputElement, testInputString);
    expect(inputElement).toHaveValue(testInputString);
    const buttonElement = screen.getByTestId("add-button");
    await userEvent.click(buttonElement);
    expect(inputElement).toHaveValue("6");
  });
});
