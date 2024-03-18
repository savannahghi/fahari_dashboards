import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import CloudEmr from "@/app/(admin)/cloudemr/page"

describe("CloudEmr Component Unit Test", () => {
  it("should render the CloudEmr page title", () => {
    render(<CloudEmr />)
    const pageTitle = screen.getByText("Fahari ya Jamii CloudEMRs")

    expect(pageTitle).toBeInTheDocument()
  })

  it("renders the cloudemr instances", () => {
    render(<CloudEmr />)

    const rowItems = screen.getAllByTestId("cloudemr")
    expect(rowItems[0]).toBeDefined()
  })
})
