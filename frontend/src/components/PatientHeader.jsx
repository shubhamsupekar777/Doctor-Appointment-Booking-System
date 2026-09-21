// import React, { useContext } from "react";
// import { AppContext } from "../context/AppContext";

// const PatientHeader = () => {

//     const { userData } = useContext(AppContext);

//     return (
//         <header className="h-[74px] bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-8">

//             {/* Left - Page Title */}
//             <div>
//                 <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
//                     Patient Dashboard
//                 </h1>
//             </div>


//             {/* Right Side */}
//             <div className="flex items-center gap-5">

//                 {/* Notification */}
//                 <button
//                     type="button"
//                     className="relative text-gray-700 text-xl hover:text-indigo-600 transition"
//                 >
//                     🔔

//                     {/* Notification dot */}
//                     <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
//                 </button>


//                 {/* Profile Icon + Arrow */}
//                 <button
//                     type="button"
//                     className="flex items-center gap-2"
//                 >

//                     {/* Profile Image */}
//                     {userData?.image ? (

//                         <img
//                             src={userData.image}
//                             alt="Profile"
//                             className="w-10 h-10 rounded-full object-cover border border-indigo-100"
//                         />

//                     ) : (

//                         <div className="
//                             w-10
//                             h-10
//                             rounded-full
//                             bg-indigo-100
//                             text-indigo-600
//                             flex
//                             items-center
//                             justify-center
//                             font-semibold
//                         ">
//                             {userData?.name
//                                 ?.charAt(0)
//                                 ?.toUpperCase() || "P"}
//                         </div>

//                     )}

//                     {/* Dropdown Arrow */}
//                     <span className="text-gray-500 text-xs">
//                         ▼
//                     </span>

//                 </button>

//             </div>

//         </header>
//     );
// };

// export default PatientHeader;



import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const PatientHeader = () => {

    const { userData } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <header className="h-[74px] bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-8">

            {/* Left - Page Title */}
            <div>
                <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                    Patient Dashboard
                </h1>
            </div>

            {/* Right Side */}
            <div className="flex items-center">

                {/* Profile - Clickable */}
                <button
                    type="button"
                    onClick={() => navigate("/my-profile")}
                    className="flex items-center gap-2 hover:opacity-80 transition"
                >

                    {/* Profile Image */}
                    {userData?.image ? (

                        <img
                            src={userData.image}
                            alt="Profile"
                            className="w-10 h-10 rounded-full object-cover border border-indigo-100"
                        />

                    ) : (

                        <div className="
                            w-10
                            h-10
                            rounded-full
                            bg-indigo-100
                            text-indigo-600
                            flex
                            items-center
                            justify-center
                            font-semibold
                        ">
                            {userData?.name
                                ?.charAt(0)
                                ?.toUpperCase() || "P"}
                        </div>

                    )}

                    {/* Arrow */}
                    <span className="text-gray-500 text-xs">
                        ▼
                    </span>

                </button>

            </div>

        </header>
    );
};

export default PatientHeader;