"use client"
import idrServerLogo from "@images/idr-server-logo.png"
import Image from "next/image"
import { useState, ChangeEvent } from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/common/card"
interface InputState {
  username: string
  password: string
}

const LoginPage = () => {
  const [inputs, setInputs] = useState<InputState>({
    username: "",
    password: "",
  })

  const handleChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputs({
      ...inputs,
      [event.target.name]: value,
    })
  }

  return (
    <section className="min-h-screen grid place-items-center sm:px-0 px-1">
      <div
        className="w-full md:w-[600px] h-[600px] text-nci-gray"
        data-testid="login_form"
      >
        <Card>
          <CardHeader>
            <Image
              src={idrServerLogo}
              width={10}
              height={10}
              alt="dashboard_logo"
              className="h-10 w-10"
            />

            <br />
            <CardTitle>Welcome Back !</CardTitle>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Don&apos;t have an account?{" "}
              <a
                href="#"
                className="font-semibold text-fyj-primary hover:text-indigo-500"
              >
                Create an account.
              </a>
            </p>
          </CardHeader>
          <CardContent className=" h-full">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    value={inputs.username}
                    onChange={handleChangeEvent}
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={inputs.password}
                    onChange={handleChangeEvent}
                    placeholder="********"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="flex w-full justify-center rounded-md bg-fyj-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <div className="flex items-center justify-between">
              <div className="text-sm leading-6">
                <a
                  href="#"
                  className="font-semibold text-fyj-primary hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

export default LoginPage
