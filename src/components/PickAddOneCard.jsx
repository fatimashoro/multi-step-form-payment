import { useContext } from 'react';
import { PickAddContext } from "../context/UserContext";

const PickAddOneCard = ({ title, description, prize, id }) => {
    const {pickOneClicked, setPickOneClicked} = useContext(PickAddContext)
     
 // this tells if card is selected on not 
     const isCurrentPickAddOneSelected = pickOneClicked?.find(item => item.id === id);

     const handleTableClick = () => {
        //check if the check box is already selected
        const ifALreadyExist = pickOneClicked?.find(item => item.id === id);
 
        if(ifALreadyExist){
            //if already ,jispe click kia hai usko chorke baqi sare checkboxes le ayga
            const excludeCurrentPIck = pickOneClicked.filter(item => item.id !== id);

            //phir new pick ones ajaynge , jisme wo mnahi hoga jispe abhi click hua hai to wo deselect hojyga
            setPickOneClicked(excludeCurrentPIck);
        }else{
            //agr pehle se selected nahi hai , to pehle purane wale sare check boxes copy krenge taake wo deselect na hon 
            //aur phir puranon ke sath new wala check box bhi add krdenge list me 
            setPickOneClicked([...pickOneClicked , {id:id,title:title,prize:prize}]);
        }
    }


 return (

        <div className={!isCurrentPickAddOneSelected ? 'hover:border-Purplish-blue px-4 inerdiv flex justify-between sm:w-128 sm:h-20 h-16 items-center border-2 rounded-xl' : 'inerdiv flex justify-between sm:w-128 sm:h-20 h-16 items-center border-2 rounded-xl border-Purplish-blue bg-Background px-4'}>
            <div className='flex'>
                <input className='w-5' type="checkbox" id="vehicle3" name="vehicle3" value="Boat" onClick={handleTableClick} checked={isCurrentPickAddOneSelected} onChange={()=>isCurrentPickAddOneSelected}/>
                <div className='sm:ml-5 ml-4'>
                    <p className='font-semibold'>{title}</p>
                    <p className='text-sm text-Cool-gray'>{description}</p>
                </div>
            </div>

            <p className='text-Purplish-blue'>{prize}</p>
        </div>

    )
}

export default PickAddOneCard  