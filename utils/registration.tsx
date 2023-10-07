import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

// login function which has login, router & error parameters
export async function onSignup(
  user: { email: string; name: string;phone:string;password:string ;repassword:string},
  router: AppRouterInstance,
  setError: (error: string) => void
) {
  // Get the api url from .env
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    // Fetch data using axios
    // const response = await axios.post("http://localhost:5000/api/rgt-usr", user);
    // console.log(response);
    const response = await axios.post(`${apiUrl}/api/rgt-usr`, user);
    // Success redirect or push the users to the home page
    router.push("/");
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.error) {
      setError(error.response.data.error);
    } else {
      setError("An error occurred during login.");
    }
//    }
  }
}