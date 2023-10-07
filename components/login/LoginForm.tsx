import Link from "next/link";

// Local import

import GoogleAuth from "@/components/social-authentication/GoogleOauthLogin";
import EmailPhoneTabs from "@/components/login/EmailPhoneTabs";
import FacebookAuth from "../social-authentication/FacebookOauthLogin";

function LoginForm() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <h1 className="uppercase mt-10 mb-9 font-lato font-bold text-3xl text-yellow-500 flex justify-center">
          User Login
        </h1>

        {/* Email Login and Phone Login */}
        <EmailPhoneTabs />

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
          <p className="font-lato">Dont have an account? </p>
          <Link
            className="text-blue-500 self-center font-lato"
            href="/authentication/signup"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
