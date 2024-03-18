import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Footer from "@/components/footer"

describe("Footer Component Unit Test", () => {
  it("should render the footer component", () => {
    render(<Footer />)
    const footerText = screen.getByText(
      /Savannah Global Health Institute, All rights reserved./i,
    )

    expect(footerText).toBeInTheDocument()
  })
})
