import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export async function newPassword(
  user: { password: string },
  router: AppRouterInstance,
  setError: (error: string) => void
) {
  // Get the api url from .env
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Extract the token from the URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  if (!token) {
    setError("Token not found in the URL");
    return;
  }

  try {
    // api call
    const response = await axios.post(
      `${apiUrl}/api/lgn-pwd/reset-password?token=${token}`,
      user
    );

    // Success redirect to the login page
    router.push("/authentication/login");
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.error) {
      setError(error.response.data.error);
    } else {
      setError("An error occurred during password creation.");
    }
  }
}
