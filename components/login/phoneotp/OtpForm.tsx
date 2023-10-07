import { PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type OtpFormProps = {
  setOtpForm: (form: boolean) => void;
};

function OtpForm({ setOtpForm }: OtpFormProps) {
  const router = useRouter();

  const [otp, setOtp] = useState({
    otp: "",
  });

  async function handleLogin() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    // api call
    try {
      const response = await axios.post(
        `${apiUrl}/api/lgn-pwd/login-otp/verify`,
        otp
      );

      router.push("/");
    } catch (error: any) {
      // TODO: Handle Error
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blur">
      <div className="bg-white lg:w-2/5 border border-yellow-500 rounded-md shadow-xl">
        <div className="flex items-center justify-between p-3">
          <h1 className="text-xl font-semibold">Enter OTP</h1>
          <button onClick={() => setOtpForm(false)}>
            <XMarkIcon className="w-5 h-5 cursor-pointer" />
          </button>
        </div>
        <div className="mb-3">
          <hr className="w-full h-[1px] bg-gray-300 border-0 rounded dark:bg-gray-700" />
        </div>
        <div>
          <form className="p-5">
            <div className="relative">
              <PhoneIcon className="absolute w-6 h-6 top-2.5 left-4 text-yellow-500" />
              <input
                className="border-2 border-yellow-500/30 rounded-full font-lato font-bold w-full py-2 px-3 pl-12 invalid:border-red-700 invalid:text-red-700 focus:invalid:border-red-700 focus:invalid:ring-red-700 border-red-700 focus:outline-none focus:ring-0 focus:border-yellow-500"
                type="text"
                name="otp"
                id="otp"
                placeholder="Enter OTP"
                value={otp.otp}
                onChange={(e) => setOtp({ ...otp, otp: e.target.value })}
              />
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OtpForm;
