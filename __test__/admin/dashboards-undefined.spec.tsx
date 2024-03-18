import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import DashBoards from "@/app/(admin)/dashboards/page"

jest.mock("@/data/constants", () => ({
  dashboards: undefined,
}))
describe("Dashboards Component Unit Test", () => {
  it("should render the Dashboard page title", () => {
    render(<DashBoards />)
    const pageTitle = screen.getByText("Dashboards")

    expect(pageTitle).toBeInTheDocument()
  })
})
