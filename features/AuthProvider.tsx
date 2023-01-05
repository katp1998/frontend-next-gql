import React, { createContext, useState, useEffect } from "react";
import { User } from "../types/user.types";

export interface AuthState {
  accessToken?: string;
  isAuthenticated: boolean;
}

export interface AuthStore {
  auth: AuthState;
  setAuth: React.Dispatch<React.SetStateAction<AuthState>>;
}

const AuthContext = createContext<AuthStore>({} as AuthStore);

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    const storedState = localStorage.getItem("my-app-state");
    if (storedState) {
      setAuth(JSON.parse(storedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-app-state", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
