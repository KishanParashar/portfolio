import React from 'react'

const page = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto py-20 px-6 text-white">

    {/* Heading */}

    <div className="text-center mb-16">

        <h1 className="text-5xl font-bold">
            BitLinks - URL Shortener 🔗
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-4xl mx-auto">
            BitLinks is a modern URL shortening application built with Next.js
            and MongoDB. It allows users to convert long URLs into short,
            memorable links that can be shared easily. The application provides
            fast redirection using dynamic routing while securely storing all
            URLs inside MongoDB.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8">

            <span className="px-4 py-2 rounded-full bg-sky-600">
                Next.js
            </span>

            <span className="px-4 py-2 rounded-full bg-sky-600">
                React
            </span>

            <span className="px-4 py-2 rounded-full bg-sky-600">
                MongoDB
            </span>

            <span className="px-4 py-2 rounded-full bg-sky-600">
                Tailwind CSS
            </span>

            <span className="px-4 py-2 rounded-full bg-sky-600">
                API Routes
            </span>

        </div>

    </div>



    {/* Landing Page */}

    <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

        <img
            src="items/homeus.jpeg"
            className="rounded-xl border border-gray-700 shadow-2xl"
            alt=""
        />

        <div>

            <h2 className="text-4xl font-bold mb-6">
                Responsive Landing Page
            </h2>

            <p className="text-gray-400 leading-8">
                The application features a clean and responsive landing page
                designed with Tailwind CSS. Users can quickly understand the
                purpose of the platform and navigate directly to the URL
                shortening service.
            </p>

        </div>

    </div>



    {/* URL Generator */}

    <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

        <div>

            <h2 className="text-4xl font-bold mb-6">
                Generate Custom Short URLs
            </h2>

            <p className="text-gray-400 leading-8">
                Users can enter any valid long URL and choose their own custom
                short alias. The application checks for duplicate aliases,
                stores the mapping in MongoDB and instantly generates a unique
                short link that can be shared with others.
            </p>

        </div>

        <img
            src="items/shorten.jpeg"
            className="rounded-xl border border-gray-700 shadow-2xl"
            alt=""
        />

    </div>



    {/* Database */}

    <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

        <img
            src="items/database.jpeg"
            className="rounded-xl border border-gray-700 shadow-2xl"
            alt=""
        />

        <div>

            <h2 className="text-4xl font-bold mb-6">
                MongoDB Integration
            </h2>

            <p className="text-gray-400 leading-8">
                Every shortened URL is stored securely in MongoDB along with its
                corresponding original URL. When a shortened link is visited,
                the application performs a database lookup and redirects the
                user to the correct destination using Next.js dynamic routing.
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
                🔗 Custom Short URLs
            </div>

            <div className="bg-[#111827] p-6 rounded-xl">
                🚀 Instant URL Redirection
            </div>

            <div className="bg-[#111827] p-6 rounded-xl">
                🗄 MongoDB Database Integration
            </div>

            <div className="bg-[#111827] p-6 rounded-xl">
                ⚡ Next.js API Routes
            </div>

            <div className="bg-[#111827] p-6 rounded-xl">
                📱 Fully Responsive Design
            </div>

            <div className="bg-[#111827] p-6 rounded-xl">
                🔍 Duplicate Short URL Validation
            </div>

        </div>

    </div>



    {/* Learning */}

    <div className="mt-24 bg-[#111827] rounded-2xl p-10">

        <h2 className="text-3xl font-bold mb-6">
            What I Learned
        </h2>

        <p className="text-gray-400 leading-8">
            This project strengthened my understanding of full-stack web
            development using Next.js. I learned how to build RESTful API
            routes, connect applications with MongoDB, perform CRUD operations,
            implement dynamic routing for URL redirection and manage client-side
            state using React Hooks. Building this project also improved my
            understanding of request handling and backend logic in the App
            Router architecture.
        </p>

    </div>

</section>
    </div>
  )
}

export default page
