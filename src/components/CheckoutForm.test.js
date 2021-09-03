import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  //Arange:
  render(<CheckoutForm/>);
  //Act:
  const header = screen.getByText(/checkout form/i)
  //Assert:
  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
  expect(header).toHaveTextContent(/checkout form/i);
});

test("shows success message on submit with form details", () => {
  
});
