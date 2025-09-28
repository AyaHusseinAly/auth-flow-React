import axios from "axios";
import { BE_URL } from "../config/constants";

const deviceId = localStorage.getItem("deviceId");

export const signIn = async (data: {email: string, password: string, deviceId?: string|null}) => {
    try{
        data.deviceId = deviceId;
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
        const res = await axios.post(`${BE_URL}/auth/signout`,{deviceId});
        return res.data;
    } catch (err: any) {
        console.error("signOut error:", err.response?.data || err.message);
        throw err;
    }   
}

export const signUp = async (data: {email: string, password: string, fullName: string, deviceId?: string|null}) => {
    try{
        data.deviceId = deviceId;
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


export const refreshToken = async () => {
    try{
        const res = await axios.post(`${BE_URL}/tokens/refresh`, {deviceId},
            {
                withCredentials: true,  // send and receive HttpOnly cookies
                headers: { "Content-Type": "application/json" },
            }
        );
        if (!res.status) throw new Error("refresh token failed");
        return res.data;

    } catch (err: any) {
        console.error("refresh token error:", err.response?.data || err.message);
    throw err;
    }
    
}

export const getUser = async () => {
    try{
        const res = await axios.get(`${BE_URL}/users/profile`);
        return res.data;
    } catch (err: any) {
        console.error("getUser error:", err.response?.data || err.message);
        throw err;
    }
}

export const getUserByEmail = async (email:string) => {
    try{
        const res = await axios.get(`${BE_URL}/users?email=${email}`);
        return res;
    } catch (err: any) {
        console.error("getUser error:", err.response?.data || err.message);
        throw err;
    }
}