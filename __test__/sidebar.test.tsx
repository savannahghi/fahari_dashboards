import Sidebar from "@/components/Sidebar"
import { screen, render, fireEvent } from "@testing-library/react"

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

describe("Unit Test sidebar component open", () => {
  const setCollapsedMock = jest.fn()

  beforeEach(() => {
    render(<Sidebar collapsed={false} setCollapsed={setCollapsedMock} />)
  })

  test("should render admin Icon and text", () => {
    const linkElement = screen.getByTestId("adminLinkOpen")
    expect(linkElement).toBeDefined()
  })

  test("Image element should be visible", () => {
    const imageElement = screen.getByTestId("idrLogo")

    expect(imageElement).toBeDefined()
  })

  test("Toggle button should toggle displays", () => {
    const toggleBtn = screen.getByTestId("navToggle")
    fireEvent.click(toggleBtn)

    const linkElement = screen.getByTestId("adminLinkClosed")
    expect(linkElement).toBeDefined()
    expect(toggleBtn).toBeDefined()
  })
})

describe("Unit Test sidebar component collapsed", () => {
  const setCollapsedMock = jest.fn()

  beforeEach(() => {
    render(<Sidebar collapsed={true} setCollapsed={setCollapsedMock} />)
  })

  test("should render admin Icon only", () => {
    const linkElement = screen.getByTestId("adminLinkClosed")
    expect(linkElement).toBeDefined()
  })
})
