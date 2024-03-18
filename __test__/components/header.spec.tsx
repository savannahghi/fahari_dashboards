import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from "@/components/Header"

describe("Header Component Unit Test", () => {
  it("should render the header component", () => {
    render(<Header />)
    const headerEl = screen.getByTestId("headerEl")

    expect(headerEl).toBeInTheDocument()
  })
})
