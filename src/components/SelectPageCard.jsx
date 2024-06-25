import React, { useContext, useState } from 'react'
import { SelectPlanContext } from '../context/UserContext';

export const SelectPageCard = ({ title, prize, img, offer }) => {
    const { planType, setPlanType } = useContext(SelectPlanContext);
    return (
        <div className='outerdiv border-2 sm:w-40 w-full rounded-xl hover:border-Purplish-blue hover:bg-Background'>
            <div className='inerdiv sm:py-6 py-4 sm:px-4 px-2 sm:space-y-8 sm:space-x-0 space-x-4 flex sm:flex-col items-center sm:items-start' onClick={() => setPlanType({ ...planType, prize: prize, title: title })}>
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
