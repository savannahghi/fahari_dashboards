"use client"

import Image from "next/image"
import { HiChartBar, HiOutlineHome, HiOutlineCog } from "react-icons/hi"
import { BsDatabaseUp } from "react-icons/bs"

import idrServerLogo from "@images/idr-server-logo.png"
import Link from "next/link"
import { HiMiniCloudArrowUp } from "react-icons/hi2"
import { usePathname } from "next/navigation"

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ")
}

type Props = {
  collapsed: boolean
  setCollapsed: () => void
}
const Sidebar = ({ collapsed, setCollapsed }: Props) => {
  const pathname = usePathname()

  const activeMenu = (path: string) => {
    return pathname.includes(path) ? "bg-blue-600 text-white" : "text-gray-100"
  }
  return (
    <>
      {/* Static sidebar for desktop */}
      <div className="lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col">
        <div
          className={`flex hidden xl:flex grow flex-col gap-y-5 overflow-y-auto bg-[#2f3091] pb-4 ${
            collapsed ? "px-3" : "px-6"
          }`}
        >
          <div
            className={`${
              collapsed ? "mt-3" : "flex items-center justify-between"
            }`}
          >
            {!collapsed && (
              <Link href="/">
              <div className="flex h-16 shrink-0 items-center flex-row space-x-5">
                <Image
                  src={idrServerLogo}
                  width={70}
                  data-testid="idrLogo"
                  height={70}
                  alt="sidebar_logo"
                  className="h-10 w-auto"
                />
                <h5 className="text-white text-base mt-2 font-semibold">
                  DATA REPOSITORY
                </h5>
              </div>
              </Link>
            )}
            <button
              className="grid place-content-center hover:bg-gray-400 text-white w-10 h-10 rounded-full"
              data-testid="navToggle"
              onClick={setCollapsed}
            >
              <span className="sr-only">Toggle Navigation</span>
              <BsDatabaseUp className="w-6 h-6" />
            </button>
          </div>
          <nav
            className={`flex flex-1 flex-col ${
              collapsed
                ? "hidden"
                : "transition-all duration-300 ease-in-out md:translate-x-0 -translate-x-full"
            }`}
          >
            <ul role="list" className="flex flex-1 flex-col">
              <li className="py-2">
                <Link
                  data-testid="adminLinkOpen"
                  href="/admin"
                  className={classNames(
                    activeMenu("admin"),
                    "text-gray-100 p-2 hover:text-white hover:bg-blue-600",
                    "group flex gap-x-3 rounded-md text-sm leading-6 font-semibold",
                  )}
                >
                  <HiOutlineHome
                    className={classNames(
                      "text-gray-100 group-hover:text-white",
                      "h-6 w-6 shrink-0",
                    )}
                    aria-hidden="true"
                  />
                  Admin
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/dashboards"
                  className={classNames(
                    activeMenu("dashboards"),
                    "text-gray-100 p-2 hover:text-white hover:bg-blue-600",
                    "group flex gap-x-3 rounded-md text-sm leading-6 font-semibold",
                  )}
                >
                  <HiChartBar
                    className={classNames(
                      "text-gray-100 group-hover:text-white",
                      "h-6 w-6 shrink-0",
                    )}
                    aria-hidden="true"
                  />
                  Dashboards
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/systems"
                  className={classNames(
                    activeMenu("systems"),
                    "text-gray-100 p-2 hover:text-white hover:bg-blue-600",
                    "group flex gap-x-3 rounded-md text-sm leading-6 font-semibold",
                  )}
                >
                  <HiOutlineCog
                    className={classNames(
                      "text-gray-100 group-hover:text-white",
                      "h-6 w-6 shrink-0",
                    )}
                    aria-hidden="true"
                  />
                  Systems
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/cloudemr"
                  className={classNames(
                    activeMenu("cloudemr"),
                    "text-gray-100 p-2 hover:text-white hover:bg-blue-600",
                    "group flex gap-x-3 rounded-md text-sm leading-6 font-semibold",
                  )}
                >
                  <HiMiniCloudArrowUp
                    className={classNames(
                      "text-gray-100 group-hover:text-white",
                      "h-6 w-6 shrink-0",
                    )}
                    aria-hidden="true"
                  />
                  Cloud EMR Instances
                </Link>
              </li>
            </ul>
          </nav>

          <nav
            className={`flex flex-1 flex-col ${
              collapsed
                ? "transition-all duration-300 ease-in-out md:translate-x-0 -translate-x-full"
                : "hidden"
            }`}
          >
            <ul role="list" className="flex flex-1 flex-col">
              <li className="py-2">
                <Link
                  href="/admin"
                  data-testid="adminLinkClosed"
                  title="admin"
                  className={classNames(
                    activeMenu("admin"),
                    "text-white p-2 hover:text-white hover:bg-blue-600",
                    "group flex gap-x-3 rounded-md text-sm leading-6 font-semibold",
                  )}
                >
                  <HiOutlineHome
                    className={classNames(
                      "text-gray-100 group-hover:text-white",
                      "h-6 w-6 shrink-0",
                    )}
                    aria-hidden="true"
                  />
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/dashboards"
                  title="Dashboards"
                  className={classNames(
                    activeMenu("dashboards"),
                    "text-gray-100 p-2 hover:text-white hover:bg-blue-600",
                    "group flex gap-x-3 rounded-md text-sm leading-6 font-semibold",
                  )}
                >
                  <HiChartBar
                    className={classNames(
                      "text-gray-100 group-hover:text-white",
                      "h-6 w-6 shrink-0",
                    )}
                    aria-hidden="true"
                  />
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/systems"
                  title="Systems"
                  className={classNames(
                    activeMenu("systems"),
                    "text-gray-100 p-2 hover:text-white hover:bg-blue-600",
                    "group flex gap-x-3 rounded-md text-sm leading-6 font-semibold",
                  )}
                >
                  <HiOutlineCog
                    className={classNames(
                      "text-gray-100 group-hover:text-white",
                      "h-6 w-6 shrink-0",
                    )}
                    aria-hidden="true"
                  />
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/cloudemr"
                  title="Cloud EMR Instances"
                  className={classNames(
                    activeMenu("cloudemr"),
                    "text-gray-100 p-2 hover:text-white hover:bg-blue-600",
                    "group flex gap-x-3 rounded-md text-sm leading-6 font-semibold",
                  )}
                >
                  <HiMiniCloudArrowUp
                    className={classNames(
                      "text-gray-100 group-hover:text-white",
                      "h-6 w-6 shrink-0",
                    )}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Sidebar
