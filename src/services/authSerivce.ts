import * as apiService from '../services/apiService';

/**
 * Calls the backend API via apiService.signIn, 
 * stores the access token in localStorage.
 */
export const login = async (credentials: {email: string, password: string}) => {
    const responseData = await apiService.signIn(credentials);
    localStorage.setItem('accessToken', responseData.accessToken);
    return responseData;
}

/**
 * Calls the backend API to invalidate the session 
 * removes the access token from localStorage.
 */
export const logout = async () => {
    await apiService.signOut();
    localStorage.removeItem('accessToken');
    return;
}

/**
 * Calls the backend API via apiService.signUp 
 * stores the access token in localStorage.
 */
export const signup = async (data: {email: string, password: string, fullName: string}) => {
    const responseData = await apiService.signUp(data);
    localStorage.setItem('accessToken', responseData.accessToken);
    return responseData;
}