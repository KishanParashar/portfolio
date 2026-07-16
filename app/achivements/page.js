"use client";

import { useState } from "react";

const projects = [
  {
    title: "GATE Qualified",
    desc: "Qualified GATE in 2024, 2025 and 2026.",
    img: "/items/gatelogo2.jpeg",
    pop:"/items/gatein.png"
  },
  {
    title: "IITian",
    desc: "Mtech in CSE from IIT Bhilai.",
    img: "/items/iitlogo.jpeg",
    pop:"/items/iitin.jpeg"
  },
  {
    title: "LeetCode",
    desc: "Earned 50 days and 100 days badges on leetcode.",
    img: "/items/leetcodelogo.jpeg",
    pop:"/items/leetcodein.png"
  },
  {
    title: "HackerRank",
    desc: "Some Achivements on HackerRank.",
    img: "/items/hrlogo.jpeg",
    pop:"/items/hrin.png"
  },
  {
    title: "Coding Ninjas",
    desc: "Some Achivements on Coding Ninjas.",
    img: "/items/cnlogo.jpeg",
    pop:"/items/cnin.png"
  },
  {
    title: "Data Science",
    desc: "Data Science Cerficate from Code with Harry.",
    img: "/items/dslogo.jpeg",
    pop:"/items/dscert.png"
  },
];

export default function Page() {
  const [popImage, setPopImage] = useState(null);

  return (
    <>
      <div className="bg-black min-h-screen py-20">

        <div className="w-full md:max-w-6xl mx-auto">

          {projects.map((item, index) => (

            <div key={index}>

              {/* Card */}

              <div
                className={`flex md:mx-40 ${
                  index % 2 === 0
                    ? "justify-start"
                    : "justify-end"
                }`}
              >

                <div
                  onClick={() => setPopImage(item.pop)}
                  className={`cursor-pointer
                  w-full
                  bg-green-400
                  md:w-72
                  rounded-xl
                  p-4
                  shadow-xl
                  transition-all
                  duration-500
                  hover:rotate-0
                  hover:scale-105
                  ${
                    index % 2 === 0
                      ? "rotate-2"
                      : "-rotate-2"
                  }`}
                >

                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-lg h-72 w-full object-cover"
                  />

                  <h1 className="text-xl font-bold mt-4 text-black">
                    {item.title}
                  </h1>

                  <p className="text-black mt-2">
                    {item.desc}
                  </p>

                </div>

              </div>

              {/* Connector */}

              {index !== projects.length - 1 && (

                <div className="flex justify-center my-8">

                  <svg width="420" height="140">

                    {index % 2 === 0 ? (

                      <path
                        d="M20 20 C120 120 300 20 400 120"
                        stroke="#0ea5e9"
                        strokeWidth="6"
                        strokeDasharray="2 12"
                        strokeLinecap="round"
                        fill="none"
                      />

                    ) : (

                      <path
                        d="M400 20 C300 120 120 20 20 120"
                        stroke="#0ea5e9"
                        strokeWidth="6"
                        strokeDasharray="2 12"
                        strokeLinecap="round"
                        fill="none"
                      />

                    )}

                  </svg>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

      {/* Popup */}

      {popImage && (
        <div
          onClick={() => setPopImage(null)}
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative"
          >

            <button
              onClick={() => setPopImage(null)}
              className="absolute -top-4 -right-4 bg-red-600 text-white w-10 h-10 rounded-full text-xl"
            >
              ✕
            </button>

            <img
              src={popImage}
              alt="Achievement"
              className="max-w-[90vw] max-h-[90vh] rounded-xl border-4 border-white"
            />

          </div>

        </div>
      )}
    </>
  );
} 