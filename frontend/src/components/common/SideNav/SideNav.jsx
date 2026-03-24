import { NavLink } from "react-router-dom";
import { MdDashboard, MdInventory } from "react-icons/md";
import { FaUsers, FaBox } from "react-icons/fa";

const SideNav = ({ isOpen, onClose, sidebarRef }) => {
  const menuItems = [
    {
      to: "/dashboard",
      icon: <MdDashboard />,
      label: "Dashboard",
    },
    {
      to: "/products",
      icon: <MdInventory />,
      label: "Products",
    },
  ];

  return (
    <>
      {/* Overlay (mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 sm:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 w-64 h-screen dark:bg-gray-800 dark:border-gray-700 border-r shadow-sm transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        sm:translate-x-0`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-center border-b font-bold text-xl">
          Admin Panel
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all
                ${
                  isActive
                    ? "bg-blue-500 text-white shadow"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default SideNav;
