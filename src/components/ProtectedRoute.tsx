import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/token-context'


export const ProtectedRoute = ({ children }: any) => {
    const { accessToken, loading } = useAuth();

    if (loading) {
      return <div>Loading...</div>; // or a spinner
    }
  
  if (!accessToken) {
    // Redirect to login if not authenticated
    return <Navigate to="/signin" replace />;
  }

  return children;
};
