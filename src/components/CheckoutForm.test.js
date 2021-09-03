import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  //Arange:
  render(<CheckoutForm/>);

  //Act:
  const firstNameImput = screen.getByLabelText(/first name:/i)
  const lastNameImput = screen.getByLabelText(/last Name:/i);
  const addressImput = screen.getByLabelText(/address:/i);
  const cityImput = screen.getByLabelText(/city:/i);
  const stateImput = screen.getByLabelText(/state:/i);
  const zipImput = screen.getByLabelText(/zip:/i);

  userEvent.type(firstNameImput, "Greg");
  userEvent.type(lastNameImput, "Gregson");
  userEvent.type(addressImput, "1 23rd street");
  userEvent.type(cityImput, "Philadelphia");
  userEvent.type(stateImput, "PA");
  userEvent.type(zipImput, "19012");

  const submitButton = screen.getByRole("button");
  userEvent.click(submitButton);

  //Assert:
  const successMessage = screen.getByTestId("successMessage")
  expect(successMessage).toBeVisible();
  expect(successMessage).toBeTruthy();
  expect(successMessage).toHaveTextContent("Greg Gregson")
  expect(successMessage).toHaveTextContent("1 23rd street")
  expect(successMessage).toHaveTextContent("Philadelphia, PA 19012")
});
