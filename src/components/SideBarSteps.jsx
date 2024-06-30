import { NavLink } from "react-router-dom"

export const SideBarSteps = ({ pathto, step, information }) => {

  return (
    <>
      <div className='flex space-x-4 items-center'>
        <NavLink
          to={pathto}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }>
          <span className="border cursor-pointer h-8 w-8 rounded-full flex justify-center items-center hover:bg-Light-blue hover:text-black">
            {step}
          </span>
        </NavLink>
        <div className="">
          <p className="uppercase text-xs text-white text-Cool-gray"> Step {step}</p>
          <h1 className="font-semibold text-white uppercase">{information}</h1>
        </div>
      </div>
    </>
  )
}


