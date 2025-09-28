import { refreshAccessToken } from "../services/authSerivce"; 

/**
 * this is a function that Wraps a protected API request. 
 * to check if response is unauthorized then refresh token and retry the same request
 * 
 */
export async function protectedRequest<T>( requestFn: () => Promise<T>,  retry: boolean = true): Promise<T> {

  try {
    return await requestFn();

  } catch (error: any) {
    if (error.response?.status !== 401 || !retry) {
      throw error;
    }

    try {
      await refreshAccessToken();
      // Retry the request once
      return await protectedRequest(requestFn, false);

    } catch (refreshError) {
      throw refreshError;
    }
  }
}
