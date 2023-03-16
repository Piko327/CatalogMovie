import {render,screen} from "@testing-library/react"
import Home from "./Home"

test("Home render corectly",()=>{
    render(<Home/>)
    const textElement =screen.getByAltText(/home/i)
    expect(textElement).toBeInTheDocument() 

   const textElement2 =screen.getByText(/music libary/i)
   expect(textElement2).toBeInTheDocument() 

   const textElement3 =screen.getByText(/If you need safe your favorite albums somewhere.You are in a right place./i)
   expect(textElement3).toBeInTheDocument() 
})