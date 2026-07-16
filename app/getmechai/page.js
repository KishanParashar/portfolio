import React from 'react'

const page = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto py-20 px-6 text-white">

                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold">
                        Get Me A Chai ☕
                    </h1>

                    <p className="mt-6 text-xl text-gray-400 max-w-4xl mx-auto">
                        A Patreon-inspired crowdfunding platform where creators can receive
                        financial support from their followers through secure online
                        payments. Users can create their own creator page, customize their
                        profile and receive donations using Razorpay.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mt-8">

                        <span className="px-4 py-2 rounded-full bg-green-600">
                            Next.js
                        </span>

                        <span className="px-4 py-2 rounded-full bg-green-600">
                            Tailwind CSS
                        </span>

                        <span className="px-4 py-2 rounded-full bg-green-600">
                            MongoDB
                        </span>

                        <span className="px-4 py-2 rounded-full bg-green-600">
                            NextAuth
                        </span>

                        <span className="px-4 py-2 rounded-full bg-green-600">
                            Razorpay
                        </span>

                    </div>

                </div>


                {/* Home */}

                <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

                    <img
                        src="items/home.jpeg"
                        className="rounded-xl shadow-2xl border border-gray-700"
                    />

                    <div>

                        <h2 className="text-4xl font-bold mb-6">
                            Modern Landing Page
                        </h2>

                        <p className="text-gray-400 leading-8">
                            The homepage introduces the platform with a modern responsive UI
                            built using Tailwind CSS. Visitors can explore the platform,
                            learn how creator funding works and quickly navigate to login or
                            creator pages.
                        </p>

                    </div>

                </div>



                {/* Login */}

                <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

                    <div>

                        <h2 className="text-4xl font-bold mb-6">
                            Secure Authentication
                        </h2>

                        <p className="text-gray-400 leading-8">
                            Authentication is implemented using NextAuth.js with GitHub
                            OAuth. GitHub login is fully functional while the remaining
                            providers are displayed as future integrations to demonstrate a
                            scalable authentication system.
                        </p>

                        <div className="mt-6 bg-yellow-500/20 border border-yellow-500 rounded-lg p-4">

                            <h3 className="font-semibold text-yellow-300">
                                Why only GitHub Login?
                            </h3>

                            <p className="mt-2 text-gray-300">
                                GitHub OAuth is used for demonstration purposes because it
                                provides a quick and reliable authentication flow without
                                requiring additional provider verification.
                            </p>

                        </div>

                    </div>

                    <img
                        src="items/login.jpeg"
                        className="rounded-xl shadow-2xl border border-gray-700"
                    />

                </div>



                {/* Dashboard */}

                <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

                    <img
                        src="items/dashboard.jpeg"
                        className="rounded-xl shadow-2xl border border-gray-700"
                    />

                    <div>

                        <h2 className="text-4xl font-bold mb-6">
                            Creator Dashboard
                        </h2>

                        <p className="text-gray-400 leading-8">
                            Every authenticated user receives a personalized dashboard where
                            they can manage their public profile. Users can update their
                            display name, username, profile picture, cover image and other
                            personal information which is securely stored in MongoDB.
                        </p>

                    </div>

                </div>



                {/* Profile */}

                <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

                    <div>

                        <h2 className="text-4xl font-bold mb-6">
                            Personalized Creator Page
                        </h2>

                        <p className="text-gray-400 leading-8">
                            Each creator gets a unique public page where supporters can
                            leave encouraging messages and contribute financially. Donation
                            history is displayed publicly, creating a transparent and
                            engaging experience similar to modern creator platforms like
                            Patreon or Buy Me A Coffee.
                        </p>

                    </div>

                    <img
                        src="items/profile.jpeg"
                        className="rounded-xl shadow-2xl border border-gray-700"
                    />

                </div>



                {/* Payment */}

                <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

                    <img
                        src="items/payment.jpeg"
                        className="rounded-xl shadow-2xl border border-gray-700"
                    />

                    <div>

                        <h2 className="text-4xl font-bold mb-6">
                            Razorpay Payment Integration
                        </h2>

                        <p className="text-gray-400 leading-8">
                            Payments are processed using Razorpay Test Mode. Secure payment
                            orders are generated from the backend before opening the payment
                            gateway. Transaction details are stored inside MongoDB after
                            successful payment completion.
                        </p>

                    </div>

                </div>



                {/* Features */}

                <div className="mt-24">

                    <h2 className="text-4xl font-bold text-center mb-10">
                        Key Features
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="bg-[#111827] rounded-xl p-6">
                            ✅ GitHub OAuth Authentication
                        </div>

                        <div className="bg-[#111827] rounded-xl p-6">
                            ✅ Creator Dashboard
                        </div>

                        <div className="bg-[#111827] rounded-xl p-6">
                            ✅ Dynamic Creator Pages
                        </div>

                        <div className="bg-[#111827] rounded-xl p-6">
                            ✅ MongoDB Database
                        </div>

                        <div className="bg-[#111827] rounded-xl p-6">
                            ✅ Razorpay Integration
                        </div>

                        <div className="bg-[#111827] rounded-xl p-6">
                            ✅ Responsive UI
                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default page
