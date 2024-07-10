import React from 'react'
import { SelectPlanContext } from '../context/UserContext'
import { useContext } from 'react';

export const SelectPageCard = ({ title, prize, img, offer,isCurrentPickAddOneSelected,handleClick }) => {
    const { checkedValue} = useContext(SelectPlanContext);
    return (
        <div className={!isCurrentPickAddOneSelected ? 'outerdiv border-2 sm:w-40 w-full rounded-xl hover:border-Purplish-blue ' : 'outerdiv border-2 sm:w-40 w-full rounded-xl border-Purplish-blue bg-Background'}>
            <div className='inerdiv sm:py-6 py-4 sm:px-4 px-2 sm:space-y-8 sm:space-x-0 space-x-4 flex sm:flex-col items-center sm:items-start' onClick={handleClick}>
                <div className='svg'>
                    {img}
                </div>
                <div>
                    <p>{title}</p>
                    <p className='text-Cool-gray'>{` $${prize}${!checkedValue ? '/mo' :'/yr' } `}</p>
                    <p className='text-sm'>{offer}</p>
                </div>

            </div>
        </div>
    )
}
