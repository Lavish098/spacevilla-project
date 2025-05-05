import React from "react";

const PropertyTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "buy", label: "Buy" },
    { id: "rent", label: "Rent" },
    { id: "shortlet", label: "Shortlet" },
    { id: "services", label: "Services" },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-4 ">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-10 md:px-16 py-4 rounded-md font-medium transition-colors outline-none  ${
            activeTab === tab.id
              ? "bg-green-500 text-white"
              : "border text-white hover:bg-gray-300/80"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default PropertyTabs;
