import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from "@/components/ui/popover"

describe("Popover Component", () => {
  it("should open popover on trigger click", () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>,
    )

    expect(screen.queryByText("Popover content")).not.toBeInTheDocument()

    fireEvent.click(screen.getByText("Open"))

    expect(screen.getByText("Popover content")).toBeInTheDocument()
  })

  it("should close popover on close button click", () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <PopoverClose>Close</PopoverClose>
          Popover content
        </PopoverContent>
      </Popover>,
    )

    fireEvent.click(screen.getByText("Open"))

    fireEvent.click(screen.getByText("Close"))

    expect(screen.queryByText("Popover content")).not.toBeInTheDocument()
  })
})
