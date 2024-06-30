import { Outlet, NavLink } from "react-router-dom";

import './Home.css'
export const Practice = () => {
  return (
    
    <>
    <header>
      <nav className="navbar">
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
       
        </ul>
      </nav>
    </header>
   
  </>

   
  )
}
