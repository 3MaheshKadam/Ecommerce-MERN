import React from 'react'
import logo from '../assets/logo.png'
import SocialIcons from './SocialIcons'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Footer = () => {
  return (
    <footer className=' bg-tertiary py-8'>
      <div className="max-padd-container flexCenter flex-col gap-y-4 ">
      <Link to={'/'} className='flex items-center gap-x-2'>
        <img src={logo} alt="logoImg" height={31} width={31} />
        <span className='text-white bold-24 hidden xs:flex'>Kadam</span>
        </Link> 
        <div className="p-4">
        <Navbar containerStyles={"text-white flex xl:flex gap-x-5 xl:gap-x-10 medium-15 rounded-full px-2 py-1"}/>
        </div>
        <SocialIcons/>
        <hr className='h-[1px] w-2/3 my-3' />
        <div className="text-white">Copyright &copy; Kadam | All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer