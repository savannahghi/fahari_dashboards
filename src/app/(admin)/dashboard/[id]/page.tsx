import { menuItems } from "@/data/menu"
import { MenuTemp } from "@types"
import { Metadata } from "next"

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id
  const dashboard = menuItems.find((item: MenuTemp) => item.id === id)

  return {
    title: dashboard?.title,
    description: dashboard?.description,
  }
}

type Props = {
  params: { id: string }
}

const ViewDashBoard = ({ params }: Props) => {
  const id = params.id
  const dashboard = menuItems.find((item: MenuTemp) => item.id === id)

  const visualization = dashboard?.visualizations
    ? dashboard?.visualizations[0]?.source
    : "https://app.powerbi.com/view?r=eyJrIjoiZGUyZjJlMzctMzhlYS00MzAyLTk1MTAtN2RjZTkzYmQ0Y2MwIiwidCI6IjYyNjg2NDAwLTllZjMtNDBkOS04ZTQxLWRiMTUzNzRiZTViZSJ9&pageName=ReportSection"

  return (
    <section className="cursor-pointer flex flex-row">
      <section className="bg-slate-100 w-screen p-5 flex flex-col space-y-6">
        <h1 className="sm:text-3xl text-lg font-bold">{dashboard?.title}</h1>
        <h2 className="text-md text-blue-800">{dashboard?.description}</h2>
        <section className="flex flex-col justify-center items-center">
          <iframe
            title={dashboard?.title}
            className="w-full h-screen"
            src={visualization}
          ></iframe>
        </section>
      </section>
    </section>
  )
}

export default ViewDashBoard
