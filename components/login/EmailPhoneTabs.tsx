"use client";

import React, { useState } from "react";

// Local imports
import EmailLogin from "@/components/login/EmailLogin";
import PhoneLogin from "@/components/login/PhoneLogin";
import Tabs from "@/components/login/Tabs";

function EmailPhoneTabs() {
  const [activeTab, setActiveTab] = useState("email");

  return (
    <div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "email" ? <EmailLogin /> : <PhoneLogin />}
    </div>
  );
}

export default EmailPhoneTabs;
