import React from 'react'
import Link from 'next/link'
import {AiOutlineHome}from "react-icons/ai"
import {BsPerson} from "react-icons/bs"
import {MdOutlinePayment} from "react-icons/md"
import {HiOutlineDocumentText} from "react-icons/hi"
import {GoSignOut} from  "react-icons/go"


const Sidebar = () => {

  let Home = require('./assets/home.png');
  
  return (
    <div className='mt-[155px] ml-[30px]'>
        <ul className='flex flex-col txt-black bg-wash-grey text-2xl font-bold items-start gap-[30px]'>
    
            <Link href="/Dashboard">
              <li className='flex flex-row justify-center items-center gap-4'> <AiOutlineHome/> Dashboard</li>  
            </Link>

            <Link href="/Profile">
              <li className='flex flex-row justify-center items-center gap-4'> <BsPerson/>Profile Settings</li>
            </Link>                     
    
            <li className='flex flex-row justify-center items-center gap-4'> <MdOutlinePayment/>Payment</li>
            <li className='flex flex-row justify-center items-center gap-4'> <HiOutlineDocumentText/>Document</li>
            <li className='flex flex-row justify-center items-center gap-4'><GoSignOut/>Sign Out</li>
        </ul>
    </div>
  )
}

export default Sidebar