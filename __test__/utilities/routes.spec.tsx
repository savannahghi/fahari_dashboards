import {
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  RESETPASSWORD_PAGE_ROUTE,
  SIGNUP_PAGE_ROUTE,
  SYSTEMS,
  DASHBOARDS,
  SERVER_URL,
  LOGIN_ENDPOINT,
  SIGNUP_ENDPOINT,
  ACCESS_TOKEN,
  DASHBOARDS_ENDPOINT,
  LOGOUT_ENDPOINT,
} from "@/utilities/routes"

describe("Test All routes", () => {
  test("All route", () => {
    expect(HOME_PAGE_ROUTE).toEqual("/")
    expect(LOGIN_PAGE_ROUTE).toEqual("/login")
    expect(SIGNUP_PAGE_ROUTE).toEqual("/sign-up")
    expect(RESETPASSWORD_PAGE_ROUTE).toEqual("/reset")
    expect(SYSTEMS).toEqual("/systems")
    expect(DASHBOARDS).toEqual("/dashboards")
    expect(SERVER_URL).toEqual("http://127.0.0.1:8000/api")
    expect(SIGNUP_ENDPOINT).toEqual("/auth/registration/")
    expect(LOGIN_ENDPOINT).toEqual("/auth/login/")
    expect(LOGOUT_ENDPOINT).toEqual("/auth/logout/")
    expect(DASHBOARDS_ENDPOINT).toEqual("/dashboards/dashboards/")
    expect(ACCESS_TOKEN).toEqual("__cbs_token__")
  })
})
