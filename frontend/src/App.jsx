// import React from 'react'
// import Navbar from './components/Navbar'
// import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Doctors from './pages/Doctors'
// import Login from './pages/Login'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Appointment from './pages/Appointment'
// import MyAppointments from './pages/MyAppointments'
// import MyProfile from './pages/MyProfile'
// import Footer from './components/Footer'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Verify from './pages/Verify'

// const App = () => {
//   return (
//     <div className='mx-4 sm:mx-[10%]'>
//       <ToastContainer />
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/doctors' element={<Doctors />} />
//         <Route path='/doctors/:speciality' element={<Doctors />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/appointment/:docId' element={<Appointment />} />
//         <Route path='/my-appointments' element={<MyAppointments />} />
//         <Route path='/my-profile' element={<MyProfile />} />
//         <Route path='/verify' element={<Verify />} />
//       </Routes>
//       <Footer />
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import { Routes, Route } from 'react-router-dom'

// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

// import Home from './pages/Home'
// import Doctors from './pages/Doctors'
// import Login from './pages/Login'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Appointment from './pages/Appointment'
// import MyAppointments from './pages/MyAppointments'
// import MyProfile from './pages/MyProfile'
// import Verify from './pages/Verify'

// import PatientLayout from './layout/PatientLayout'

// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'


// const App = () => {

//   return (

//     <>

//       <ToastContainer />

//       <Routes>

//         {/* ================================= */}
//         {/* PUBLIC WEBSITE                     */}
//         {/* ================================= */}

//         <Route
//           path="/"
//           element={
//             <PublicLayout>
//               <Home />
//             </PublicLayout>
//           }
//         />

//         <Route
//           path="/doctors"
//           element={
//             <PublicLayout>
//               <Doctors />
//             </PublicLayout>
//           }
//         />

//         <Route
//           path="/doctors/:speciality"
//           element={
//             <PublicLayout>
//               <Doctors />
//             </PublicLayout>
//           }
//         />

//         <Route
//           path="/login"
//           element={
//             <PublicLayout>
//               <Login />
//             </PublicLayout>
//           }
//         />

//         <Route
//           path="/about"
//           element={
//             <PublicLayout>
//               <About />
//             </PublicLayout>
//           }
//         />

//         <Route
//           path="/contact"
//           element={
//             <PublicLayout>
//               <Contact />
//             </PublicLayout>
//           }
//         />

//         <Route
//           path="/appointment/:docId"
//           element={
//             <PublicLayout>
//               <Appointment />
//             </PublicLayout>
//           }
//         />

//         <Route
//           path="/verify"
//           element={
//             <PublicLayout>
//               <Verify />
//             </PublicLayout>
//           }
//         />


//         {/* ================================= */}
//         {/* PATIENT PORTAL                     */}
//         {/* ================================= */}

//         <Route element={<PatientLayout />}>

//           <Route
//             path="/my-appointments"
//             element={<MyAppointments />}
//           />

//           <Route
//             path="/my-profile"
//             element={<MyProfile />}
//           />

//         </Route>

//       </Routes>

//     </>
//   )
// }


// /* ================================= */
// /* PUBLIC LAYOUT                     */
// /* ================================= */

// const PublicLayout = ({ children }) => {

//   return (

//     <div className="mx-4 sm:mx-[10%]">

//       <Navbar />

//       {children}

//       <Footer />

//     </div>

//   )
// }


// export default App




import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Verify from './pages/Verify'

import PatientLayout from './layout/PatientLayout'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReportAnalyzer from './pages/ReportAnalyzer'


const App = () => {

  return (
    <>
      <ToastContainer />

      <Routes>

        {/* =====================================================
            PUBLIC WEBSITE
        ===================================================== */}

        {/* Home */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />

        {/* All Doctors */}
        <Route
          path="/doctors"
          element={
            <PublicLayout>
              <Doctors />
            </PublicLayout>
          }
        />

        {/* Doctors by Speciality */}
        <Route
          path="/doctors/:speciality"
          element={
            <PublicLayout>
              <Doctors />
            </PublicLayout>
          }
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            <PublicLayout>
              <Login />
            </PublicLayout>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <PublicLayout>
              <About />
            </PublicLayout>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <PublicLayout>
              <Contact />
            </PublicLayout>
          }
        />

        {/* Public Appointment Booking */}
        <Route
          path="/appointment/:docId"
          element={
            <PublicLayout>
              <Appointment />
            </PublicLayout>
          }
        />

        {/* Verify */}
        <Route
          path="/verify"
          element={
            <PublicLayout>
              <Verify />
            </PublicLayout>
          }
        />


        {/* =====================================================
            PATIENT PORTAL
        ===================================================== */}

        <Route element={<PatientLayout />}>

          {/* Appointment History */}
          <Route
            path="/my-appointments"
            element={<MyAppointments />}
          />

          {/* Edit Profile */}
          <Route
            path="/my-profile"
            element={<MyProfile />}
          />

          {/* Book Appointment */}
          <Route
            path="/patient/doctors"
            element={<Doctors />}
          />

          {/* Book Appointment - Speciality */}
          <Route
            path="/patient/doctors/:speciality"
            element={<Doctors />}
          />

          {/* Patient Appointment Booking */}
          <Route
            path="/patient/appointment/:docId"
            element={<Appointment />}
          />

        </Route>

        {/* Report Analyser */}
        <Route
    path="/patient/report-analyzer"
    element={<ReportAnalyzer />}
/>

      </Routes>
    </>
  )
}


/* =============================================================
   PUBLIC LAYOUT
============================================================= */

const PublicLayout = ({ children }) => {

  return (
    <div className="mx-4 sm:mx-[10%]">

      <Navbar />

      {children}

      <Footer />

    </div>
  )
}


export default App