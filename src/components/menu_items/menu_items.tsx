import { Menu } from "../../types/types"
import Link from "next/link"

const MenuItems = (props: Menu) => {

  const id = props.id

  return (
    <>
      <div className="flex flex-col items-start justify-between bg-white rounded-xl shadow p-3">
        <div className="group relative">
          <h3 className="mt-3 text-xl font-semibold leading-6 text-indigo-700 group-hover:text-green-600">
            <Link href={`dashboards/${id}`}>
              <span className="absolute inset-0" />
              {props.title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-md leading-6 text-gray-600">
            {props.description}
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <div className="text-sm leading-6">
            <Link
              className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
              href={`dashboards/${id}`}
            >
              View Dashboard
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuItems
