"use client"
import Image from "next/image";
import { useState, useRef } from "react";
import Link from "next/link";


export default function Home() {

  const [isPlaying, setisPlaying] = useState(false)
  const videoref = useRef(null);


  const handleclick = () => {

    if (isPlaying) {
      videoref.current.pause();
    }
    else {
      videoref.current.play();
    }
    setisPlaying(!isPlaying);
  };
  const handleend = () => {
    setisPlaying(false)
  }
  return (
    <>
      <video ref={videoref} onEnded={handleend} className=" h-screen" src="items/port_video.mp4" />

      <div onClick={handleclick} className="cursor-pointer text-black w-14 h-14 relative bottom-60 left-3/4  bg-green-300 hover:bg-yellow-300  rounded-full flex justify-center items-center">
        <img id="play" className="invert " src={isPlaying ? "items/pause.png" : "items/play.png"} />
      </div>
      {/* <div className="h-2 bg-amber-200 w-full"></div> */}
      <div className="mywork pb-24">

        <h1 className="text-center text-green-300 text-2xl font-bold py-4 ">My Work</h1>

        <div className="firsttwo container m-auto flex gap-4">
          <div className="bg-gray-700 p-4 rounded-2xl w-full">
            <img src="items/getmechai.jpeg" />
            <p>Get Me a Chai-This is a Patreon clone in next.js</p>
            <Link className="text-blue-400" href={"/getmechai"}>Learn More..</Link>
          </div>
          <div className="bg-gray-700 p-4 rounded-2xl w-full">
            <img className="w-full " src="items/spotify.jpeg" />
            <p>This is a spotify clone with html,css and javasript</p>
            <Link className="text-blue-400" href={"/spotify"}>Learn More..</Link>
          </div>

        </div>
        <div className="firsttwo container m-auto flex gap-4 my-4">
          <div className="bg-gray-700 p-4 rounded-2xl w-full">
            <img src="items/urlshortner.jpeg" />
            <p>BitLinks-A URL Shortner</p>
            <Link className="text-blue-400" href={"/urlshortner"}>Learn More..</Link>
          </div>
          <div className="bg-gray-700 p-4 rounded-2xl w-full">
            <img className="w-full " src="items/passman.jpeg" />
            <p>PassOP-A password manager</p>
            <Link className="text-blue-400" href={"/passwordm"}>Learn More..</Link>
          </div>

        </div>
        <div className="firsttwo container m-auto flex gap-4">
          <div className="bg-gray-700 p-4 rounded-2xl w-full">
            <img src="items/todo.jpeg" />
            <p>This is a Todo app to manage your daily todo works using React</p>

          </div>
          <div className="bg-gray-700 p-4 rounded-2xl w-full">
            <img className="w-full " src="items/gym.jpeg" />
            <p>This is only user interface of a Gym Website using css and html</p>

          </div>

        </div>

        <div className="firsttwo container m-auto my-4 flex gap-4">
          <div className="bg-gray-700 p-4 rounded-2xl w-full">
            <img src="items/netflix.jpeg" />
            <p>This is only user interface of Netflix using css and html</p>

          </div>
          <div className="text-white bg-gray-700 p-4 rounded-2xl w-full">
            <img className="w-full " src="items/twitter.jpeg" />
            <p>This is only user interface of Twitter using css and html</p>

          </div>

        </div>
        <div className="flex flex-col justify-center items-center text-white gap-6 py-4">
          <h1 className=" text-green-300 text-2xl font-bold py-4 ">Who am I? What have I done? 👇 Your click decides.</h1>
          <div className="flex gap-20">
          <Link href={"/about"}>
          <button className="flex text-black items-center cursor-pointer px-4 py-2 rounded-4xl bg-gradient-to-r from-blue-400 to-red-400">👋 Meet Me
            <lord-icon
              src="https://cdn.lordicon.com/lqzgzvkx.json"
              trigger="hover"
              >
            </lord-icon>
          </button>
          </Link>
          <Link href={"/achivements"}>
          <button className="flex text-black items-center cursor-pointer px-4 py-2 rounded-4xl bg-gradient-to-r from-blue-400 to-red-400">🏆 Highlights
            <lord-icon
              src="https://cdn.lordicon.com/lqzgzvkx.json"
              trigger="hover"
              >
            </lord-icon>
          </button>
          </Link>
          </div>

        </div>
        <div className="flex flex-col py-4 px-7 gap-3 bg-gray-700 font-bold text-2xl connect w-full md:w-1/2  mx-auto items-center justify-center rounded-xl my-9">
          <h1 className="text-green-400 ">Let's Connect</h1>
          <div className="flex flex-col justify-start gap-3">
            <div>
            <h1 className="text-black font-bold text-start">Email</h1>
            <h1 className="text-blue-400 bg-gray-800 px-2 py-2 border-gray-600 rounded-xl border-2">kishanparashar@iitbhilai.ac.in</h1>
            
            </div>
            <div>
            <h1 className="text-black text-start">For My Coding Profiles</h1>
            <Link href={"/about"}>
            <button className="flex w-full text-black items-center justify-center cursor-pointer px-4 py-2 rounded-4xl bg-gradient-to-r from-blue-400 to-red-400">Hit Me
            <lord-icon
              src="https://cdn.lordicon.com/lqzgzvkx.json"
              trigger="hover"
              >
            </lord-icon>
          </button>
          </Link>
          </div>
          </div>


        </div>
      </div>

    </>
  );
}
