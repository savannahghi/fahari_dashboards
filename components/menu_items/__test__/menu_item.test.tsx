import { screen, render, fireEvent } from "@testing-library/react"
import CovidLogo from "../../../public/assets/images/covid.png"
import MenuItems from "../menu_items"

describe("Test Menu Item Component", () => {
  const MockMenuItem = () => {
    return (
      <>
        <MenuItems id={0} icon={CovidLogo} title={""} description={""} />
      </>
    )
  }

  beforeEach(() => {
    render(<MockMenuItem />)
  })

  test("Componet should be visible", () => {
    expect(MockMenuItem).toBeVisible
  })

  test("should render a visible image", () => {
    const imageElement = screen.getByRole("img")

    expect(imageElement).toBeInTheDocument
  })

  test("should  render a heading element", () => {
    const headingElement = screen.getByRole("heading")

    expect(headingElement).toBeVisible
  })

  test("should render a paragraph element", () => {
    const paragraphElement = screen.getByTestId("paragraph")

    expect(paragraphElement).toBeVisible
  })

  test("should navigate", () => {
    const clickableElement = screen.getByTestId("click")

    fireEvent.click(clickableElement)

    expect(clickableElement).not.toBeVisible
  })
})
