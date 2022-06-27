import {SearchIcon} from "@heroicons/react/solid"
import { menuItems } from '../../data/menu';
import MenuItems from '../../components/menu_items/menu_items';
import SideBar from "../../components/sidebar/sidebar";
import { ChangeEvent,  useState } from "react";
 
const DashBoards = () =>{

    const[searchInput, setSearchInput]= useState<string>("")


     const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>{
         setSearchInput(event.target.value);
     }
     
     
    return (
        <section className="cursor-pointer w-screen flex flex-row">
           <SideBar />
            <section className="bg-slate-100 w-screen p-5 flex flex-col space-y-6">
               <section className='flex flex-row items-center space-x-4 '>
               <SearchIcon  className='' width={25}/>
               <input type="text"  placeholder='Search...' onChange={handleInputChange} className='bg-slate-100 border-b-2 border-black border-solid outline-none' />
               </section>
               <section className="grid grid-cols-3 place-items-center gap-16 p-20">
                  {menuItems.filter(menu => menu.title.toLowerCase().includes(searchInput.toLowerCase())).map(menu => <MenuItems  key={menu.id} title ={menu.title} icon= {menu.icon} description ={menu.description} id= {menu.id} />)}                      
               </section>
            </section>
        </section>
    );
}

export default DashBoards;