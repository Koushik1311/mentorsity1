"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

// Local import
import { newPassword } from "@/utils/newPassword";
import { LockClosedIcon } from "@heroicons/react/24/outline";

function NewPassword() {
  // Next router
  const router = useRouter();

  // Error state
  const [error, setError] = useState("");

  // user_password state
  const [user, setUser] = useState({
    password: "",
    confirmPassword: "",
  });

  const onSave = async () => {
    // Call the newPassword() function from the newPassword module
    // Check if the password and confirm password is same or not
    if (user.password !== user.confirmPassword) {
      // if the password do not match give error
      setError("Password do not match");
      return;
    }

    // else set new password
    await newPassword(user, router, setError);
  };

  return (
    <div className="w-full bg-blur flex justify-center items-center h-screen flex-col">
      <div className="bg-white py-24 lg:w-2/5 border border-yellow-500 rounded-md shadow-xl">
        <form className="flex justify-center items-center flex-col">
          <h1 className="font-lato font-bold text-yellow-500 text-3xl mb-6">
            Create a New Password
          </h1>
          <div className="relative">
            <LockClosedIcon className="absolute w-6 h-6 top-2.5 left-4 text-yellow-500" />
            {/* New Password */}
            <input
              className="border-2 border-yellow-500/30 rounded-full font-lato font-bold mb-3 w-72 py-2 px-3 pl-12 focus:outline-none focus:ring-0 focus:border-yellow-500"
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="New Password"
            />
          </div>
          <div className="relative">
            <LockClosedIcon className="absolute w-6 h-6 top-2.5 left-4 text-yellow-500" />
            {/* Confirm New Password */}
            <input
              className="border-2 border-yellow-500/30 rounded-full font-lato font-bold mb-3 w-72 py-2 px-3 pl-12 focus:outline-none focus:ring-0 focus:border-yellow-500"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              placeholder="Confirm New Password"
            />
          </div>
          <button
            className="uppercase font-lato font-bold border rounded-full bg-yellow-500 text-white w-36 h-10 self-center hover:bg-yellow-600 hover:shadow-2xl transition-all"
            type="button"
            onClick={onSave}
          >
            Save
          </button>
        </form>
        {/* Error */}
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </div>
    </div>
  );
}

export default NewPassword;
