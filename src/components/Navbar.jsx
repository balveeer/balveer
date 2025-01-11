import React, { useEffect, useState } from 'react'

const Navbar = () => {
  
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`hidden fixed md:flex bg-black/90 dark:bg-white border-2 rounded-full h-16 w-4/5 text-white dark:text-black justify-around *:h-min items-center shadow-lg text-xl font-[100] rubik-mono-one-regular font-sans duration-200 left-1/2 -translate-x-1/2 z-[900] ${visible ? 'translate-y-0 mt-4' : '-translate-y-full opacity-0'}`}>
    <a href="#about" className="nav-items hover:text-yellow-500 ">
      About Me
    </a>
    <a href="#projects" className="nav-items hover:text-yellow-500 ">
      Projects
    </a>
    <a href="#skills" className="nav-items hover:text-yellow-500 ">
      Skills
    </a>
    <a href="#contact" className="nav-items hover:text-yellow-500 ">
      Contact
    </a>
  </nav>
  )
}

export default Navbar;