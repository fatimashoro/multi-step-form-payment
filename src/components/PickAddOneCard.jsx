import { useContext } from 'react';
import { PickAddContext } from "../context/UserContext";

const PickAddOneCard = ({ title, description, prize }) => {
    const { pickOne, setPickOne } = useContext(PickAddContext);
    return (

        <div className='inerdiv flex justify-between sm:w-128 sm:h-20 h-16 items-center border-2 rounded-xl hover:border-Purplish-blue hover:bg-Background px-4'>
            <div className='flex'>
                <input className='w-5' type="checkbox" id="vehicle3" name="vehicle3" value="Boat" onClick={() => setPickOne((prev) => [...prev, title, prize])} />
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