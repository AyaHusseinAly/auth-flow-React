import axios from "axios";
import { BE_URL } from "../config/constants";

export const signIn = async (data: {email: string, password: string}) => {
    try{
        const res = await axios.post(`${BE_URL}/auth/signin`, data,
            {
                withCredentials: true,  // send and receive HttpOnly cookies
                headers: { "Content-Type": "application/json" },
            }
        );
        if (!res.status) throw new Error("Signin failed");
        return res.data;

    } catch (err: any) {
        console.error("Sign in error:", err.response?.data || err.message);
    throw err;
    }
    
}

export const signOut = async () => {
    try{
        return;

    } catch (err: any) {
        console.error("Sign out error:", err.response?.data || err.message);
    throw err;
    }
    
}

export const signUp = async (data: {email: string, password: string, fullName: string}) => {
    try{
        const res = await axios.post(`${BE_URL}/auth/signup`, data,
            {
                withCredentials: true,  // send and receive HttpOnly cookies
                headers: { "Content-Type": "application/json" },
            }
        );
        if (!res.status) throw new Error("Signin failed");
        return res.data;
  
    } catch (err: any) {
        console.error("Sign up error:", err.response?.data || err.message);
        throw err;
  }
  
}

