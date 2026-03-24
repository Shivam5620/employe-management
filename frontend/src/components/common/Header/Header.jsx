import { useNavigate } from "react-router-dom";
import { fetchLogout } from "../../../app/features/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
const Header = ({ onMenuClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await dispatch(fetchLogout());
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white shadow flex items-center justify-between px-4 z-50">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="sm:hidden p-2 rounded hover:bg-gray-100"
        >
          ☰
        </button>
        <h1 className="font-semibold">Admin Panel</h1>
      </div>

      {/* Right */}
      <div className="relative">
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          onClick={() => setOpen(!open)}
          className="w-9 h-9 rounded-full cursor-pointer border"
        />

        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border z-999">
            <button
              onClick={() => navigate("/profile")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Profile
            </button>

            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
