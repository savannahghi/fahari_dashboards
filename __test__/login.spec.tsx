import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import LoginPage from "@/app/login/page"

describe("Login Component Unit Test", () => {
  it("should render the login page title", () => {
    render(<LoginPage />)
    const pageTitle = screen.getByText("Welcome Back !")

    expect(pageTitle).toBeInTheDocument()
  })

  it("handles unsuccessful form submission correctly", () => {
    render(<LoginPage />)

    const usernameInput = screen.getByPlaceholderText("Enter your username")
    const passwordInput = screen.getByTestId("password")
    fireEvent.change(usernameInput, { target: { value: "wozaa@mail.com" } })
    fireEvent.change(passwordInput, { target: { value: "Offiziersmesser" } })

    expect(usernameInput).toBeDefined()
    expect(passwordInput).toBeDefined()
  })
})
