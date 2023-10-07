import React from "react";

// Tab pros type
type TabProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void; // => void returns nothing
};

function Tabs({ activeTab, setActiveTab }: TabProps) {
  return (
    <div className="grid grid-cols-2 font-lato text-xl mb-6">
      {/* Email tab Button */}
      <button
        className={`${
          activeTab === "email"
            ? "border-b-2 border-yellow-500 text-yellow-500"
            : ""
        } px-4 py-2 mb-3 font-medium`}
        onClick={() => setActiveTab("email")}
      >
        Email
      </button>
      {/* Phone tab Button */}
      <button
        className={`${
          activeTab === "phone"
            ? "border-b-2 border-yellow-500 text-yellow-500"
            : ""
        } px-4 py-2 mb-3 font-medium`}
        onClick={() => setActiveTab("phone")}
      >
        Phone
      </button>
    </div>
  );
}

export default Tabs;
