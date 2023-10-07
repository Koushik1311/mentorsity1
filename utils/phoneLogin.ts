import axios from "axios";

export async function onPhoneLogin(
  user: { phone: string },
  setError: (error: string) => void
) {
  // Get the api url from .env
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    // Api call
    const response = await axios.post(`${apiUrl}/api/lgn-pwd/login-otp`, user);
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.error) {
      setError(error.response.data.error);
    } else {
      setError("An error occurred during login.");
    }
  }
}
