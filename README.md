# 🚄 IRCTC Next: Neural Train Booking System

**Task 3 of my Internship at FUTURE INTERNS**

A modern, full-stack train reservation application built with **Next.js 15** and **MongoDB**. This project redesigns the traditional booking experience with a futuristic UI, real-time database connections, and a dynamic seat selection system.

## 🚀 Live Demo
**[Click here to view the Live Site](https://irctcnext-eta.vercel.app/)** *(Note: If no trains appear, visit `/api/seed` to populate the demo database)*

## ✨ Key Features
* **Search Engine:** Query trains between stations (e.g., Delhi ➔ Mumbai).
* **Dynamic Seat Selection:** Interactive 10x4 grid where users can visually pick specific seats.
* **Real-time Booking:** Confirmed bookings are instantly saved to a **MongoDB Atlas** database.
* **Inventory Management:** Booked seats are automatically removed from availability.
* **Next.js 15 Architecture:** Utilizes the latest App Router, Server Actions, and Suspense boundaries for optimized performance.

## 🛠️ Tech Stack
* **Frontend:** Next.js 15 (React), Tailwind CSS, Framer Motion (animations).
* **Backend:** Next.js API Routes (Serverless functions).
* **Database:** MongoDB Atlas (Cloud) + Mongoose ODM.
* **Deployment:** Vercel.

## ⚙️ How It Works (Under the Hood)
1.  **Search:** Uses URL Search Params to fetch matching trains from the database. Wrapped in `React.Suspense` to handle client-side rendering requirements of Next.js 15.
2.  **Booking:** A transaction-safe API route receives the `trainId` and `seatNumbers`. It updates the specific document in the `trains` collection.
3.  **Database Connection:** Uses a cached connection pattern to prevent connection limits in a serverless environment.

## 🔧 Local Installation Guide

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/your-username/FUTURE_FS_03.git](https://github.com/your-username/FUTURE_FS_03.git)
    cd FUTURE_FS_03
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Set Up Environment Variables**
    Create a file named `.env.local` in the root directory and add your MongoDB connection string:
    ```env
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/irctc_db
    ```

4.  **Seed the Database (First Run Only)**
    To add dummy trains to your empty database, run the development server and visit:
    `http://localhost:3000/api/seed`

5.  **Run the App**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost
