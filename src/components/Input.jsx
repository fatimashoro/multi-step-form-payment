import React from 'react'

const Input = ({ label, type, name, placeholder, value, onChange,loginErrors }) => {
    return (
        <>
            <div className="space-y-1">
                <label>{label}</label><br />
                <input className="border sm:w-128 w-80 h-11 rounded-md pl-3" type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange} />
            </div>
            <p className="text-Strawberry-red font-semibold flex justify-end">{loginErrors}</p>
        </>
    )
}

export default Input