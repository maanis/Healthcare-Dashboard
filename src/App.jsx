// App.jsx
import React from "react";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";

const App = () => {
  return (
    <div className="flex h-screen w-screen font-sans">
      <Sidebar />
      <DashboardMainContent />
    </div>
  );
};

export default App;
