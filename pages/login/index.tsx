import trends from '../../public/assets/images/trends.png'
import Image from 'next/image';
import { useRouter } from 'next/router';
import {useState, ChangeEvent, useEffect } from 'react';
import instance from 'axios';

interface InputState{
   username: string
   password: string
}

const LoginPage = () =>{

    const router = useRouter();
    
    const [inputs, setInputs] = useState<InputState>({
       username: '',
       password: ''
    });

    const handleChangeEvent = (event:ChangeEvent<HTMLInputElement>) =>{
      const value = event.target.value;
      setInputs({
        ...inputs,
        [event.target.name]: value
      })
  }
     
    const [loading, setLoading] = useState<boolean>(false);

    const [error, setError] = useState<boolean>(false)
   
    const {username, password} = inputs;

  
    const navigateToDashBoardPage = async () =>{
        
      router.push('dashboards');
    }

    
    return (
        <section className="grid grid-cols-2 h-screen">
           <section className=" bg-blue-500 flex flex-col justify-center items-center">
             <Image src={trends} width={500} height={300} />
        <h1 className="text-center font-semibold text-2xl relative right-11 antialiased tracking-wide text-white">Fahari ya Jamii Dashboards</h1>
           </section>
           <section className='p-10'>
             <h1 className="text-2xl font-medium">Login Page</h1>
             <form className=' flex flex-col space-y-6 mt-14'>
                <label htmlFor="username">Username</label>
                <input type='text' value={inputs.username} onChange={handleChangeEvent} id='username' name='username' placeholder='Enter your username' className="border-2 border-solid border-black p-3 w-4/5 rounded-md" />
                <label htmlFor="Password">Password</label>
                <input type="password" value={inputs.password} onChange ={handleChangeEvent} id='password' name='password' placeholder='Enter your password' className='border-2 border-solid border-black p-3 w-4/5 rounded-md' /> 
                 {loading ? <Image src= '/../public/assets/animations/98891-insider-loading.gif' className='object-contain' width={150} height={150} alt="loading spinner" /> :  <input type="button" onClick={navigateToDashBoardPage} value='Login' className='bg-blue-600 text-white block w-60 h-10 rounded-md font-semibold cursor-pointer' />}
             </form>
           </section>
        </section>
    );
}

export default LoginPage;