import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//components
import AddressPage from ".";
import { Address } from "../../interfaces";

const cart = [
  {
    name: "Test",
  },
];
localStorage.setItem("cart", JSON.stringify(cart));

it("Do not Submit on inValid", async () => {
  render(
    <BrowserRouter>
      <AddressPage />
    </BrowserRouter>
  );
  await userEvent.click(screen.getByText(/Continue/i));
});

it("Store Address in Local Storage", async () => {
  render(
    <BrowserRouter>
      <AddressPage />
    </BrowserRouter>
  );
  const address: Address = {
    address: "Pipload",
    city: "Surat",
    postalcode: "456123",
  };
  await userEvent.type(screen.getByLabelText(/address/i), address.address);
  await userEvent.type(screen.getByLabelText(/city/i), address.city);
  await userEvent.type(
    screen.getByLabelText(/Postal Code/i),
    address.postalcode
  );

  await userEvent.click(screen.getByText(/Continue/i));
  expect(JSON.parse(localStorage.address)).toStrictEqual(address);
});