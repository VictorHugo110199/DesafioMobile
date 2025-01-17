import React, { createContext, useState, useContext } from 'react';

interface AuthContextData {
  user: { user: string } | null;
  token: string | null;
  setUser: React.Dispatch<React.SetStateAction<{user: string;} | null>>;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    
  const [user, setUser] = useState<{ user: string } | null>(null);
  const [token, setToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ user, token, setToken, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
