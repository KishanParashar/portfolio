import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <>
      <div className='pb-24'>
        <div className='flex md:flex-row flex-col gap-4 my-10 items-baseline'>
          <img className='h-40 rounded-2xl' src='items/me.png' />
          <h1 className='text-green-400 text-6xl font-bold relative bottom-0'>Hi, I'am Kishan Parashar</h1>
        </div>

        <div className='bg-gray-700 p-6 rounded-2xl'>
          <p>I am, currently pursuing my M.Tech in Computer Science and Engineering from
            <span className='text-blue-400'><Link href={"https://www.iitbhilai.ac.in/"}> Indian Institute of Technology Bhilai.</Link></span> I completed both my 10th and 12th
            education from <span className='text-blue-400'><Link href={"https://mvmaligarh.org/"}>Maharishi Vidya Mandir</Link></span> School Aligarh and earned my B.Tech degree from
            <span className='text-blue-400'><Link href={"https://www.acetup.org/accreditation-status/"}> Aligarh College of Engineering and Technology.</Link></span> I am passionate about technology,
            problem solving, and continuously learning new skills in the field of computer science.
            My interests include Data Structures & Algorithms, Web Development, and Cyber Security,
            and I enjoy building practical projects that enhance my technical knowledge. Along with
            academics, I believe in consistency, self-improvement, and creating meaningful work that
            can make an impact. I aspire to grow as a skilled software engineer while also exploring
            opportunities in research, innovation, and entrepreneurship.</p>
        </div>
        <div className='skills mt-4 flex-col gap-4'>

          <h1 className='text-green-400 font-bold py-4 text-4xl text-center'>Skills</h1>
          <div className='flex items-center justify-center md:flex-row flex-col gap-4'>
          <div
            className="relative w-40 h-40 flex flex-col items-center justify-center gap-3 
             bg-violet-400 
             [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0%_50%)]
             before:absolute before:inset-0
             before:bg-violet-400
             before:-z-10
             before:scale-105
             before:[clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0%_50%)]"
          >

            <img src="items/DataS.svg" alt="logo" className="w-8 h-8" />

            <h2 className="text-lg font-bold text-gray-800 text-center">
              Data Structures
            </h2>

            <div className="flex gap-1">
              <img className="h-4" src="items/gold_star.png" />
              <img className="h-4" src="items/gold_star.png" />
              <img className="h-4" src="items/gold_star.png" />
            </div>

          </div>

          <div
            className="relative w-40 h-40 flex flex-col items-center justify-center gap-3 
             bg-green-400
             [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0%_50%)]
             before:absolute before:inset-0
             before:bg-green-400
             before:-z-10
             before:scale-105
             before:[clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0%_50%)]"
          >

            <img src="items/cpp_logo2.svg" alt="logo" className="w-8 h-8" />

            <h2 className="text-lg font-bold text-gray-800 text-center">
              C++
            </h2>

            <div className="flex gap-1">
              <img className="h-4" src="items/gold_star.png" />
              <img className="h-4" src="items/gold_star.png" />
              <img className="h-4" src="items/gold_star.png" />
              <img className="h-4" src="items/gold_star.png" />
              <img className="h-4" src="items/gold_star.png" />
            </div>

          </div>

          <div
            className="relative w-40 h-40 flex flex-col items-center justify-center gap-3 
             bg-red-400 
             [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0%_50%)]
             before:absolute before:inset-0
             before:bg-red-400
             before:-z-10
             before:scale-105
             before:[clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0%_50%)]"
          >

            <img src="items/sql_logo.svg" alt="logo" className="w-8 h-8" />

            <h2 className="text-lg font-bold text-gray-800 text-center">
              SQL
            </h2>

            <div className="flex gap-1">
              <img className="h-4" src="items/gold_star.png" />
              <img className="h-4" src="items/gold_star.png" />
              <img className="h-4" src="items/gold_star.png" />
            </div>

          </div>
          
            <div
            className="relative w-40 h-40 flex flex-col items-center justify-center gap-3 
             bg-red-400 
             [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0%_50%)]
             before:absolute before:inset-0
             before:bg-red-400;
             before:-z-10
             before:scale-105
             before:[clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0%_50%)]"
          >

            <img src="items/sd_logo.svg" alt="logo" className="w-8 h-8" />

            <h2 className="text-lg font-bold text-gray-800 text-center">
              System Design
            </h2>

            <div className="flex gap-1">
              <img className="h-4" src="items/gold_star.png" />
              <img className="h-4" src="items/gold_star.png" />
              <img className="h-4" src="items/gold_star.png" />
              <img className="h-4" src="items/gold_star.png" />
            </div>

          </div>


          <div
            className="relative w-40 h-40 flex flex-col items-center justify-center gap-3 
             bg-green-400 
             [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0%_50%)]
             before:absolute before:inset-0
             before:bg-green-400
             before:-z-10
             before:scale-105
             before:[clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0%_50%)]"
          >

            <img src="items/ds_logo.png" alt="logo" className="w-8 h-8" />

            <h2 className="text-lg font-bold text-gray-800 text-center">
              Data Science
            </h2>

            <div className="flex gap-1">
              <img className="h-4" src="items/gold_star.png" />
              <img className="h-4" src="items/gold_star.png" />
              <img className="h-4" src="items/gold_star.png" />
            </div>

          </div>

          <div
            className="relative w-40 h-40 flex flex-col items-center justify-center gap-3 
             bg-violet-400 
             [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0%_50%)]
             before:absolute before:inset-0
             before:bg-violet-400
             before:-z-10
             before:scale-105
             before:[clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0%_50%)]"
          >

            <img src="items/python-logo.svg" alt="logo" className="w-8 h-8" />

            <h2 className="text-lg font-bold text-gray-800 text-center">
              Python
            </h2>

            <div className="flex gap-1">
              <img className="h-4" src="items/gold_star.png" />
              <img className="h-4" src="items/gold_star.png" />
              <img className="h-4" src="items/gold_star.png" />
            </div>

          </div>
         </div>
        </div>
      


      <div className='profiles mt-24'>
        <div className='firstr flex gap-4 my-4'>
          <div className='bg-gray-700 w-full p-4 rounded-xl'>
            <img className='w-full h-32' src='items/leetcode.jpeg'/>
            <p>This is my Leetcode Profile Link-</p>
            <Link className='text-blue-400' href={"https://leetcode.com/u/Kishan_parashar/"}>Check My Profile</Link>
            {/* <Link href={}></Link> */}
            </div>
          <div className='bg-gray-700 w-full p-4 rounded-xl'>
            <img className='w-full h-32' src='items/linkedin.jpeg'/>
            <p>This is my Linkedin Profile Link-</p>
            <Link className='text-blue-400' href={"https://www.linkedin.com/in/kishan-parashar-a5a106286/"}>Check My Profile</Link>
            </div>
        </div>

        <div className='secondr flex w-full gap-4'>
          <div className='bg-gray-700 w-full p-4 rounded-xl'>
            <img className='w-full h-32' src='items/github.jpeg'/>
            <p>This is my GitHub Profile Link-</p>
            <Link className='text-blue-400' href={"https://github.com/KishanParashar"}>Check My Profile</Link>
          </div>
          <div className='bg-gray-700 w-full p-4 rounded-xl'>
           <img className='w-full h-32' src='items/gfg.jpg'/>
            <p>This is my GeeksForGeeks Profile Link-</p>
            <Link className='text-blue-400' href={"https://www.geeksforgeeks.org/profile/kparasht2kz"}>Check My Profile</Link>
            </div>
        </div>
      

      </div>
      
      </div>
    </>
  )
}

export default page
