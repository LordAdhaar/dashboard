import React, {useState} from 'react'
import Sidebar from "./Sidebar.js"
import Navbar from "./Navbar.js"
import Name from "./ProfileComponents/Name.js"
import Phone from "./ProfileComponents/Phone.js"
import Email from "./ProfileComponents/Email.js"
import PickAddress from './ProfileComponents/PickAddress.js'

const Profile = () => {

  return (
    <div>
      <Navbar/>
      <div className='flex flex-row justify-around'>
        <Sidebar/>
        <div>
          <h1 className='text-[40px] font-bold'>PROFILE</h1>
          <ul id="userInfo" className='grid grid-cols-3 grid-rows-2 text-2xl font-bold'>
            <Name/>
            <Phone/>
            <Email/>
            <PickAddress/>
            <li>Shipping Address</li>
            <li>Multi Factor Authentication
              <p className="text-base font-normal">Add an additional layer of security to your account</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile