import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/token-context';

export const PublicRoute = ({ children }: { children: any }) => {
  const { accessToken, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (accessToken) {
    return <Navigate to="/home" replace />;
  }

  return children;
};