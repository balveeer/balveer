import React from 'react'
import Title from './Title'
import blogglingImg from "../assets/blogglingimg.png";
import crmImg from "../assets/crmimg.png";
import taskTrackerImg from "../assets/tasktrackerimg.png";
import tictactoeImg from "../assets/tictactoeimg.png";
import { GithubIcon,EyeIcon } from '../assets/icons'
import AnimatedComponent from './AnimatedComponent';
const ProjectCard = ({name,des,sourceLink,liveLink,image,index}) => {
  return (
            <div className="flex flex-col justify-between p-8 w-full md:w-1/2">
              
              <AnimatedComponent index={index+1}>
                <h3 className="text-4xl pt-2 text-center text-black dark:text-white">{name}</h3></AnimatedComponent>
                <div>
                <p className="pb-4 text-xl text-center text-black/70 dark:text-white/70 dark:text-white font-mono font-light">{des}</p>
              <AnimatedComponent index={index} >
              <img className="w-full max-w-lg mx-auto backdrop-blur" src={image} alt="" />
              </AnimatedComponent>
              <div className="">
                  <div className="w-full flex justify-center text-lg gap-4">
                    <a
                      href={"https://github.com/balveeer/"+sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="max-w-1/2 p-2 px-4 border-2 dark:text-white border-black dark:border-white dark:hover:text-yellow-500 dark:hover:border-yellow-500 hover:text-yellow-500 hover:border-yellow-500 rounded-lg group space-grotesk font-bold"
                    >
                      Code{" "}
                      <GithubIcon className="inline h-8 dark:fill-white group-hover:fill-yellow-500 " />
                    </a>
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="max-w-1/2 inline-block p-2 px-4 border-2 dark:text-white border-black dark:border-white dark:hover:text-yellow-500 dark:hover:border-yellow-500 hover:text-yellow-500 hover:border-yellow-500 rounded-lg group space-grotesk font-bold" 
                      >
                      Live{" "}
                      <EyeIcon className="inline h-8 text-center dark:fill-white group-hover:fill-yellow-500 ml-auto" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
  )
};
const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-full min-h-screen flex flex-col gap-4 p-8"
    >
      <Title title="Projects" />
      <div className="w-full h-full flex flex-wrap  justify-around items-center md:flex-row gap-y-2">
        <ProjectCard
          name="Bloggling"
          des="A modern blogging app"
          sourceLink="bloggling"
          liveLink="https://bloggling.netlify.app"
          image={blogglingImg}
          index={1}
        />
        <ProjectCard
          name="CRM App"
          des="A customer relation app"
          sourceLink="crm"
          liveLink=""
          image={crmImg}
          index={2}
        />
        <ProjectCard
          name="ToDo App"
          des="A simple todo app"
          sourceLink="todo-app"
          liveLink="https://nothing-todo.netlify.app"
          image={taskTrackerImg}
          index={3}
        />
        <ProjectCard
          name="Tic Tac Toe"
          des="a basic tictactoe game"
          sourceLink="tictactoe"
          liveLink="https://ticktactock.netlify.app"
          image={tictactoeImg}
          index={4}
        />
      </div>
    </div>
  )
}

export default Projects