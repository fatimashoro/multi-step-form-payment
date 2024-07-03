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
  const [checkedValue, setCheckedValue] = useState(false);
  //button context 
  const [activeButton, setActiveButton] = useState(true)

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

// Combine both providers
export const CombinedProviders = ({ children }) => {
  return (
    <UserContextProvide>
      <SelectPlanContextProvider>
        <PickAddContextProvider>
          {children}
        </PickAddContextProvider>
      </SelectPlanContextProvider>
    </UserContextProvide>
  );
};