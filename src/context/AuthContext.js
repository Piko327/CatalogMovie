import { createContext } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";
export const AuthContext= createContext()


export const AuthProvider=({ chidren})=>
    {
        const [auth,setAuth] = useLocalStorage('auth',{})
        const setLogin=(userData)=>setAuth(userData)

return <AuthContext.Provider  value={{auth,setLogin}}>
    {chidren}
    </AuthContext.Provider>
    
}