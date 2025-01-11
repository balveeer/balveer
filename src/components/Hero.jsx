import React, { useEffect, useState } from 'react'
import avatar from '../assets/bs.jpg'
const windowDarkTheme = window.matchMedia( "(prefers-color-scheme: dark)" ).matches;
import { SunIcon, MoonIcon, LinkedinIcon, XIcon, GithubIcon } from '../assets/icons'
const Hero = () => {
    const [theme, setTheme] = useState(windowDarkTheme ? "dark" : "light");
  useEffect(()=> {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
    },[theme]);
    
  return (
    <div className="w-full h-full min-h-screen flex flex-col md:flex-row-reverse items-center justify-center rubik-mono-one-regular">
      <div className="w-full md:w-1/2 h-full flex justify-center md:justify-start items-center p-8 pt-4">
        <span className="relative">
          <img
            className="w-full min-h-64 min-w-64 rounded-full max-w-md select-none shadow-black shadow-lg"
            src={avatar}
            alt="avatar image"
          />
          {theme !== "dark" ? (
            <SunIcon
              onClick={()=>setTheme("dark")}
              className="text-black cursor-pointer absolute top-2 right-2 h-8 hover:text-yellow-500"
            />
          ) : (
            <MoonIcon
            onClick={() => setTheme("light")}
              className="text-white cursor-pointer absolute top-2 right-2 h-8 hover:text-yellow-500"
            />
          )}
        </span>
      </div>
      <div className="w-full flex flex-col gap-2  h-full md:w-1/2 text-center md:text-end">
        <h1 className={`text-6xl text-yellow-400 leading-none tracking-tight`}>
          Balveer
          <br />
          <span className="">Singh</span>
        </h1>
        <p className="dark:text-white text-2xl">Frontend Developer</p>
        <div className="flex mx-auto md:mr-0 md:ml-auto p-2 px-4 border-2 border-black justify-center rounded-xl gap-4 w-min bg-white">
          <a
            href="https://www.linkedin.com/in/btwbalveer/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 hover:fill-yellow-500"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://www.x.com/btwbalveer"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 hover:fill-yellow-500"
          >
            <XIcon />
          </a>
          <a
            href="https://www.github.com/balveeer"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 hover:fill-yellow-500"
          >
            <GithubIcon />
          </a>
        </div>
        </div>
    </div>

  )
}

export default Hero