import React, { useContext } from 'react'
import { SelectPlanContext } from '../context/UserContext';

export const SelectPageCard = ({ title, prize, img, offer, id }) => {
    const { activeButton, setActiveButton } = useContext(SelectPlanContext);
    const { planType, setPlanType } = useContext(SelectPlanContext);

    // this tells which card is selected 
    const isCurrentPickAddOneSelected = planType && planType.id === id;

    const handleClick = () => {
        //check if the check box is already selected
        const ifALreadyExist = planType && planType.id === id;
        if (ifALreadyExist) {
            //if already ,jispe click kia hai usko chorke baqi sare checkboxes le ayga
            setPlanType({})
            setActiveButton(!activeButton)
        } else {
            //agr pehle se selected nahi hai , to pehle purane wale sare check boxes copy krenge taake wo deselect na hon 
            //aur phir puranon ke sath new wala check box bhi add krdenge list me 
            setPlanType({ ...planType, prize: prize, title: title, id: id })
            setActiveButton(!activeButton)
        }

    }

    return (
        <div className={!isCurrentPickAddOneSelected ? 'outerdiv border-2 sm:w-40 w-full rounded-xl hover:border-Purplish-blue ' : 'outerdiv border-2 sm:w-40 w-full rounded-xl border-Purplish-blue bg-Background'}>
            <div className='inerdiv sm:py-6 py-4 sm:px-4 px-2 sm:space-y-8 sm:space-x-0 space-x-4 flex sm:flex-col items-center sm:items-start' onClick={handleClick}>
                <div className='svg'>
                    {img}
                </div>
                <div>
                    <p>{title}</p>
                    <p className='text-Cool-gray'>{prize}</p>
                    <p className='text-sm'>{offer}</p>
                </div>

            </div>
        </div>
    )
}
