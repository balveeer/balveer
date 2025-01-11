import React from 'react'
import Title from './Title'
const AboutMe = () => {
  return (
    <div
      id="about"
      className="w-full h-full min-h-screen flex flex-col gap-4 px-2 py-8"
    >
      <Title title="About Me" />
      <p className="text-2xl whitespace-break-spaces dark:text-white w-full max-w-3xl mx-auto space-grotesk p-4 rounded-2xl border-4 border-gray-600">
        👋Hey there! I'm I'm Balveer Singh- the kind of person who gets
        excited about making websites not just work, but work beautifully.
        <br />
        👉My journey into web development started with curiosity about how
        websites tick, and now here I am, building them with React and getting
        better every day. While I'm fresh in the professional world, I've
        poured my heart into learning and creating projects that I'm genuinely
        proud of.
        <br />
        👉When I'm not coding, you'll probably find me watching coding
        tutorials (okay, and maybe some Netflix), experimenting with new CSS
        tricks, or trying to figure out why my console.log isn't working
        (we've all been there!).
        <br />
        👉I believe in writing code that humans can read and creating
        interfaces that make people's lives easier. Currently diving deeper
        into Next.js and always excited about learning what's new in the
        ever-changing world of web development.
      </p>
      <a
        href="/src/assets/balveerresume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto p-2 px-4 border-2 dark:text-white border-black dark:border-white dark:hover:text-yellow-500 dark:hover:border-yellow-500 hover:text-yellow-500 hover:border-yellow-500 rounded-lg group space-grotesk font-bold"
      >
        <button>Resume📝</button>
      </a>
    </div>

  )
}

export default AboutMe