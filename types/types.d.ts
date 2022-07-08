import { StaticImageData } from "next/image"

export interface Menu {
  id: number
  icon: StaticImageData
  title: string
  description: string
}
