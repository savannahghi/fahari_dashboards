"use client"
import Image from "next/image"
import Link from "next/link"
import idrServerLogo from "@images/idr-server-logo.png"

import Footer from "@/components/footer"
const Home = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <main className="bg-white">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-4 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <div className="max-w-lg">
                  <Image
                    height={40}
                    width={40}
                    className="h-11"
                    src={idrServerLogo}
                    alt="CBS Logo"
                  />
                  <div className="mt-3 sm:mt-32 lg:mt-16">
                    <a href="#" className="inline-flex space-x-6">
                      <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                        CBS
                      </span>
                    </a>
                  </div>
                  <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Fahari Ya Jamii
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    An analysis of systems used to assess the access to health
                    services and the quality provided across Nairobi and Kajiado
                    Counties.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <Link
                      href="/login"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Login
                    </Link>
                    <a
                      href="https://www.usaid.gov/"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      In partnership with USAID<span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative mt-8 sm:mt-0">
                <svg
                  className="absolute w-full text-green-500"
                  fill="currentColor"
                  viewBox="0 0 600 392"
                >
                  <rect x="0" y="211" width="75" height="181" rx="8" />
                  <rect x="525" y="260" width="75" height="132" rx="8" />
                  <rect x="105" y="83" width="75" height="309" rx="8" />
                  <rect x="210" y="155" width="75" height="237" rx="8" />
                  <rect x="420" y="129" width="75" height="263" rx="8" />
                  <rect x="315" y="0" width="75" height="392" rx="8" />
                </svg>
                <svg
                  className="relative w-full text-blue-700"
                  fill="currentColor"
                  viewBox="0 0 600 392"
                >
                  <rect x="0" y="311" width="75" height="81" rx="8" />
                  <rect x="525" y="351" width="75" height="41" rx="8" />
                  <rect x="105" y="176" width="75" height="216" rx="8" />
                  <rect x="210" y="237" width="75" height="155" rx="8" />
                  <rect x="420" y="205" width="75" height="187" rx="8" />
                  <rect x="315" y="83" width="75" height="309" rx="8" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
