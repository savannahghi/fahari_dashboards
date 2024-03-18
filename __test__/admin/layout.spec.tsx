import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import DashboardLayout from "@/app/(admin)/layout"
import Sidebar from "@/components/Sidebar"

jest.mock("next/navigation", () => {
  return {
    useRouter: jest.fn(() => ({
      route: "/admin",
      pathname: "/admin",
      query: "",
      asPath: "/admin",
      push: jest.fn(),
    })),
    usePathname: jest.fn(() => "admin"),
  }
})

describe("DashboardLayout Unit test", () => {
  const setCollapsedMock = jest.fn()

  it("should render the dashboard layout component when sidebar is open", () => {
    render(
      <DashboardLayout>
        <Sidebar collapsed={true} setCollapsed={setCollapsedMock} />
        <div data-testid="main-wrapper">Child Element</div>
      </DashboardLayout>,
    )

    const childElement = screen.getAllByTestId("main-wrapper")
    expect(childElement[0]).toBeTruthy()
  })

  it("should render the dashboard layout component when sidebar is closed", () => {
    render(
      <DashboardLayout>
        <Sidebar collapsed={false} setCollapsed={setCollapsedMock} />
        <div data-testid="main-wrapper">Child Element</div>
      </DashboardLayout>,
    )
    const toggleBtns = screen.getAllByTestId("navToggle")
    if (toggleBtns[0]) fireEvent.click(toggleBtns[0])
    const childElement = screen.getAllByTestId("main-wrapper")
    expect(childElement[0]).toBeTruthy()
  })
})
