import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import useIsMobile from "./Hooks/useIsMobile";
import { menuItems } from './data/navigationLinks';
import { healthData } from "./data/healthData";
import { upcomingAppointments } from "./data/upcomingAppointments";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleOverlayClick = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-full w-screen font-sans overflow-x-hidden">
      <Sidebar menuItems={menuItems} isSidebarOpen={isMobile ? isSidebarOpen : true} setIsSidebarOpen={isMobile ? setIsSidebarOpen : () => { }} />
      {isMobile && isSidebarOpen && (
        <div
          onClick={handleOverlayClick}
          className="fixed left-0 top-0 bottom-0 bg-black/50 z-[52] w-full h-full"
        ></div>
      )}
      <DashboardMainContent upcomingAppointments={upcomingAppointments} healthData={healthData} setIsSidebarOpen={isMobile ? setIsSidebarOpen : () => { }} />
    </div>
  );
};

export default App;
