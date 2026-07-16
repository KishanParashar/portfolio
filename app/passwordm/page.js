import React from 'react'

const page = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto py-20 px-6 text-white">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h1 className="text-5xl font-bold">
                        PassOP - Password Manager 🔐
                    </h1>

                    <p className="mt-6 text-xl text-gray-400 max-w-4xl mx-auto">
                        PassOP is a full-stack password management application built using
                        React (Vite), Express.js and MongoDB. It allows users to securely
                        organize website credentials in one place by storing website URLs,
                        usernames and passwords. Users can add, edit, delete and copy saved
                        credentials through a clean and responsive interface.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mt-8">

                        <span className="px-4 py-2 rounded-full bg-green-600">
                            React
                        </span>

                        <span className="px-4 py-2 rounded-full bg-green-600">
                            Vite
                        </span>

                        <span className="px-4 py-2 rounded-full bg-green-600">
                            MongoDB
                        </span>

                        <span className="px-4 py-2 rounded-full bg-green-600">
                            Express.js
                        </span>

                        <span className="px-4 py-2 rounded-full bg-green-600">
                            Tailwind CSS
                        </span>

                    </div>



                </div>



                {/* Home */}

                <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

                    <img
                        src="items/homepm.jpeg"
                        className="rounded-xl border border-gray-700 shadow-2xl"
                        alt=""
                    />

                    <div>

                        <h2 className="text-4xl font-bold mb-6">
                            Simple & User-Friendly Interface
                        </h2>

                        <p className="text-gray-400 leading-8">
                            PassOP provides a clean interface where users can save website
                            credentials by entering the website URL, username and password.
                            The application focuses on simplicity, making password
                            management quick and convenient.
                        </p>

                    </div>

                </div>



                {/* Password List */}

                <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

                    <div>

                        <h2 className="text-4xl font-bold mb-6">
                            Manage Saved Credentials
                        </h2>

                        <p className="text-gray-400 leading-8">
                            All saved passwords are displayed in a structured table. Users
                            can copy website URLs, usernames and passwords with a single
                            click, edit existing records or permanently delete credentials
                            whenever required. The interface updates instantly without
                            refreshing the page.
                        </p>

                    </div>

                    <img
                        src="items/passwords.jpeg"
                        className="rounded-xl border border-gray-700 shadow-2xl"
                        alt=""
                    />

                </div>



                {/* Database */}

                <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

                    <img
                        src="items/databasepm.jpeg"
                        className="rounded-xl border border-gray-700 shadow-2xl"
                        alt=""
                    />

                    <div>

                        <h2 className="text-4xl font-bold mb-6">
                            Persistent MongoDB Storage
                        </h2>

                        <p className="text-gray-400 leading-8">
                            Password records are stored persistently in MongoDB through a
                            RESTful Express.js backend. The application performs complete CRUD
                            operations, allowing users to create, retrieve, update and delete
                            credentials while keeping the frontend synchronized with the
                            database.
                        </p>

                    </div>

                </div>



                {/* Features */}

                <div className="mt-20">

                    <h2 className="text-4xl font-bold text-center mb-10">
                        Key Features
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="bg-[#111827] p-6 rounded-xl">
                            🔐 Store Website Credentials
                        </div>

                        <div className="bg-[#111827] p-6 rounded-xl">
                            ✏️ Edit Existing Passwords
                        </div>

                        <div className="bg-[#111827] p-6 rounded-xl">
                            🗑 Delete Saved Credentials
                        </div>

                        <div className="bg-[#111827] p-6 rounded-xl">
                            📋 One-Click Copy Functionality
                        </div>

                        <div className="bg-[#111827] p-6 rounded-xl">
                            🗄 MongoDB Database Integration
                        </div>

                        <div className="bg-[#111827] p-6 rounded-xl">
                            ⚡ Complete CRUD Operations
                        </div>

                    </div>

                </div>



                {/* Learning */}

                <div className="mt-24 bg-[#111827] rounded-2xl p-10">

                    <h2 className="text-3xl font-bold mb-6">
                        What I Learned
                    </h2>

                    <p className="text-gray-400 leading-8">
                        Building PassOP helped me understand full-stack application
                        development using the MERN ecosystem. I learned how to connect a
                        React (Vite) frontend with an Express.js backend, perform CRUD
                        operations using MongoDB, manage application state with React Hooks,
                        build reusable components and create responsive user interfaces with
                        Tailwind CSS.
                    </p>

                </div>

            </section>
        </div>
    )
}

export default page
