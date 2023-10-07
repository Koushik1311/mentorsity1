"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { onPhoneLogin } from "@/utils/phoneLogin";
import OtpForm from "./phoneotp/OtpForm";

function PhoneLogin() {
  // Next router
  const router = useRouter();

  // Error state
  const [error, setError] = useState("");

  // User state
  const [user, setUser] = useState({
    phone: "",
  });

  // OTP Form state
  const [otpForm, setOtpForm] = useState(false);

  // sends otp
  const otp = async () => {
    // Call the onLogin function from the login module
    await onPhoneLogin(user, setError);
  };

  return (
    <div>
      <p className="text-red-500 font-lato items-start">{error}</p>
      <div className="flex flex-col">
        <div className="relative">
          <PhoneIcon className="absolute w-6 h-6 top-2.5 left-4 text-yellow-500" />
          {/* Phone */}
          <input
            className="border-2 border-yellow-500/30 rounded-full font-lato font-bold mb-6 w-72 py-2 px-3 pl-12 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:outline-none focus:ring-0 focus:border-yellow-500"
            type="tel"
            name="phone"
            id="phone"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            placeholder="Phone Number"
          />
        </div>
        {/* Button */}
        <button type="button" onClick={() => setOtpForm(true)}>
          <button
            className="uppercase font-lato font-bold border rounded-full bg-yellow-500 text-white w-36 h-10 self-center hover:bg-yellow-600 hover:shadow-2xl transition-all"
            type="button"
            onClick={otp}
          >
            Get OTP
          </button>
        </button>
      </div>
      {/* Form for enter otp */}
      <div>{otpForm && <OtpForm setOtpForm={setOtpForm} />}</div>
    </div>
  );
}

export default PhoneLogin;
