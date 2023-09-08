import React, { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import SidebarLinkGroup from './SidebarLinkGroup'
import Logo from '../logo.svg'
import {PiGameControllerBold} from "react-icons/pi";
import {FaRankingStar} from "react-icons/fa6";
import {BiSolidBusiness} from "react-icons/bi";
import {BsThreeDots} from "react-icons/bs";
import {RiTokenSwapLine} from "react-icons/ri";
import {MdOutlineApi} from "react-icons/md";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation()
  const { pathname } = location

  const trigger = useRef(null)
  const sidebar = useRef(null)

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  )

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return
      setSidebarOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded)
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded')
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded')
    }
  }, [sidebarExpanded])

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden  duration-300 ease-linear bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className='flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5'>
        <NavLink to='/'>
          <img src={Logo} alt='Logo' />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls='sidebar'
          aria-expanded={sidebarOpen}
          className='block lg:hidden'
        >
          <svg
            className='fill-current'
            width='20'
            height='18'
            viewBox='0 0 20 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z'
              fill=''
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
        {/* <!-- Sidebar Menu --> */}
        <nav className='mt-5 py-4 px-4 lg:mt-9 lg:px-6'>
          {/* <!-- Menu Group --> */}
          <div>
            <img src="avatar.png" className="items-center"/>
            <ul className='mb-6 flex flex-col gap-1.5'>
              {/* <!-- Menu Item Ranking dapps --> */}
              <li>
                <NavLink
                  to='/rankingdapps'
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-meta-4 ${
                    pathname.includes('calendar') &&
                    'bg-meta-4'
                  }`}
                >
                  <FaRankingStar/>
                  Ranking dapps
                </NavLink>
              </li>
              {/* <!-- Menu Item Ranking dapps --> */}
              {/* <!-- Menu Item Games --> */}
              <li>
                <NavLink
                  to='/games'
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-meta-4 ${
                    pathname.includes('calendar') &&
                    'bg-meta-4'
                  }`}
                >
                  <PiGameControllerBold/>
                  Games
                </NavLink>
              </li>
              {/* <!-- Menu Item Games dapps --> */}
              {/* <!-- Menu Item Defi TVL --> */}
              <li>
                <NavLink
                  to='/defitvl'
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-meta-4 ${
                    pathname.includes('calendar') &&
                    'bg-meta-4'
                  }`}
                >
                  <BiSolidBusiness/>
                  Defi TVL
                </NavLink>
              </li>
              {/* <!-- Menu Item Defi TVL --> */}
              {/* <!-- Menu Item Other dapps --> */}
              <li>
                <NavLink
                  to='/otherdapps'
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-meta-4 ${
                    pathname.includes('calendar') &&
                    'bg-meta-4'
                  }`}
                >
                  <BsThreeDots/>
                  Other dapps
                </NavLink>
              </li>
              {/* <!-- Menu Item Other dapps --> */}
              {/* <!-- Menu Item Tokens dapps --> */}
              <li>
                <NavLink
                  to='/tokens'
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-meta-4 ${
                    pathname.includes('calendar') &&
                    'bg-meta-4'
                  }`}
                >
                  <RiTokenSwapLine/>
                  Tokens
                </NavLink>
              </li>
              {/* <!-- Menu Item Ranking dapps --> */}
              {/* <!-- Menu Item API Subscription --> */}
              <li>
                <NavLink
                  to='/apisubscription'
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-meta-4 ${
                    pathname.includes('calendar') &&
                    'bg-meta-4'
                  }`}
                >
                  <MdOutlineApi/>
                  API Subscription
                </NavLink>
              </li>
              {/* <!-- Menu Item API Subscription --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  )
}

export default Sidebar;
