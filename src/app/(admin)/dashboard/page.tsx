"use client"

import { ChangeEvent, useState } from "react"
import MenuItems from "@/components/menu_items/menu_items"
import { menuItems } from "@/data/menu"
import { HiOutlineCog } from "react-icons/hi";

const DashBoards = () => {
  const [searchInput, setSearchInput] = useState<string>("")

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }

  return (
    <section className="bg-slate-100 w-100 p-5 flex flex-col space-y-6 px-4 sm:px-6 lg:px-8">
      <section className="flex flex-row items-center space-x-4 ">
        <HiOutlineCog width={25} />
        <input
          type="text"
          placeholder="Search..."
          onChange={handleInputChange}
          className="bg-slate-100 border-b-2 border-black border-solid outline-none"
        />
      </section>
      <section className="grid mb-8 gap-8 rounded-lg shadow-sm md:mb-12 md:grid-cols-3">
        {menuItems
          .filter((menu) =>
            menu.title.toLowerCase().includes(searchInput.toLowerCase()),
          )
          .map((menu) => (
            <MenuItems
              key={menu.id}
              title={menu.title}
              description={menu.description}
              id={menu.id}
            />
          ))}
      </section>
    </section>
  )
}

export default DashBoards
