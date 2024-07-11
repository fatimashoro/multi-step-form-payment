import { useNavigate } from "react-router-dom";
import { SelectPlanContext, PickAddContext } from "../context/UserContext";
import { useContext,useEffect } from "react";
import { NavigateContext } from "../context/UserContext";

export const FinishingPage = () => {
    //using context states
    const { checkedValue } = useContext(SelectPlanContext);
    const { pickOneClicked } = useContext(PickAddContext);
      /// getting contect for allowig to work navigation
  const {formFilled,setFormFilled } = useContext(NavigateContext)
    //navigator
    const navigate = useNavigate();
    //total sum logic
    let total = 0;
    const sumFunction = (a = '0', b = '0', c = '0') => {
        if (a !== "" && b !== "" && c !== "" && a !== '0' || a !== '0' || c !== '0') {
           // setFormFilled({...formFilled,SumOfAll:true})
            return (
                total = parseInt(a) + parseInt(b) + parseInt(c)
            )
        }
        else {
            total = 0
        }
    }
    if (pickOneClicked === "") {
        sumFunction();
    }
    else if (pickOneClicked.length === 1) {
        sumFunction(pickOneClicked[0].prize);
    } else if (pickOneClicked.length === 2) {
        sumFunction(pickOneClicked[0].prize, pickOneClicked[1].prize);
    } else if (pickOneClicked.length === 3) {
        sumFunction(pickOneClicked[0].prize, pickOneClicked[1].prize, pickOneClicked[2].prize);
    }

//making navbar icons clickable one,s this page is done
    useEffect(() => {
        setFormFilled({
          ...formFilled,
          SumOfAll: true,
        });
      }, []);

    return (

        <div className="sm:border-0 border rounded-xl sm:space-y-4 sm:px-24 px-7 sm:py-10 py-7 sm:w-full w-96 sm:relative absolute top-24 left-32 sm:top-0 sm:left-0 bg-white ">
            <div className="sm:mb-10">
                <h1 className="text-2xl font-extrabold  font-Ubuntu">Finishing Up</h1>
                <p className="text-Cool-gray my-2">Double Check everything looks ok before confirming.</p>
            </div>
            <div className="bg-Alabaster border-slate-50 rounded-xl sm:w-128 p-5">
                <div className='inerdiv flex justify-between items-center  '>
                    <div className=''>
                        <p className='font-semibold'>{pickOneClicked ? pickOneClicked.title : <h1>null</h1>} <span>{!checkedValue ? 'Monthly' : 'Yearly'}</span></p>
                        <button className='underline  text-Cool-gray hover:text-Purplish-blue' onClick={() => navigate("/selectplan")}>Change</button>
                    </div>
                    <p className='font-bold'>{!checkedValue ? '$9/mo' : '$90/yr'}</p>
                </div>
                <hr className="w-96 my-4" />
                {pickOneClicked.map((pickOneClicked, index) => (
                    <>
                        <div className="flex justify-between items-cente" key={index}>

                            <span className="text-Cool-gray my-2 text-sm">{pickOneClicked.title || "nothing selected"}</span>
                            <span className=' text-sm'>{!checkedValue ? ` +$${pickOneClicked.prize || "0"}/mo ` : ` +$${pickOneClicked.prize || "0"}/yr`}</span>
                        </div>
                    </>
                ))}
            </div>
            <div className="flex justify-between items-cente p-5">
                <span className="text-Cool-gray my-2 text-sm">Total <span>{!checkedValue ? '(perMonth)' : '(PerYear)'}</span></span>
                <span className='text-Purplish-blue text-xl font-bold'>{!checkedValue ? <>{total !== 0 ? `+$${9 + total}/mo` : `+$${0}/mo`}</> : <>{total !== 0 ? `+$${90 + total}/yr` : `+$${0}/yr`}</>}</span>
            </div>
            <div className="flex sm:justify-around justify-between w-full absolute  sm:right-0 top-96 sm:top-[31rem] top-[29rem]  ">
                <button className="text-Cool-gray font-semibold" onClick={() => navigate("/pick-one")}>Go Back</button>
                <button class="bg-marine-blue hover:bg-Denim text-white font-bold py-3 px-6 rounded-lg" onClick={() => navigate("/final")}>Finish</button>
            </div>
        </div>


    )
}





