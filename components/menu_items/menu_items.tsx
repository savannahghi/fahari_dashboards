import { Menu } from "../../types/types";
import Image from "next/image";
import { useRouter } from "next/router";

const MenuItems = (props: Menu) =>{

    const router = useRouter();

    const navigateToPage = () =>{
       if(String(props.id).includes("1")){
          router.push('covid');     
       } 

       if(String(props.id).includes("2")){
         router.push('hts');
       }
    }

    return (
        <article className="text-center  w-80 h-44 hover:shadow-2xl hover:rounded-md cursor-pointer hover:scale-105" onClick={navigateToPage}> 
                   <Image src={props.icon}  width ={100} height ={100} className="" />
            <h1 className="font-semibold">{props.title}</h1>
            <p className=" font-light">{props.description}</p>
        </article>
    );
}

export default MenuItems;