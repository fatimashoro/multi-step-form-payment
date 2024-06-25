import { useState, useContext } from "react";
import { SideBar } from "../components/SideBar"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const PersonalInfo = () => {
    const [userInfo, setUserInfo] = useState({
        fname: "",
        email: "",
        phone: "",
    });
    const [loginErrors, setLoginErrors] = useState({});
    const { setUserData } = useContext(UserContext);

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
        }
    }
    //handle Onchange
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setUserInfo({ ...userInfo, [name]: value })
    }
    return (
        <section className="sm:flex  bg-Background sm:justify-center sm:py-20 h-100vh ">
            <div class="sm:flex  sm:border rounded-lg sm:bg-white  bg-Background outerdiv sm:p-6">
                <div class=" innerdiv relative sm:static ">
                    <SideBar />

                </div>
                <div class="  innerdiv2 absolute sm:static left-20 bottom-0 top-20  ">
                    <div className="sm:px-20  space-y-4 sm:w-[38rem] w-96 border sm:border-0 bg-white rounded-xl  px-10 py-11">
                        <div>
                            <h1 className="text-xl font-bold text-Denim font-Ubuntu">Personal Info</h1>
                            <p className="text-Cool-gray mt-2">Please provide your name, email address, and phone number</p>
                        </div>

                        <div>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="space-y-1">
                                    <label>Name</label><br />
                                    <input className="border sm:w-128 w-80 h-11 rounded-md pl-3" type="text" id="fname" name="fname" placeholder="eg. Stephin King" onChange={handleChange} />
                                </div>
                                <p className="text-Strawberry-red font-semibold flex justify-end">{loginErrors.fname}</p>
                                <div className="space-y-1">
                                    <label>Email Address</label><br />
                                    <input className="border sm:w-128 w-80 h-11 rounded-md pl-3" type="text" id="email" name="email" placeholder="eg. StephinKing@gmail.com" onChange={handleChange} />
                                </div>
                                <p className="text-Strawberry-red font-semibold flex justify-end">{loginErrors.email}</p>
                                <div className="space-y-1">
                                    <label >Phone Number</label><br />
                                    <input className="border sm:w-128 w-80 h-11 rounded-md pl-3" type="text" id="phone" name="phone" placeholder="eg. 02233170" onChange={handleChange} />
                                </div>
                                <p className="text-Strawberry-red font-semibold flex justify-end">{loginErrors.phone}</p>
                                <div className="flex justify-end " style={{ marginTop: "90px" }}>
                                    <button type="submit" class="bg-marine-blue hover:bg-Denim text-white font-bold py-3 px-6 rounded-lg" >Next Step</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}



