import RegistrationForm from "@/components/registration/RegistrationForm";
import RegistrationImage from "@/components/registration/RegistrationImage";
import React from "react";

function Login() {
  return (
    <div className="lg:grid lg:grid-cols-2 h-screen">
      {/* Image */}
      <RegistrationImage />

      {/* Form */}
      <RegistrationForm />
    </div>
  );
}

Login.getLayout = (page: any) => page;

export default Login;