import { features, cloudEmrs, fyjSystems, dashboards } from "@/data/constants"

describe("Test constants", () => {
  test("Features constants", () => {
    expect(features.length > 0).toBe(true)
  })
  test("Dashboards", () => {
    expect(dashboards.length > 0).toBe(true)
    expect(fyjSystems.length > 0).toBe(true)
    expect(cloudEmrs.length > 0).toBe(true)
  })
})
