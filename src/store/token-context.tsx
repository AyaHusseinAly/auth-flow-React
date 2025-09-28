// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import * as authService from '../services/authSerivce';

interface AuthContextType {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Refresh token on initial load
  useEffect(() => {
    const refreshAccessToken = async () => {
      try {
        const res = await authService.refreshAccessToken();
        setAccessToken(res.accessToken);
        
      } catch (err) {
        console.error('Token refresh failed:', err);
        setAccessToken(null);
      } finally {
        setLoading(false);
      }

    };

    refreshAccessToken();
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};