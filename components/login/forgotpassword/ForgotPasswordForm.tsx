"use client";

import React, { useState } from "react";
import { UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useRouter } from "next/navigation";

type ForgotPasswordFormProps = {
  setForgotPWForm: (form: boolean) => void;
};

function ForgotPasswordForm({ setForgotPWForm }: ForgotPasswordFormProps) {
  const router = useRouter();

  const [email, setEmail] = useState({
    email: "",
  });

  async function forgotPassword() {
    // Get the api url from .env
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    try {
      // api call
      const response = await axios.post(
        `${apiUrl}/api/lgn-pwd/forgot-password`,
        email
      );

      // Redirect the user
      router.push("/password/reset");
    } catch (error: any) {
      // if (error.response && error.response.data && error.response.data.error) {
      // setError(error.response.data.error);
      // } else {
      //     setError("An error occurred during login.");
      // }
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blur">
      <div className="bg-white lg:w-2/5 border border-yellow-500 rounded-md shadow-xl">
        <div className="flex items-center justify-between p-3">
          <h1 className="text-xl font-semibold">Forgot Password?</h1>
          <button onClick={() => setForgotPWForm(false)}>
            <XMarkIcon className="w-5 h-5 cursor-pointer" />
          </button>
        </div>
        <div className="mb-3">
          <hr className="w-full h-[1px] bg-gray-300 border-0 rounded dark:bg-gray-700" />
        </div>
        <div>
          <form className="p-5">
            <div className="relative">
              {/* User Icon */}
              <UserIcon className="absolute w-6 h-6 top-2.5 left-4 text-yellow-500" />
              {/* Email */}
              <input
                className="border-2 border-yellow-500/30 rounded-full font-lato font-bold w-full py-2 px-3 pl-12 invalid:border-red-700 invalid:text-red-700 focus:invalid:border-red-700 focus:invalid:ring-red-700 border-red-700 focus:outline-none focus:ring-0 focus:border-yellow-500"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email.email}
                onChange={(e) => setEmail({ ...email, email: e.target.value })}
              />
            </div>
            {/* Button => submit & redirect */}
            <button
              type="button"
              onClick={forgotPassword}
              className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
