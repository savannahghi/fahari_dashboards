import { Menu } from "../types/types"
import CovidLogo from '../public/assets/images/covid.png'
import HivLogo from '../public/assets/images/AIDS Ribbonhiv.png'
export const menuItems:Menu[] = [
    {
       id: 1,
       icon: CovidLogo,
       title: 'COVID-19 vaccination RRI',
       description: 'View Covid-19 Statically data'
    },
    { 
        id: 2,
        icon: HivLogo,
        title: 'HIV services, Care & Treatment',
        description: 'View HIV & AIDS Statically data'
     },
     {
        id: 3,
        icon: HivLogo,
        title: '',
        description: 'View Malaria Statically data'
     }, 
]

