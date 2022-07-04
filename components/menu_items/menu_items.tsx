import { Menu } from "../../types/types"
import Image from "next/image"
import { useRouter } from "next/router"

const MenuItems = (props: Menu) => {
  const router = useRouter()

  const navigateToPage = () => {
    if (String(props.id).includes("1")) {
      router.push("covid")
    }

    if (String(props.id).includes("2")) {
      router.push("hts")
    }
  }

  return (
    <section
      className="text-center  w-80 h-44 hover:shadow-2xl hover:rounded-md cursor-pointer hover:scale-105"
      onClick={navigateToPage}
      data-testid="click"
    >
      <Image src={props.icon} width={100} height={100} alt="menu_logo" />
      <h1 className="font-semibold">{props.title}</h1>
      <p className=" font-light" data-testid="paragraph">
        {props.description}
      </p>
    </section>
  )
}

export default MenuItems
