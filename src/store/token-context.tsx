import React, { createContext, useState, useEffect, useContext } from 'react';
import * as authService from '../services/authSerivce';
import axiosInstance from '../services/api.interceptor';

interface AuthContextType {
  accessToken: string | null;
  setAccessTokenAndHeaders: (token: string | null) => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const setAccessTokenAndHeaders = (value: string|null)=>{
    setAccessToken(value);
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${value}`;
  }
  // Refresh token on initial load
  useEffect(() => {
    const refreshAccessToken = async () => {
      try {
        const res = await authService.refreshAccessToken();
        setAccessTokenAndHeaders(res.accessToken);

      } catch (err) {
        console.error('Token refresh failed:', err);
        setAccessTokenAndHeaders(null);
      } finally {
        setLoading(false);
      }

    };

    refreshAccessToken();
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessTokenAndHeaders, loading }}>
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