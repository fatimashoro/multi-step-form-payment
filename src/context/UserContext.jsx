import { createContext, useState } from 'react';
//create user  context
export const UserContext = createContext();

//user context provide
export const UserContextProvide = ({ children }) => {
  const [userData, setUserData] = useState();
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

// selectplan context 
export const SelectPlanContext = createContext();
//selectplan context provide
export const SelectPlanContextProvider = ({ children }) => {
  const [planType, setPlanType] = useState([]);
  const [checkedValue, setCheckedValue] = useState(false); // Default to 'monthly'

  return (
    <SelectPlanContext.Provider value={{ planType, setPlanType, checkedValue, setCheckedValue }}>
      {children}
    </SelectPlanContext.Provider>
  );
}

//Pich adds Details context
export const PickAddContext = createContext();

//user context provide
export const PickAddContextProvider = ({ children }) => {
  const [pickOne, setPickOne] = useState([]);
  return (
    <PickAddContext.Provider value={{ pickOne, setPickOne }}>
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