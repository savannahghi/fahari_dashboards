import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Systems from "@/app/(admin)/systems/page"

describe("Systems Component Unit Test", () => {
  it("should render the Systems component title", () => {
    render(<Systems />)
    const pageTitle = screen.getByText("Fahari ya Jamii Data Systems")

    expect(pageTitle).toBeInTheDocument()
  })

  it("renders the system links", () => {
    render(<Systems />)

    const links = screen.getAllByTestId("systemLink")
    expect(links[0]).toBeDefined()
  })
})
