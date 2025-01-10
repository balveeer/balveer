import React from 'react'
import Title from './Title';
import AnimatedComponent from './AnimatedComponent';
const skills = {
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
    ],

      // Advanced JavaScript
      // "ES6+",
      // "Async/Await",
      // "Promise Handling",
      // "AJAX",
      // "REST APIs",
      // // React Ecosystem
      // "React Hooks",
      // "React Router",
      // "Context API",
      // "Redux",
      // "Next.js",
      // "DOM Manipulation",
      // "Responsive Design",
    other: [
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Vite",
      "Appwrite",
      "npm/yarn",
      "Redux Toolkit",
    ],

    tools: [
      "VS Code",
      "Git",
      "GitHub",
      "Git Bash",
      "Chrome DevTools",
      "Lighthouse",
    ],
  };
export default function Skills () {

  return (
    <div id="skills" className="w-full h-full min-h-screen flex flex-col p-8">
    <Title title="Skills" />
    <div className="w-full h-full flex flex-wrap justify-center text-center">
    {Object.entries(skills).map(([category, skillList], index) => 
      <div key={index} className="w-full md:w-1/3 bg-gradient-to-br from-gray-700 to-bg-gray-500 rounded-xl scale-95 duration-200 hover:z-40">
      <AnimatedComponent index={index}>
        <div className="w-full h-full gap-2 md:p-2">
          <h3 className="text-3xl py-4 text-black dark:text-white border-b-2 font-bold uppercase">
            {category}
          </h3>
          {skillList.map((skill, index) => (
              <div
                key={index}
                className="w-full mx-auto my-4 text-2xl rounded-lg text-black dark:text-white group"
              ><span className='opacity-0 group-hover:opacity-100'>✔</span>
                 {skill}
              </div>
            ))}
          </div>
        </AnimatedComponent>
      </div>
        )}
        </div>
    </div>
  )
}
