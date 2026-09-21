import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AppContext } from "../context/AppContext";

import PatientSidebar from "../components/PatientSidebar";
import PatientHeader from "../components/PatientHeader";

const PatientLayout = () => {

    const { token } = useContext(AppContext);

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="min-h-screen bg-[#f8f9fc] flex">

            {/* LEFT SIDEBAR */}
            <PatientSidebar />

            {/* RIGHT SIDE */}
            <div className="flex-1 min-w-0 flex flex-col">

                {/* TOP HEADER */}
                <PatientHeader />

                {/* PAGE CONTENT */}
                <main className="flex-1 p-5 md:p-8">

                    <Outlet />

                </main>

            </div>

        </div>
    );
};

export default PatientLayout;