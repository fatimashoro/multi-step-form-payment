import { useContext } from 'react';
import { PickAddContext } from "../context/UserContext";
import { SelectPlanContext } from '../context/UserContext';

const PickAddOneCard = ({ title,
     description,
      prize,
       handleTableClick,
       id 
    }) => {
    const { checkedValue } = useContext(SelectPlanContext);
    const {pickOneClicked} = useContext(PickAddContext)
     
  // this tells if card is selected on not 
      const isCurrentPickAddOneSelected = pickOneClicked?.find(item => item.id === id); 
 return (

        <div className={!isCurrentPickAddOneSelected ? 'hover:border-Purplish-blue px-4 inerdiv flex justify-between sm:w-128 sm:h-20 h-16 items-center border-2 rounded-xl' : 'inerdiv flex justify-between sm:w-128 sm:h-20 h-16 items-center border-2 rounded-xl border-Purplish-blue bg-Background px-4'}>
            <div className='flex'>
                <input className='w-5' type="checkbox" id="vehicle3" name="vehicle3" value="Boat" onClick={()=>handleTableClick(id,title,prize)} checked={isCurrentPickAddOneSelected} onChange={()=>isCurrentPickAddOneSelected}/>
                <div className='sm:ml-5 ml-4'>
                    <p className='font-semibold'>{title}</p>
                    <p className='text-sm text-Cool-gray'>{description}</p>
                </div>
            </div>

            <p className='text-Purplish-blue'>{`+$${prize}${!checkedValue ? '/mo' :'/yr' }`}</p>
        </div>
 )
}

export default PickAddOneCard  


