import { PickAddContext } from "../context/UserContext";
import PickAddOneCard from "../components/PickAddOneCard"
import { useNavigate } from "react-router-dom";
import { SelectPlanContext } from "../context/UserContext";
import { useContext,useEffect } from "react";

export const PickAddOnePage = () => {
    const { checkedValue } = useContext(SelectPlanContext);
    const { pickOne, setPickOne, pickOneClicked } = useContext(PickAddContext);

    
//holding values when we come back again on same page
useEffect(() => {
    if (pickOne) {
        setPickOne(pickOne);
    }
}, [pickOne]);


    //handle click
    const handleClick = () => {
        if (pickOneClicked.length !== 0) {
            navigate("/finishing")
            setPickOne(pickOneClicked)
        }

    }

    //navigator 
    const navigate = useNavigate();
    return (

        <div className="sm:border-0 border rounded-xl  sm:px-24 px-7 py-10 sm:w-full w-96 sm:relative absolute top-24 left-32 sm:top-0 sm:left-0 bg-white ">
            <div>
                <h1 className="text-xl font-bold text-Denim font-Ubuntu">Pick-Add-ones</h1>
                <p className="text-Cool-gray my-2">Add-ones help enhance your gaming experience.</p>
            </div>
            <div className="commonCard flex flex-col  sm:mt-10 mt-4 space-y-4">
                {
                    !checkedValue ? <>
                        <PickAddOneCard id="online_service" title="Online Service" description="Access to multiplyer games" prize="+$1/mo" />
                        <PickAddOneCard id="arger_storage" title="Larger Storage" description="Extra 1TB of cloud save" prize="+$2/mo" />
                        <PickAddOneCard id="cusomizable_profile" title="Customizable Profile" description="Custom theme on your profile" prize="+$2/mo" />
                    </> :
                        <>
                            <PickAddOneCard id="online_service" title="Online Service" description="Access to multiplyer games" prize="+$10/yr" />
                            <PickAddOneCard id="arger_storage" title="Larger Storage" description="Extra 1TB of cloud save" prize="+$20/yr" />
                            <PickAddOneCard id="cusomizable_profile" title="Customizable Profile" description="Custom theme on your profile" prize="+$20/yr" />
                        </>
                }
            </div>
            <div className="flex sm:justify-around justify-between w-full absolute  sm:right-0 top-96 sm:top-[31rem] top-[29rem]  ">
                <button className="text-Cool-gray font-semibold" onClick={() => navigate("/selectplan")}>Go Back</button>
                <button class={pickOne === "" ? 'bg-gray-300 text-black cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg' : "bg-marine-blue hover:bg-Denim text-white font-bold py-3 px-6 rounded-lg"} onClick={handleClick}>Next Step</button>
            </div>
        </div>
    )
}
