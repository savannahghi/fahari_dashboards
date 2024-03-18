import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Admin from "@/app/(admin)/admin/page"

describe("Admin Component Unit Test", () => {
  it("should render the Admin page title", () => {
    render(<Admin />)
    const pageTitle = screen.getByText("Fahari ya Jamii Data Repository")

    expect(pageTitle).toBeInTheDocument()
  })

  it("renders the admin instances", () => {
    render(<Admin />)

    const features = screen.getAllByTestId("featureItem")
    expect(features[0]).toBeDefined()
  })
})
