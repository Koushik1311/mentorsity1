"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  UserIcon,
  LockClosedIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
// import SocialRegistration from "@/components/registration/SocialRegistration";
import Link from "next/link";
import { onSignup } from "@/utils/registration";
import GoogleAuth from "../social-authentication/GoogleOauthLogin";
import FacebookAuth from "../social-authentication/FacebookOauthLogin";

function RegistrationForm() {
  // Next router
  const router = useRouter();

  // Error state
  const [error, setError] = useState("");

  // User state
  const [user, setUser] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
    repassword: "",
  });

  //   // Login handling function
  const handleLogin = async () => {
    // Call the onLogin function from the login module
    if (user.password == user.repassword)
      await onSignup(user, router, setError);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="uppercase mb-9 font-lato font-bold text-xl text-yellow-500">
          User Sign Up
        </h1>
        <p className="text-red-500 font-lato items-start">{error}</p>
        <div className="flex flex-col">
          <div className="relative">
            <UserIcon className="absolute w-6 h-6 top-2.5 left-4 text-yellow-500" />
            {/* Email */}
            <input
              className="border-2 border-yellow-500/30 rounded-full font-lato font-bold mb-6 w-72 py-2 px-3 pl-12 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:outline-none focus:ring-0 focus:border-yellow-500"
              type="text"
              name="email"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email"
              autoComplete="email"
            />
          </div>
          <div className="relative">
            <UserIcon className="absolute w-6 h-6 top-2.5 left-4 text-yellow-500" />
            {/* Full Name */}
            <input
              className="border-2 border-yellow-500/30 rounded-full font-lato font-bold mb-6 w-72 py-2 px-3 pl-12 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:outline-none focus:ring-0 focus:border-yellow-500"
              type="name"
              name="name"
              id="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              placeholder="Full Name"
              autoComplete="Full Name"
            />
          </div>
          <div className="relative">
            <PhoneIcon className="absolute w-6 h-6 top-2.5 left-4 text-yellow-500" />
            {/* Email */}
            <input
              className="border-2 border-yellow-500/30 rounded-full font-lato font-bold mb-6 w-72 py-2 px-3 pl-12 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:outline-none focus:ring-0 focus:border-yellow-500"
              type="tel"
              name="phone"
              id="phone"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              placeholder="Mobile no."
              autoComplete="phone"
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
          </div>
          <div className="relative">
            <LockClosedIcon className="absolute w-6 h-6 top-2.5 left-4 text-yellow-500" />
            {/* Password */}
            <input
              className="border-2 border-yellow-500/30 rounded-full font-lato font-bold mb-3 w-72 py-2 px-3 pl-12 focus:outline-none focus:ring-0 focus:border-yellow-500"
              type="password"
              name="repassword"
              id="repassword"
              value={user.repassword}
              onChange={(e) => setUser({ ...user, repassword: e.target.value })}
              placeholder="Re-Password"
            />
          </div>
          <button
            className="uppercase font-lato font-bold border rounded-full bg-yellow-500 text-white w-36 h-10 self-center"
            type="button"
            onClick={handleLogin}
          >
            Sign Up
          </button>
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-0.5 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        </div>
        {/* Social Login */}
        <div className="flex flex-col gap-4 items-center">
          <GoogleAuth />
          <FacebookAuth />
        </div>

        {/* Dont have an account */}
        <div className="mt-9 self-center flex flex-col">
          <p className="font-lato">Have an account? </p>
          <Link
            className="text-blue-500 self-center font-lato"
            href="/authentication/login"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
