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
    await userEvent.type(inputElement, testInputString);
    expect(inputElement).toHaveValue(testInputString);
  });

  it("Check if Add button is working with correctly", async () => {
    await userEvent.type(inputElement, testInputString);
    expect(inputElement).toHaveValue(testInputString);
  });
});

describe("Assessment test cases for String calculator", () => {
  const shortInputString = "1,2,3" ;//sum=6
  let inputElement: HTMLInputElement;
  beforeEach(() => {
    render(<StringCalculator />);
    inputElement = screen.getByTestId("input-element");
  });

  it("Check if Add is adding the comma separated digits correctly", async () => {
    await userEvent.type(inputElement, shortInputString);
    expect(inputElement).toHaveValue(shortInputString);
    const buttonElement = screen.getByTestId("add-button");
    await userEvent.click(buttonElement);
    expect(inputElement).toHaveValue("6");
  });
  it("To provide any amount of numbers in the input (More than 7 character string)", async () => {
    const longInputString = "2,1,2,1,2,1,2,1,2,1,2,1"; //sum=18
    await userEvent.type(inputElement, longInputString);
    expect(inputElement).toHaveValue(longInputString);
    const buttonElement = screen.getByTestId("add-button");
    await userEvent.click(buttonElement);
    expect(inputElement).toHaveValue("18");
  });
});
