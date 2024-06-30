import { useState, useContext, useEffect } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";



export const PersonalInfo = () => {
    const [userInfo, setUserInfo] = useState({
        fname: "",
        email: "",
        phone: "",
    });
    const [loginErrors, setLoginErrors] = useState({});
    const { setUserData, userData } = useContext(UserContext);
   
    //getting button context
    const {activeButton,setActiveButton} = useContext(UserContext)


    useEffect(() => {
        if (userData) {
            setUserInfo(userData);
        }
    }, [userData]);


    //handle input erros logic
    const validateForm = (inputvalues) => {
        const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const error = {}
        if (inputvalues.fname.length == 0) {
            error.fname = "This field is required"
        }
        if (inputvalues.email.length == 0) {
            error.email = "This field is required"
        }
        else if (!validRegex.test(inputvalues.email)) {
            error.email = "Please Enter Valid Email"

        }
        if (inputvalues.phone.length == 0) {
            error.phone = "This field is required"
        }
        else if (inputvalues.phone.length < 10 || inputvalues.phone.length > 10) {
            error.phone = "number must be lenth of 10"
        }
        return error
    }

    //navigator 
    const navigate = useNavigate();

    //submit functionality
    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = validateForm(userInfo)
        setLoginErrors(validationErrors)
        if (Object.keys(validationErrors).length === 0) {
            setUserData(userInfo)
            navigate('/selectplan')
            setActiveButton(true)
        }
    }
    //handle Onchange
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setUserInfo({ ...userInfo, [name]: value })

        if (Object.keys(validateForm(userInfo)).length === 0) {
          
            setActiveButton(true)
        }
    }
    return (
        <div class="  innerdiv2 absolute sm:static left-20 bottom-0 top-20  ">
            <div className="sm:px-20  space-y-4 sm:w-[38rem] w-96 border sm:border-0 bg-white rounded-xl  px-10 py-11">
                <div>
                    <h1 className="text-xl font-bold text-Denim font-Ubuntu">Personal Info</h1>
                    <p className="text-Cool-gray mt-2">Please provide your name, email address, and phone number</p>
                </div>

                <div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                       <Input label='Name' type='text' name='fname' placeholder="eg. Stephin King" value={userInfo.fname} onChange={handleChange} loginErrors={loginErrors.fname}/>
                       <Input label='Email Adress' type='email' name='email' placeholder="eg. StephinKing@gmail.com" value={userInfo.email} onChange={handleChange} loginErrors={loginErrors.email}/>
                       <Input label='Phone number' type='number' name='phone' placeholder="eg. 02233170" value={userInfo.phone} onChange={handleChange} loginErrors={loginErrors.phone}/>
                       
                        <div className="flex justify-end " style={{ marginTop: "90px" }}>

                            <button type="submit" class={activeButton ? "bg-marine-blue hover:bg-Denim text-white font-bold py-3 px-6 rounded-lg" : 'bg-gray-300 text-black cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg'}>Next Step</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}




