import {render, screen} from "@testing-library/react"
import { DataContext } from "../../context/DataContext"
import Dashboard from "../Dashboard/Dashboard"

test("Dashboard renders correctly",()=>{
    render(
        <DataContext.Provider value={{ data: { user: { name: "John" } } }}>
            <Dashboard/>
        </DataContext.Provider>
    )
    const textElement = screen.getByAltText(/albums/i)
    expect(textElement).toBeInTheDocument() 
})