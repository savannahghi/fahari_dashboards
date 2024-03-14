"use client"

import { ChangeEvent, useState } from "react"
import { menuItems } from "@/data/menu"
import { MenuTemp } from "@types"

const DashBoards = () => {
  const [selectedDashboard, setSelectedDashboard] = useState<
    MenuTemp | undefined
  >(menuItems.length > 0 ? menuItems[0] : undefined)

  const handleDashboardSelection = (event: ChangeEvent<HTMLInputElement>) => {
    const dashboard =
      menuItems.find((item) => item.id === event.target.value) ?? undefined
    setSelectedDashboard(dashboard)
  }
  const visualization = selectedDashboard?.visualizations
    ? selectedDashboard?.visualizations[0]?.source
    : "https://app.powerbi.com/view?r=eyJrIjoiZGUyZjJlMzctMzhlYS00MzAyLTk1MTAtN2RjZTkzYmQ0Y2MwIiwidCI6IjYyNjg2NDAwLTllZjMtNDBkOS04ZTQxLWRiMTUzNzRiZTViZSJ9&pageName=ReportSection"

  return (
    <section className="bg-slate-100 w-100 p-5 flex flex-col space-y-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Dashboards
      </h1>
      <div className="flex flex-wrap">
        {menuItems?.map((dashboard: MenuTemp, index: number) => (
          <div
            key={index}
            data-testid={"filter-option"}
            className="flex flex-wrap items-center mb-2"
          >
            <input
              type="checkbox"
              id={dashboard.id}
              name={dashboard.title}
              data-testid={"filter-checkbox"}
              value={dashboard.id}
              checked={selectedDashboard?.id === dashboard.id}
              onChange={handleDashboardSelection}
              className="hidden"
            />
            <label
              htmlFor={dashboard.id}
              className={`flex items-center m-2 px-4 py-0.5 text-xs rounded-full text-center text-[13px] hover:text-white hover:bg-[#585aeb] 
                          ${
                            selectedDashboard?.id === dashboard.id
                              ? "bg-[#585aeb] text-white"
                              : "bg-white shadow-md"
                          }`}
            >
              {dashboard.title}
              <span className="text-2xl mx-1">+</span>
            </label>
          </div>
        ))}
      </div>
      <section className="cursor-pointer flex flex-row">
        <section className="bg-slate-100 w-screen p-5 flex flex-col space-y-6">
          <h3 className="sm:text-2xl text-lg text-blue-800 font-bold">
            {selectedDashboard?.title}
          </h3>
          <h2 className="text-md">{selectedDashboard?.description}</h2>
          <section className="flex flex-col justify-center items-center">
            <iframe
              title={selectedDashboard?.title}
              className="w-full h-screen"
              src={visualization}
            ></iframe>
          </section>
        </section>
      </section>
    </section>
  )
}

export default DashBoards
