import * as apiService from '../services/apiService';

/**
 * Calls the backend API via apiService.signIn, 
 * stores the access token in localStorage.
 */
export const login = async (credentials: {email: string, password: string}) => {
    return await apiService.signIn(credentials);
}

/**
 * Calls the backend API to invalidate the session 
 * removes the access token from localStorage.
 */
export const logout = async () => {
    await apiService.signOut();
    return;
}

/**
 * Calls the backend API via apiService.signUp 
 * stores the access token in localStorage.
 */
export const signup = async (data: {email: string, password: string, fullName: string}) => {
    return await apiService.signUp(data);
}


export const refreshAccessToken = async () => {
    const responseData = await apiService.refreshToken();
    return responseData;
}
