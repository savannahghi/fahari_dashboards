import { cloudEmrs } from "@/data/constants"
import React from "react"

export default function CloudEmr() {
  return (
    <>
      <div className="py-4 mx-auto lg:px-8 lg:py-20">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="sm:text-4xl text-lg font-semibold leading-6 text-gray-900">
                Fahari ya Jamii CloudEMRs
              </h1>
              <p className="mt-2 text-sm sm:text-md text-gray-700">
                Links to Cloud Electronic Management Record Systems consisting
                of KenyaEMR, WebADT and DWAPI Systems{" "}
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <button
                type="button"
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add CloudEMR
              </button>
            </div>
          </div>
          <div className="mt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Facility
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    County
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-center text-gray-900"
                  >
                    KenyaEMR
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-center text-gray-900"
                  >
                    WebADT
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-center text-gray-900"
                  >
                    DWAPI_URL
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {cloudEmrs.map((emr) => (
                  <tr key={emr.id} data-testid="cloudemr">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {emr.id}
                    </td>
                    <td className="text-balance px-3 py-4 text-sm text-gray-500">
                      {emr.facility}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {emr.county}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                      <a
                        href={emr.KenyaEMR_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View{" "}
                        <span className="sr-only">, KenyaEMR Instance</span>
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                      <a
                        href={emr.WebADT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View <span className="sr-only">, WebADT Instance</span>
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                      <a
                        href={emr.DWAPI_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View
                        <span className="sr-only">, DWAPI Instance</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
