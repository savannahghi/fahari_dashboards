import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Home from "@/app/page"

describe("Home Component Unit Test", () => {
  it("should render the Home page title", () => {
    render(<Home />)
    const pageTitle = screen.getByText("Fahari Ya Jamii")

    expect(pageTitle).toBeInTheDocument()
  })

  it("shows the logo image", () => {
    render(<Home />)

    const logo = screen.getAllByTestId("logoImg")
    expect(logo).toBeDefined()
  })

  it("shows the login button", () => {
    render(<Home />)

    const loginBtn = screen.getByText("Login")
    expect(loginBtn).toBeDefined()
  })
})
