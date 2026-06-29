# 🏥 Prescripto – Full Stack Doctor Appointment Booking System

A complete **MERN Stack Doctor Appointment Booking System** that enables patients to book appointments online, doctors to manage their schedules, and administrators to oversee the entire platform. The application includes secure authentication, role-based access control, online payment integration, and responsive dashboards.

---

## 📌 Overview

Prescripto is a full-stack healthcare management platform developed using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.

The application supports three different user roles:

* 👤 Patient
* 👨‍⚕️ Doctor
* 👨‍💼 Administrator

Each role has its own dashboard and dedicated functionalities.

---

# 🚀 Features

## 👤 Patient Module

* User Registration & Login
* JWT Authentication
* Browse Doctors by Specialty
* Search Doctors
* View Doctor Profiles
* Book Doctor Appointments
* Cancel Appointments
* View Appointment History
* Update Profile Information
* Online Payment using Razorpay & Stripe
* Responsive UI

---

## 👨‍⚕️ Doctor Dashboard

Doctors can efficiently manage their daily appointments.

### Features

* Secure Doctor Login
* Dashboard Overview
* View Today's Appointments
* View Upcoming Appointments
* Accept/Complete Appointments
* Cancel Appointments
* View Total Earnings
* Update Personal Information
* Update Professional Details
* Change Availability Status

---

## 👨‍💼 Admin Dashboard

The administrator has complete control over the platform.

### Features

* Secure Admin Authentication
* Dashboard with Analytics
* Add New Doctors
* View All Doctors
* Update Doctor Information
* Manage Doctor Availability
* Manage Patient Appointments
* Cancel Bookings
* Monitor Platform Activities

---

# 💳 Payment Integration

The application supports secure online payments using:

* Razorpay
* Stripe

Patients can pay consultation fees directly while booking appointments.

---

# 🔐 Authentication & Security

* JWT Authentication
* Role-Based Authorization
* Password Encryption using bcrypt
* Protected API Routes
* Secure Environment Variables using dotenv

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router
* Tailwind CSS
* Axios
* Context API

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## Authentication

* JWT
* bcrypt

---

## Cloud Storage

* Cloudinary
* Multer

---

## Payments

* Razorpay
* Stripe

---

# 📂 Project Structure

```text
Prescripto/
│
├── frontend/        # Patient Website
├── admin/           # Admin Dashboard
├── backend/         # Express API Server
│
├── README.md
└── package.json
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/prescripto.git
```

---

## Navigate to Project

```bash
cd prescripto
```

---

## Install Dependencies

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd ../frontend
npm install
```

### Admin

```bash
cd ../admin
npm install
```

---

## Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=

MONGODB_URI=

JWT_SECRET=

ADMIN_EMAIL=
ADMIN_PASSWORD=

CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET_KEY=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

STRIPE_SECRET_KEY=
```

---

# ▶️ Run the Project

### Backend

```bash
cd backend
npm run server
```

### Frontend

```bash
cd frontend
npm run dev
```

### Admin Dashboard

```bash
cd admin
npm run dev
```

---

# 📷 Screens

* Home Page
* Doctors Listing
* Doctor Details
* Appointment Booking
* Patient Dashboard
* Admin Dashboard
* Doctor Dashboard
* Payment Gateway

*(Add screenshots here after deployment.)*

---

# 🌟 Key Highlights

* Full MERN Stack Architecture
* Three-Level Authentication
* Role-Based Authorization
* RESTful APIs
* Cloudinary Image Upload
* Online Payment Integration
* Responsive Design
* Scalable Folder Structure

---

# 📚 Future Enhancements

* Email Notifications
* SMS Appointment Reminders
* Video Consultation
* Prescription Management
* Medical Report Upload
* Doctor Reviews & Ratings
* AI-Based Doctor Recommendation

---

# 👨‍💻 Author

**Shubham Supekar**

GitHub: https://github.com/ShubhamSupekar11

LinkedIn: *(Add your LinkedIn profile)*

---

## ⭐ Support

If you found this project useful, please consider giving it a **⭐ Star** on GitHub.
