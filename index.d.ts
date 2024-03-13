import { StaticImageData } from "next/image"

export interface fyjMenuSystems {
  id: number
  title: string
  description: string
  url: string
  icon: ForwardRefExoticComponent<Pick<SVGProps<SVGSVGElement>>>
}

export interface cloudEmrSystems {
  id: number
  county: string
  facility: string
  KenyaEMR_URL: string
  WebADT_URL: string
  DWAPI_URL: string
}

export interface MetaDataType {
  frameboarder: number
  allowFullScreen: string
}
export interface VisualizationType {
  id: string
  created_at: string
  title: string
  description: string
  source: string
  width: string
  height: string
  weight: number
  metadata: MetaDataType
  is_published: boolean
}
export interface Menu {
  id: string
  icon?: StaticImageData
  created_by?: string | null
  updated_by?: string
  visualizations?: Array<VisualizationType>
  created_at?: string
  updated_at?: string
  title: string
  description: string
  layout?: string
  weight?: number
  is_published?: boolean
}

export interface MenuTemp extends Menu {
  current: boolean
}
export type DictType = Record<undefined, undefined>;