import Link from "next/link";
import React, { useState } from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";

function ForgotPassword() {
  const [forgotPWForm, setForgotPWForm] = useState(false);

  return (
    <>
      <button
        className="mb-6 place-self-end"
        onClick={() => setForgotPWForm(true)}
      >
        <p className="font-lato text-yellow-500 hover:text-blue-400 hover:underline transition-all">
          Forgot Password
        </p>
      </button>
      <div>
        {forgotPWForm && (
          <ForgotPasswordForm setForgotPWForm={setForgotPWForm} />
        )}
      </div>
    </>
  );
}

export default ForgotPassword;
