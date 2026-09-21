import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const PatientSidebar = () => {
    const navigate = useNavigate();
    const { setToken } = useContext(AppContext);

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/login");
    };

    const linkClass = ({ isActive }) =>
        `flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
            isActive
                ? "bg-[#E6E9FF] text-[#4338CA] font-medium"
                : "text-[#374151] hover:bg-[#F5F6FF] hover:text-[#4338CA]"
        }`;

    return (
        <aside className="w-[260px] min-h-screen bg-white text-[#1E2A5A] flex flex-col flex-shrink-0 border-r border-gray-200">

            <div
                onClick={() => navigate("/my-appointments")}
                className="px-6 py-5 border-b border-gray-200 cursor-pointer"
            >
                <img
                    className="w-44"
                    src={assets.logo}
                    alt="Prescripto"
                />
                <p className="text-xs text-gray-500 mt-1">
                    Patient Portal
                </p>
            </div>

            <div className="flex-1 px-4 py-7">

                <p className="px-4 mb-4 text-xs font-semibold tracking-wider text-gray-400">
                    APPOINTMENTS
                </p>

                <nav className="space-y-2">
                    <NavLink
                        to="/patient/doctors"
                        className={linkClass}
                    >
                        <span className="flex items-center gap-3">
                            <span>📅</span>
                            <span className="text-[15px]">Book Appointment</span>
                        </span>
                        <span>›</span>
                    </NavLink>

                    <NavLink
                        to="/my-appointments"
                        className={linkClass}
                    >
                        <span className="flex items-center gap-3">
                            <span>🗓</span>
                            <span className="text-[15px]">Appointment History</span>
                        </span>
                        <span>›</span>
                    </NavLink>
                </nav>

                  <p className="px-4 mb-4 mt-9 text-xs font-semibold tracking-wider text-gray-400">
                    TOOLS
                </p>
                    <nav className="space-y-2">
                    <NavLink
                        to="/patient/report-analyzer"
                        className={linkClass}
                    >
                        <span className="flex items-center gap-3">
                            <span>📄</span>
                            <span className="text-[15px]">Report Analyzer</span>
                        </span>
                        <span>›</span>
                    </NavLink>
                </nav>

                <p className="px-4 mb-4 mt-9 text-xs font-semibold tracking-wider text-gray-400">
                    ACCOUNT
                </p>

                <NavLink
                    to="/my-profile"
                    className={linkClass}
                >
                    <span className="flex items-center gap-3">
                        <span>👤</span>
                        <span className="text-[15px]">Edit Profile</span>
                    </span>
                    <span>›</span>
                </NavLink>

            </div>

            <div className="p-4 border-t border-gray-200">
                <button
                    onClick={logout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-500 transition-all"
                >
                    <span>↪</span>
                    <span className="font-medium">Logout</span>
                </button>
            </div>

        </aside>
    );
};

export default PatientSidebar;