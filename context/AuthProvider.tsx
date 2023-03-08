import { createContext, useState , useEffect } from "react";

export interface AuthState {
    accessToken? :string
    isLoggedIn: boolean
}

export interface AuthStore{
    auth: AuthState
    setAuth: React.Dispatch<React.SetStateAction<AuthState>>
    
}


const AuthContext = createContext<AuthStore>({} as AuthStore);

const AuthProvider = ({ children }:any) => {
    const [auth, setAuth] = useState<AuthState>({} as AuthState);

    useEffect(() => {
        const storedState = localStorage.getItem('auth');
        if (storedState) {
          setAuth(JSON.parse(storedState));
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(auth));
      }, [auth]);


    return (
        <AuthContext.Provider value={{ auth ,setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};