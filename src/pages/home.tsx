import { useState } from 'react';
import * as apiService from "../services/apiService";
import { useAuth } from '../store/token-context';
import { protectedRequest } from '../services/apiWrapper';

const HomePage = () => {
  const { setAccessTokenAndHeaders } = useAuth();
  const [userEmail, setUserEmail] = useState("");

  const getUserEmail = async ()=>{
    const res = await apiService.getUser();
    setUserEmail(res.email);
    setTimeout(()=>{
      setUserEmail('');
    },5000);
  }

  const logout = async ()=>{
    await apiService.signOut(); // to invalidate refresh token in BE too
    setAccessTokenAndHeaders(null);
  }

  return (
        <>
          <div className="d-flex justify-content-end p-3 logout-btn">
            <button
              style={{
                color: "black",
                borderRadius: "8px",
                background: "transparent",
              }}
              onClick={logout}
            >
              Logout
            </button>
          </div>
          
          
          <div className="p-4">
            <h2 className="fw-bold">Welcome to the Application 🎉</h2>
            <p className="mt-3">
              We're glad to have you here. Explore and enjoy the experience!
            </p>
            <div className="d-flex align-items-center justify-content-center">
            <button
                  style={{ backgroundColor: "#f97316", color: "white", borderRadius: "8px" }}
                  onClick={()=>protectedRequest(getUserEmail)}
              >show user email</button>

            </div>

            <div>{userEmail}</div>
          </div>
        </>
    );
}

export default HomePage;