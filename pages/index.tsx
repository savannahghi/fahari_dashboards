import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import logo from '../public/assets/images/usaid.png';
 const SplashScreen = () =>{

  const router = useRouter();

  useEffect(()=>{
  
    const timer = setTimeout(()=>{
        router.push('login');
    }, 2000);

     return () => clearTimeout(timer);
    
  },[router]);
   return (

     <section className=" bg-gray-300 flex flex-col justify-center items-center h-screen">
         <Head>
           <title></title>
         </Head>
      <Image src={logo} width={300} height ={300} alt='fahari_ya_jamii_logo'  className="translate-x-5" />
      <h1 className="text-center text-2xl relative left-6 antialiased tracking-wide font-semibold">Fahari ya Jamii</h1>
     </section>
  
    
   );
 }

 export default SplashScreen