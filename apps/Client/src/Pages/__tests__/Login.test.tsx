import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../Login";
import "@testing-library/jest-dom";
import { Wrapper } from "../../TestSetup";

const setup = () =>
  render(
    <Wrapper>
      <Router>
        <Login />
      </Router>
    </Wrapper>
  );

it("Check For onchange Input Empty Validate", () => {
  setup();
  const email = screen.getByLabelText(/email/i);
  const password = screen.getByLabelText(/password/i);

  userEvent.type(email, "sdas#gmail.com");
  userEvent.type(password, "asdas");

  expect(email).toHaveValue("sdas#gmail.com");
  expect(password).toHaveValue("asdas");

  userEvent.clear(email);
  expect(screen.getByText("EMAIL is required")).toBeInTheDocument();

  userEvent.clear(password);
  expect(screen.getByText("PASSWORD is required")).toBeInTheDocument();
});

it("Input Validation on Submit", () => {
  setup();
  const email = screen.getByLabelText(/email/i);
  const password = screen.getByLabelText(/password/i);

  userEvent.type(email, "sdas#gmail.com");
  userEvent.type(password, "asd");

  userEvent.click(screen.getByText(/login/));

  expect(screen.getByText("Invalid email")).toBeInTheDocument();
  expect(
    screen.getByText("Password must be at least 6 characters")
  ).toBeInTheDocument();
});