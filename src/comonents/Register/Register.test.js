import {render,screen} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Register from "./Register"

test("Register render corectly",() => {
    render(
        <BrowserRouter>
    <Register/>
    </BrowserRouter>
    ) 


    const textElement =  screen.getByText("Register")
        expect(textElement).toBeInTheDocument()

        const LoginLink =  screen.getByText("Login")
        expect(LoginLink).toBeInTheDocument()
},)