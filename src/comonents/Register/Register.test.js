import { fireEvent, render, screen } from "@testing-library/react"
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

// test("Register correctly",()=>
// { 
//     render(  
//     <BrowserRouter>
//       <Register />
//     </BrowserRouter>);
// const inputEmail=screen.getByPlaceholderText('email')
// fireEvent.change(inputEmail, {target: {value: 'wrong'}});
// const inputPass=screen.getByPlaceholderText('password')
// fireEvent.change(inputPass, {target: {value: 'wrong'}});


// })
