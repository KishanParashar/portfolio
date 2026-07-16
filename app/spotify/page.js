import React from 'react'

const page = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto py-20 px-6 text-white">

    {/* Heading */}

    <div className="text-center mb-16">

        <h1 className="text-5xl font-bold">
            Spotify Clone 🎵
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-4xl mx-auto">
            A responsive Spotify-inspired music streaming web application built
            using HTML, CSS and JavaScript. The application provides an
            interactive music player where users can browse playlists, play
            songs, pause music, seek forward or backward and switch between
            different albums in real time.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8">

            <span className="px-4 py-2 rounded-full bg-green-600">
                HTML5
            </span>

            <span className="px-4 py-2 rounded-full bg-green-600">
                CSS3
            </span>

            <span className="px-4 py-2 rounded-full bg-green-600">
                JavaScript
            </span>

            <span className="px-4 py-2 rounded-full bg-green-600">
                Audio API
            </span>

        </div>

    </div>



    {/* Landing */}

    <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

        <img
            src="items/shome.jpeg"
            className="rounded-xl border border-gray-700 shadow-2xl"
            alt=""
        />

        <div>

            <h2 className="text-4xl font-bold mb-6">
                Modern Spotify Inspired Interface
            </h2>

            <p className="text-gray-400 leading-8">
                The application recreates Spotify's modern user interface using
                only HTML and CSS. It features a responsive sidebar, playlist
                section, music cards and an interactive music player that
                delivers a familiar streaming experience across different screen
                sizes.
            </p>

        </div>

    </div>



    {/* Playlist */}

    <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

        <div>

            <h2 className="text-4xl font-bold mb-6">
                Dynamic Playlist Loading
            </h2>

            <p className="text-gray-400 leading-8">
                Each album acts as a separate playlist. Clicking on any album
                dynamically loads all songs belonging to that playlist without
                refreshing the page. JavaScript is used to update the song list
                instantly, creating a smooth and interactive user experience.
            </p>

        </div>

        <img
            src="items/playlist.jpeg"
            className="rounded-xl border border-gray-700 shadow-2xl"
            alt=""
        />

    </div>



    {/* Music Player */}

    <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

        <img
            src="items/shome.jpeg"
            className="rounded-xl border border-gray-700 shadow-2xl"
            alt=""
        />

        <div>

            <h2 className="text-4xl font-bold mb-6">
                Interactive Music Player
            </h2>

            <p className="text-gray-400 leading-8">
                The custom-built music player supports play, pause, previous,
                next and real-time seek functionality. Users can move the seek
                bar forward or backward while listening to music. The player
                also displays the currently playing song and continuously
                updates playback progress using JavaScript and the HTML5 Audio
                API.
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
                🎵 Multiple Album Support
            </div>

            <div className="bg-[#111827] p-6 rounded-xl">
                📂 Dynamic Playlist Loading
            </div>

            <div className="bg-[#111827] p-6 rounded-xl">
                ▶️ Play & Pause Songs
            </div>

            <div className="bg-[#111827] p-6 rounded-xl">
                ⏩ Previous & Next Controls
            </div>

            <div className="bg-[#111827] p-6 rounded-xl">
                🎚 Interactive Seek Bar
            </div>

            <div className="bg-[#111827] p-6 rounded-xl">
                📱 Responsive User Interface
            </div>

        </div>

    </div>



    {/* Challenges */}

    <div className="mt-24 bg-[#111827] rounded-2xl p-10">

        <h2 className="text-3xl font-bold mb-6">
            What I Learned
        </h2>

        <p className="text-gray-400 leading-8">
            While building this project, I gained hands-on experience with DOM
            manipulation, event handling, responsive layouts, JavaScript
            functions, asynchronous audio control and state management without
            using any frontend framework. This project strengthened my
            understanding of vanilla JavaScript by implementing features
            commonly found in real-world music streaming applications.
        </p>

    </div>

</section>
    </div>
  )
}

export default page
