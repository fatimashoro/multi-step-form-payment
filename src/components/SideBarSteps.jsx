import { useNavigate } from "react-router-dom"

export const SideBarSteps = (props) => {

  return (
    <>
      <div className='flex space-x-4 items-center'>
        <span className='border cursor-pointer h-8 w-8 rounded-full flex justify-center items-center hover:bg-Light-blue hover:text-black text-white font-semibold' onClick={props.onClick}>{props.number}</span>
        <div className="">
          <p className="uppercase text-xs text-white text-Cool-gray">{props.step}</p>
          <h1 className="font-semibold text-white uppercase">{props.information}</h1>
        </div>
      </div>
    </>
  )
}
