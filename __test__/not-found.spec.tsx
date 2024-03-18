import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import PageNotFound from "@/app/not-found"

describe("NotFound Component Unit Test", () => {
  it("should render the NotFound page title", () => {
    render(<PageNotFound />)
    const pageTitle = screen.getByText("Page not Found")

    expect(pageTitle).toBeInTheDocument()
  })

  it("shows the redirect button", () => {
    render(<PageNotFound />)

    const ctaBtn = screen.getByText("Go to Homepage")
    expect(ctaBtn).toBeDefined()
  })
})
