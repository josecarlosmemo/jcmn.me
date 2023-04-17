import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import Image from "next/image";
import PlayCircleIcon from "./icons/PlayCircleIcon";
import CodeBracketSquareIcon from "./icons/CodeBracketSquareIcon";

type Props = {
  project: Project;
  // callback: () => void;
};

function ProjectCard({ project }: Props) {
  // Make them swipeable

  return (
    <div className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen gap-2 px-10 m-10 snap-center md:justify-items-center md:justify-center md:p-44">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-24 h-24 my-5 md:h-36 md:w-36 lg:h-40 lg:w-40 unselectable"
      >
        <Image
          src={project.image}
          alt={`${project.title} Logo`}
          width={400}
          height={400}
          className="w-24 h-24 md:h-36 md:w-36 lg:h-40 lg:w-40"
        />
      </motion.div>

      <div className="max-w-6xl px-0 space-y-2 md:px-10">
        <h4 className="text-4xl font-semibold text-center">{project.title}</h4>
        <motion.div
          className="flex flex-wrap items-center justify-center py-1 space-x-2"
          initial={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {project.technologies.map((tech, i) => (
            <motion.img
              key={`${tech.title}-${i}-${project.title}`}
              initial={{ x: -50, opacity: 0 }}
              transition={{ duration: 1.2, delay: i * 0.2 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              src={tech.icon}
              alt={`${tech.title} Icon`}
              className={`md:h-14 md:w-14 unselectable ${
                project.technologies.length > 5 ? "h-10 w-10 mt-3" : "h-14 w-14"
              }`}
            />
          ))}
        </motion.div>
        <p className="text-base text-center lg:text-xl lg:text-left xs:text-xs md:pb-5">
          {project.description}
        </p>
      </div>
      <div className="flex items-center my-10 mt-5 space-x-5">
        {project.demoLink && (
          <a
            href={project.demoLink ?? ""}
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-4 py-2 space-x-2 text-sm text-white transition-all rounded-md bg-dracula hover:bg-dracula-light hover:text-dracula"
          >
            <PlayCircleIcon className="w-5 h-5" />
            <span>Demo</span>
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink ?? ""}
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-4 py-2 space-x-2 text-sm text-white transition-all rounded-md bg-dracula hover:bg-dracula-light hover:text-dracula"
          >
            <CodeBracketSquareIcon className="w-5 h-5" />
            <span>Source</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
