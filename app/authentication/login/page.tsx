import LoginForm from "@/components/login/LoginForm";
import LoginImage from "@/components/login/LoginImage";
import React from "react";

function Login() {
  return (
    <div className="lg:grid lg:grid-cols-2 h-screen">
      {/* Image */}
      <LoginImage />

      {/* Form */}
      <LoginForm />
    </div>
  );
}

Login.getLayout = (page: any) => page;

export default Login;
