import { useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../SideNav/SideNav";
import Header from "../Header/Header";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  return (
    <div className="flex">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <SideNav
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        sidebarRef={sidebarRef}
      />

      {/* Main Content */}
      <div className="flex-1 sm:ml-64 bg-gray-100 min-h-screen">
        
        {/* ✅ Use Header Component */}

        {/* Content */}
        <div className="p-4 mt-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;