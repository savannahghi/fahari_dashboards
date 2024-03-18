import { classNames, cn } from "@/utilities/utils"

describe("tests cn function", () => {
  it("should combine class values correctly", () => {
    const combinedClasses = cn("class-a", "class-b", "class-c")
    const expectedOutput = "class-a class-b class-c"
    expect(combinedClasses).toBe(expectedOutput)
  })

  it("should handle empty arguments", () => {
    const combinedClasses = cn()
    const expectedOutput = ""
    expect(combinedClasses).toBe(expectedOutput)
  })

  it("should handle falsy values", () => {
    const combinedClasses = cn("class-a", null, undefined, false, "class-b")
    const expectedOutput = "class-a class-b"
    expect(combinedClasses).toBe(expectedOutput)
  })

  it("should handle arrays of class values", () => {
    const combinedClasses = cn(["class-a", "class-b"], ["class-c", "class-d"])
    const expectedOutput = "class-a class-b class-c class-d"
    expect(combinedClasses).toBe(expectedOutput)
  })
})

describe("tests classNames function", () => {
  it("should combine class values correctly", () => {
    const combinedClasses = classNames("class-a", "class-b", "class-c")
    const expectedOutput = "class-a class-b class-c"
    expect(combinedClasses).toBe(expectedOutput)
  })
})
