import './App.css'
import { FaBars } from "react-icons/fa";
import Navbar from './components/Navbar/Navbar';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logoUpride from '../src/assets/images/logoupride2 1.png'
import textUpride from '../src/assets/images/textUpride.png'
import HomeLogo from './assets/logos/HomeLogo';
import MyEarnings from './assets/logos/MyEarnings';
import MyAssets from './assets/logos/MyAssets';
import MyServices from './assets/logos/MyServices';
import branch from '../src/assets/images/Group 98.png'

const App = () => {
  const gradientStyle = {
    background: 'linear-gradient(180deg, #EB6B9D 0%, rgba(255, 87, 87, 0.70) 138.64%)',
    height: '100vh',
  };

  return (
    <>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content absolute lg:static">
          {/* Page content start */}
          <Navbar />
          <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden relative -top-[65px] left-2 "><FaBars /> </label>

          <Outlet></Outlet>
          {/* page content end */}

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul style={gradientStyle} className="menu p-4 w-80 min-h-ful text-white text-lg font-semibold">
            {/* Sidebar content here */}

            <li className='mb-5'>
              <Link className='flex'>
                <img src={logoUpride} alt="logo" />
                <img src={textUpride} alt="text" />
              </Link>
            </li>
            <li className='mb-5'>
              <img src={branch} alt="" />
            </li>
            <li className='mb-2'>
              <NavLink
                to='/'
                className={({ isActive }) => isActive ? "bg-[#d9d9d961] rounded-2xl flex items-center gap-3" : "flex items-center gap-3"}
              ><HomeLogo />  Home
              </NavLink>
            </li>
            <li className='mb-2'>
              <Link className='flex items-center gap-3'><MyEarnings /> My Earnings  </Link>
            </li>
            <li className='mb-2'>
              <Link className='flex items-center gap-3'><MyServices /> My Services  </Link>
            </li>
            <li className='mb-2'>
              <Link className='flex items-center gap-3'><MyAssets /> My Assets  </Link>
            </li>
          </ul>

        </div>
      </div>
    </>
  )
}

export default App
