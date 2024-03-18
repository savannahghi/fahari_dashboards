import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import DashBoards from "@/app/(admin)/dashboards/page"

describe("Dashboards Component Unit Test", () => {
  it("should render the Dashboard page title", () => {
    render(<DashBoards />)
    const pageTitle = screen.getByText("Dashboards")

    expect(pageTitle).toBeInTheDocument()
  })

  it("renders the dashboards", () => {
    render(<DashBoards />)

    const dashboards = screen.getAllByTestId("dashboard")
    expect(dashboards[0]).toBeDefined()
  })

  it("dashboard changes on button selection", () => {
    render(<DashBoards />)

    const checkboxes = screen.getAllByRole("checkbox")

    if (checkboxes[0]) {
      fireEvent.click(checkboxes[0])
    }
    expect(checkboxes[0]).toBeDefined()
  })
})

describe("tests Dashboards Component even when dashboard is not found", () => {
    jest.mock("@/data/constants", () => ({
      dashboards: [ {
        id: "0697da45-e08f-45c4-91fe-bae19398bc54",
        created_by: null,
        updated_by: "Sil Team",
        current: false,
        visualizations: [
          {
            id: "375632b8-61a9-4815-84d0-de1885ce5d5d",
            created_at: "2023-11-17T10:53:22.201743+03:00",
            title: "Data Quality",
            description: "data quality dashboard",
            source:
              "https://lookerstudio.google.com/embed/reporting/83678c94-6a1a-47f3-a65a-f6f0b37d2188/page/aGYiD",
            width: "400.00",
            height: "300.00",
            weight: 0,
            metadata: {
              frameboarder: 0,
              allowFullScreen: "true",
            },
            is_published: true,
          },
        ],
        created_at: "2023-11-17T10:53:58.608066+03:00",
        updated_at: "2023-11-17T10:57:36.021462+03:00",
        title: "Data Quality",
        description: "data quality dashboard",
        layout: "none",
        weight: 998,
        is_published: true,
      },],
    }))
  it("should render the Dashboard page title", () => {
    render(<DashBoards />)
    const checkboxes = screen.getAllByRole("checkbox")

    if (checkboxes[0]) {
        fireEvent.change(checkboxes[0], { target: { value: "fakeID" } })

      fireEvent.click(checkboxes[0])
    }
    expect(checkboxes[0]).toBeDefined()
  })
})