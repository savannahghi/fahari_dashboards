"use client"

import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { BsSearch, BsBell, BsChevronDown } from "react-icons/bs"

import Image from "next/image"
import pepfarLogo from "@images/pepfar.png"
import uonLogo from "@images/uon.png"
import logo from "@images/usaid.png"
import idrServerLogo from "@images/idr-server-logo.png"

const userNavigation = [{ name: "Sign out", href: "#" }]

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ")
}
const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-40 sm:flex hidden h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        {/* Separator */}
        <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form className="relative flex flex-1" action="#" method="GET">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <BsSearch
              className="hidden pointer-events-none absolute inset-y-0 left-0 h-full w-5 ml-2 text-gray-400"
              aria-hidden="true"
            />
            <input
              id="search-field"
              className="hidden h-full w-full border-0 py-0 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
              placeholder="Search..."
              type="search"
              name="search"
            />
          </form>
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <Image
              height={40}
              width={40}
              className="h-8 w-8 rounded-full bg-gray-50"
              src={pepfarLogo}
              alt="pepfar Logo"
            />
            <Image
              height={40}
              width={40}
              className="h-8 w-8 rounded-full bg-gray-50"
              src={logo}
              alt="usaid Logo"
            />
            <Image
              height={40}
              width={40}
              className="h-8 w-8 rounded-full bg-gray-50"
              src={uonLogo}
              alt="Uon Logo"
            />
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View notifications</span>
              <BsBell className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
              aria-hidden="true"
            />

            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="-m-1.5 flex items-center p-1.5">
                <span className="sr-only">Open user menu</span>
                <Image
                  className="h-8 w-8 rounded-full bg-gray-50"
                  src="https://storage.googleapis.com/idr_server/static/images/undraw_profile.svg"
                  height={8}
                  width={8}
                  alt="User Logo"
                />
                <span className="hidden lg:flex lg:items-center">
                  <span
                    className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                    aria-hidden="true"
                  >
                    User X
                  </span>
                  <BsChevronDown
                    className="ml-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900",
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-40 flex sm:hidden h-16 shrink-0 items-center justify-between gap-x-4 bg-[#2f3091] px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex h-16 shrink-0 items-center flex-row space-x-5">
            <Image
              src={idrServerLogo}
              width={70}
              height={70}
              alt="sidebar_logo"
              className="h-10 w-auto"
            />
            <h5 className="text-white text-base mt-2 font-semibold">
              DATA REPOSITORY
            </h5>
          </div>
        </div>

        {/* Profile dropdown */}
        <Menu as="div" className="relative">
          <Menu.Button className="-m-1.5 flex items-center p-1.5">
            <span className="sr-only">Open user menu</span>
            <Image
              className="h-8 w-8 rounded-full bg-gray-50"
              src="https://storage.googleapis.com/idr_server/static/images/undraw_profile.svg"
              height={8}
              width={8}
              alt="User Logo"
            />
            <span className="hidden lg:flex lg:items-center">
              <span
                className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                aria-hidden="true"
              >
                User X
              </span>
              <BsChevronDown
                className="ml-2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={classNames(
                        active ? "bg-gray-50" : "",
                        "block px-3 py-1 text-sm leading-6 text-gray-900",
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  )
}

export default Header
