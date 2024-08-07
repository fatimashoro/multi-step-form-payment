import { SelectPageCard } from "../components/SelectPageCard"
import { MonthlyData, YearlyData } from "../Data"
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react"
import { SelectPlanContext } from "../context/UserContext";
import { UserContext } from "../context/UserContext";


const SelectPage = () => {
  const { checkedValue, setCheckedValue, planType } = useContext(SelectPlanContext);

  //navigator
  const navigate = useNavigate();
  //submit functionality
  const handleSubmit = () => {
    if (planType.length != 0) {
      navigate("/pick-one")
    }
  }

  return (
    <>

      <div className="sm:border-0 border rounded-xl  sm:px-24 px-7 py-10 sm:w-full w-96 sm:relative absolute top-24 left-32 sm:top-0 sm:left-0 bg-white ">
        <div>
          <h1 className="text-xl font-bold text-Denim font-Ubuntu">Select Your plan</h1>
          <p className="text-Cool-gray my-2">You have options of Monthly & Yearly plan</p>
        </div>
        <div className="commonCard flex flex-col sm:flex-row sm:mt-10 mt-4 sm:space-x-4 sm:space-y-0 space-y-4">
          {
            !checkedValue ? MonthlyData.map((item) => {
              return (
                <>
                  <SelectPageCard key={item.id} img={item.img} prize={item.prize} title={item.title} />
                </>)
            })
              : YearlyData.map((item) => {
                return (
                  <>
                    <SelectPageCard key={item.id} img={item.img} prize={item.prize} title={item.title} offer="2 months free" />
                  </>)
              })
          }
        </div>
        <div className="rounded-lg h-12 flex justify-center bg-Background mt-9">
          <label className="inline-flex items-center cursor-pointer">
            <span className={`mr-2 text-sm font-medium ${!checkedValue ? 'text-gray-900' : 'text-gray-400 dark:text-gray-300'}`}>Monthly</span>
            <input type="checkbox" value="" className="sr-only peer" checked={checkedValue} onChange={(e) => setCheckedValue(!checkedValue)} />
            <div className="relative w-11 h-6 bg-Denim peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all "></div>
            <span className={`ml-2 text-sm font-medium ${!checkedValue ? 'text-gray-400' : 'text-gray-900 dark:text-gray-300'}`}>Yearly</span>
          </label>
        </div>
        <div className="flex sm:justify-around justify-between w-full absolute  sm:right-0 top-96 sm:top-[31rem] top-[35rem]  ">
          <button className="text-Cool-gray font-semibold" onClick={() => navigate("/")}>Go Back</button>
          <button className={planType == "" ? 'bg-gray-300 text-black cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg' : "bg-marine-blue hover:bg-Denim text-white font-bold py-3 px-6 rounded-lg"} onClick={handleSubmit} >Next Step</button>
        </div>
      </div>
    </>

  )
}

export default SelectPage
