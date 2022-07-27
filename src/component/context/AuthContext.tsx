import React, {createContext, useState,} from 'react'

export interface loginInterface{
isLoggedIn:boolean;
setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>;
}
export const loginContext = createContext <loginInterface | null>(null) 

type Props ={
    children?:React.ReactNode;
};
const AuthContext:React.FC<Props> = ({children}) => {
    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false);
    const loginContextValue = {
        isLoggedIn,setIsLoggedIn
    }
  return (
    <loginContext.Provider value= {loginContextValue}>{children}</loginContext.Provider>
  )
}

export default AuthContext