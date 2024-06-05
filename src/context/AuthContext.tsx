import React, { createContext, useContext, useState, ReactNode, FC } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const defaultAuthValue: AuthContextType = {
  isAuthenticated: false,
  user: null,
  login: async () => false,
  logout: () => {}
};

const AuthContext = createContext<AuthContextType>(defaultAuthValue);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth harus digunakan dalam AuthProvider");
  return context;
};

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      // Implementasi login sebenarnya
      setIsAuthenticated(true);
      setUser({ id: '123', name: 'John Doe', email: email });
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
