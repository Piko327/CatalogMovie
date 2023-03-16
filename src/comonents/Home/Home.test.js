import {render,screen} from "@testing-library/react"
import Home from "./Home"

test("Home render corectly",()=>{
    render(<Home/>)
   const textElement =screen.getByText(/music libarynp/i)
   expect(textElement).toBeInTheDocument() 
})