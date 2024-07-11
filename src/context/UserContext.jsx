import { createContext, useState } from 'react';
//create user  context
export const UserContext = createContext();

//user context provide
export const UserContextProvide = ({ children }) => {
  const [userData, setUserData] = useState({
    fname: "",
    email: "",
    phone: "",
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

// create selectplan context 
export const SelectPlanContext = createContext();
//selectplan context provide
export const SelectPlanContextProvider = ({ children }) => {
  const [planType, setPlanType] = useState({});
  //yearly and monthly selection based on this
  const [checkedValue, setCheckedValue] = useState(false);
  //button context 
  const [activeButton, setActiveButton] = useState(false)

  return (
    <SelectPlanContext.Provider value={{ planType, setPlanType, checkedValue, setCheckedValue, activeButton, setActiveButton }}>
      {children}
    </SelectPlanContext.Provider>
  );
}

//Pich adds Details context
export const PickAddContext = createContext();

//user context provide
export const PickAddContextProvider = ({ children }) => {
  const [pickOne, setPickOne] = useState([]);
  const [pickOneClicked, setPickOneClicked] = useState([])


  return (
    <PickAddContext.Provider value={{ pickOne, setPickOne, pickOneClicked, setPickOneClicked }}>
      {children}
    </PickAddContext.Provider>
  );
}

//contact for making navbar icons navigatable 
export const NavigateContext = createContext();

//user context provide
export const NavigateContextProvider = ({ children }) => {
  const [formFilled, setFormFilled] = useState({
    YourInfo: false,
    SelectPlan: false,
    AddOns: false,
    SumOfAll: false
  })

  return (
    <NavigateContext.Provider value={{ formFilled, setFormFilled }}>
      {children}
    </NavigateContext.Provider>
  );
}


// Combine both providers
export const CombinedProviders = ({ children }) => {
  return (
    <UserContextProvide>
      <SelectPlanContextProvider>
        <PickAddContextProvider>
          <NavigateContextProvider>
            {children}
          </NavigateContextProvider>
        </PickAddContextProvider>
      </SelectPlanContextProvider>
    </UserContextProvide>
  );
};



