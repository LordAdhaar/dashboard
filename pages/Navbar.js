import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-black text-white col-start-1 col-end-3 items-center py-5 px-5 font-Roboto font-medium'>
        <h1 className='text-3xl'>EVAAHAN</h1>
        <ul className='flex gap-4 text-white text-2xl'>
            <li>3 Wheeler</li>
            <li>2 Wheeler</li>
            <li>4 Wheeler</li>
            <li>LCV</li>
            <li>Accessories</li>
        </ul>
        <ul className='flex gap-4 text-white text-2xl'>
            <li>Cart</li>
            <li>Account</li>
            <li>Menu</li>
        </ul>
    </nav>
  )
}

export default Navbar