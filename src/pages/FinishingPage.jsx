import { useNavigate } from "react-router-dom";
import { SelectPlanContext, PickAddContext } from "../context/UserContext";
import { useContext } from "react";

export const FinishingPage = () => {
    //using context states
    const { planType, checkedValue } = useContext(SelectPlanContext);
    const { pickOne } = useContext(PickAddContext);

    ///counting totalvalues function for monthly value
    let total = 0;
    let value1 = 0;
    let value2 = 0;
    const coutingFuncMonthly = (a, b) => {
        let result1 = 0
        let result2 = 0
        if (a != "" && b != "" && a != '0' && a != '0') {
            return (
                value1 = a,
                value2 = b,
                result1 = value1.slice(2, 3),
                result2 = value2.slice(2, 3),
                total = parseInt(result1) + parseInt(result2)
                )
        }

    }

    //counting totalvalues function for yearly values
    const coutingFuncYearly = (a, b) => {
        let result1 = 0
        let result2 = 0
        if (a != "" && b != "" && a != '0' && a != '0') {
            return (
                value1 = a,
                value2 = b,
                result1 = value1.slice(2, 4),
                result2 = value2.slice(2, 4),
                total = parseInt(result1) + parseInt(result2)
            )
        }
        else{
            return total = 0
            
        }

    }
    //function call
    !checkedValue ? pickOne == "" ? coutingFuncMonthly("0", "0") : coutingFuncMonthly(pickOne[1], pickOne[3]) : pickOne == "" ? coutingFuncYearly("0", "0") : coutingFuncYearly(pickOne[1], pickOne[3])

    //navigator
    const navigate = useNavigate();
    return (

        <div className="sm:border-0 border rounded-xl sm:space-y-4 sm:px-24 px-7 sm:py-10 py-7 sm:w-full w-96 sm:relative absolute top-24 left-32 sm:top-0 sm:left-0 bg-white ">
            <div className="sm:mb-10">
                <h1 className="text-2xl font-extrabold  font-Ubuntu">Finishing Up</h1>
                <p className="text-Cool-gray my-2">Double Check everything looks ok before confirming.</p>
            </div>
            <div className="bg-Alabaster border-slate-50 rounded-xl sm:w-128 p-5">
                <div className='inerdiv flex justify-between items-center  '>
                    <div className=''>
                        <p className='font-semibold'>{planType ? planType.title : <h1>null</h1>} <span>{!checkedValue ? 'Monthly' : 'Yearly'}</span></p>
                        <button className='underline  text-Cool-gray hover:text-Purplish-blue' onClick={() => navigate("/selectplan")}>Change</button>
                    </div>
                    <p className='font-bold'>{!checkedValue ? '$9/mo' : '$90/yr'}</p>
                </div>
                <hr className="w-96 my-4" />
                <div className="flex justify-between items-cente">
                    <span className="text-Cool-gray my-2 text-sm">{pickOne ? pickOne[0] : <h1>hello</h1>}</span>
                    <span className=' text-sm'>{!checkedValue ? value1 : pickOne[1]}</span>
                </div>
                <div className="flex justify-between items-cente">
                    <span className="text-Cool-gray my-2 text-sm">{pickOne[2]}</span>
                    <span className=' text-sm'>{!checkedValue ? value2 : pickOne[3]}</span>
                </div>
            </div>
            <div className="flex justify-between items-cente p-5">
                <span className="text-Cool-gray my-2 text-sm">Total <span>{!checkedValue ? '(perMonth)' : '(PerYear)'}</span></span>
                <span className='text-Purplish-blue text-xl font-bold'>{!checkedValue ? <>{total != 0 ? `+$${9 + total}/mo` :`+$${0}/mo`}</> : <>{`+$${90 + total}/yr`}</>}</span>
            </div>
            <div className="flex sm:justify-around justify-between w-full absolute  sm:right-0 top-96 sm:top-[31rem] top-[29rem]  ">
                <button className="text-Cool-gray font-semibold" onClick={() => navigate("/pick-one")}>Go Back</button>
                <button class="bg-marine-blue hover:bg-Denim text-white font-bold py-3 px-6 rounded-lg" onClick={() => navigate("/final")}>Next Step</button>
            </div>
        </div>


    )
}
