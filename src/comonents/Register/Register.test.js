import { findAllByText, fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import Register from "./Register";

test("Register render corectly", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const textElement = screen.getByText("Register");
  expect(textElement).toBeInTheDocument();
  const LoginLink = screen.getByText("Login");
  expect(LoginLink).toBeInTheDocument();
  const button = screen.getByRole("button",{ name:"register"})
  expect(button).toBeInTheDocument()
  expect(button).toBeDisabled()
});
  
test("Invalid email", async() => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const emailInput = screen.getByPlaceholderText('email');

  fireEvent.change(emailInput, {target:{value:'dasdadf'}})

  const error=await screen.findByRole("error")
  const button= screen.getByRole("button")
 expect(error).toBeInTheDocument()
expect(button).toBeDisabled()

 
})
test("Invalid password", async() => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const passwordInput=screen.getByPlaceholderText('password');
  
  fireEvent.change(passwordInput, {target:{value:'dasdadf'}})

  const error=await screen.findByRole("error")
  const button= screen.getByRole("button")
 expect(error).toBeInTheDocument()
expect(button).toBeDisabled()



 
})

test("succsesfuly register", async() => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const repasswordInput=screen.getByPlaceholderText("repassword")
  const passwordInput=screen.getByPlaceholderText('password');
  const emailInput = screen.getByPlaceholderText('email');
  const button= screen.getByRole("button")

  fireEvent.change(emailInput, {target:{value:'asdfd@abv.bg'}})

  fireEvent.change(passwordInput, {target:{value:'Asdfghj123!'}})

  fireEvent.change(repasswordInput, {target:{value:'Asdfghj123!'}})

  fireEvent.click(button)

})
