"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";

// Local import
import { onEmailLogin } from "@/utils/emailLogin";
import ForgotPassword from "@/components/login/forgotpassword/ForgotPassword";

function EmailLogin() {
  // Next router
  const router = useRouter();

  // Error state
  const [error, setError] = useState("");

  // User state
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Login handling function
  const handleLogin = async () => {
    // Call the onEmailLogin function from the emailLogin module
    await onEmailLogin(user, router, setError);
  };

  return (
    <div>
      <p className="text-red-500 font-lato items-start">{error}</p>
      <div className="flex flex-col">
        <div className="relative">
          <UserIcon className="absolute w-6 h-6 top-2.5 left-4 text-yellow-500" />
          {/* Email */}
          <input
            className="border-2 border-yellow-500/30 rounded-full font-lato font-bold mb-6 w-72 py-2 px-3 pl-12 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:outline-none focus:ring-0 focus:border-yellow-500"
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email"
            autoComplete="email"
          />
        </div>
        <div className="relative">
          <LockClosedIcon className="absolute w-6 h-6 top-2.5 left-4 text-yellow-500" />
          {/* Password */}
          <input
            className="border-2 border-yellow-500/30 rounded-full font-lato font-bold mb-3 w-72 py-2 px-3 pl-12 focus:outline-none focus:ring-0 focus:border-yellow-500"
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
          />
          {/* Forgot Password */}
        </div>
        <ForgotPassword />
        <button
          className="uppercase font-lato font-bold border rounded-full bg-yellow-500 text-white w-36 h-10 self-center hover:bg-yellow-600 hover:shadow-2xl transition-all"
          type="button"
          onClick={handleLogin}
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default EmailLogin;
