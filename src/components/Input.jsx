import React, { useState,useEffect } from 'react'

const Input = ({ label, type, name, placeholder, value, onChange,loginErrors }) => {
    //before it was not reflecting the input's  e.target.v thats why i created this state 
    const [error, setError] = useState()
    useEffect(()=>{
        setError(loginErrors)
    },[loginErrors])
    return (
        <>
            <div className="space-y-1">
                <label>{label}</label><br />
                <input className="border sm:w-128 w-80 h-11 rounded-md pl-3 focus:outline-none focus:ring-1 focus:ring-blue-500" type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange} />
            </div>
            <p className="text-Strawberry-red font-semibold flex justify-end">{error}</p>
        </>
    )
}

export default Input