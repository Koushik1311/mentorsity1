"use client";

import React from "react";

function FacebookAuth() {
  // calling the facebook auth api
  const facebookAuth = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_API_URL}/api/lgn-auth2.0/login/facebook`,
      "_self"
    );
  };

  return (
    <div>
      <button className="flex items-center" onClick={facebookAuth}>
        <img
          className="w-9 h-9 border border-yellow-500 px-2 py-2 rounded-l-sm"
          src="/social/facebook.png"
          alt="facebook icon"
        />
        <span className="w-auto h-9 px-2 py-2 bg-yellow-500 rounded-r-sm flex items-center font-lato text-sm font-bold text-white">
          Sign in with Facebook
        </span>
      </button>
    </div>
  );
}

export default FacebookAuth;
