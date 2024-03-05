import { useRouter } from "next/navigation"
import logo from "../../public/assets/images/usaid.png"
import Image from "next/image"
import { GoHome } from "react-icons/go";
import { BsBarChart } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi";
import { FaCog } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";

const SideBar = () => {
  const router = useRouter()

  return (
    <main className="bg-blue-500 h-[720px]">
      <section className=" flex flex-row space-x-5 items-center p-2 w-60">
        <Image src={logo} width={70} height={70} alt="sidebar_logo" />
        <h5 className="text-white text-base mt-2 font-semibold">
          Fahari ya Jamii
        </h5>
      </section>
      <section className="flex flex-col justify-center">
        <section
          className="flex flex-row items-center space-x-4 p-5 hover:opacity-50 hover:bg-transparent"
          data-testid="home"
          onClick={() => router.push("dashboards")}
        >
          <GoHome className=" text-white" width={30} data-testid="icon" />
          <h5 className="text-white text-base font-semibold antialiased">
            Home
          </h5>
        </section>
        <h5 className="text-white font-semibold p-3">DashBoards</h5>
        <section className="p-5 flex flex-col space-y-5">
          <section
            className=" flex flex-row space-x-4 items-center hover:opacity-50 hover:bg-transparent"
            data-testid="covid"
            onClick={() => router.push("covid")}
          >
            <BsBarChart
              className=" text-white"
              width={30}
              data-testid="icon"
            />
            <h5 className=" text-white font-semibold antialiased">Covid-19</h5>
          </section>
          <section
            className=" flex flex-row space-x-4 items-center hover:opacity-50 hover:bg-transparent"
            data-testid="hiv"
            onClick={() => router.push("hts")}
          >
            <FiPieChart
              className=" text-white"
              width={30}
              data-testid="icon"
            />
            <h5 className=" text-white font-semibold antialiased">
              HIV Services
            </h5>
          </section>
          <h5 className="text-white font-semibold -tracking-wider text-xl antialiased mt-7">
            Profile
          </h5>
          <section className="flex flex-row space-x-3 items-center hover:opacity-50 hover:bg-transparent">
            <BiUserCircle
              className="text-white"
              width={30}
              data-testid="icon"
            />
            <h5 className="text-white  font-semibold">Account</h5>
          </section>
          <section className="flex flex-row space-x-3 items-center hover:opacity-50 hover:bg-transparent">
            <FaCog className="text-white" width={30} data-testid="icon" />
            <h5 className="text-white  font-semibold">Settings</h5>
          </section>
        </section>
      </section>
    </main>
  )
}

export default SideBar
