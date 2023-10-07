import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

// login function which has login, router & error parameters
export async function onEmailLogin(
  user: { email: string; password: string },
  router: AppRouterInstance,
  setError: (error: string) => void
) {
  // Get the api url from .env
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    // api call
    const response = await axios.post(`${apiUrl}/api/lgn-pwd/login-pwd`, user);

    // Success redirect or push the users to the home page
    router.push("/");
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.error) {
      setError(error.response.data.error);
    } else {
      setError("An error occurred during login.");
    }
  }
}
