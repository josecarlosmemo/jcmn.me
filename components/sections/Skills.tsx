import React from "react";
import { motion } from "framer-motion";
import Skill from "../Skill";
import Title from "../Title";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Title title="Skills" />
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Here are some of the technologies I&apos;ve been working with recently:
      </h3>

      <TagCloud
        className="text-dracula text-sm"
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "fast",
        })}
      >
        {[
          "Bash",
          "C",
          "C++",
          "C#",
          "CSS",
          "Dart",
          "HTML",
          "JavaScript",
          "MATLAB",
          "Lua",
          "Python",
          "R",
          "SQL",
          "Arduino",
          "Express",
          "Flutter",
          "Node.js",
          "Qt",
          "React",
          "Svelte",
          "Unity",
          "WordPress",
          "Figma",
          "Firebase",
          "Git",
          "Heroku",
          "Illustrator",
          "Linux",
          "Photoshop",
          "Postman",
          "PyCharm",
          "VS Code",
          "Matplotlib",
          "NumPy",
          "OpenCV",
          "pandas",
          "Redux",
          // "React",
          "Next.js",
          "Framer Motion",
          "Tailwind CSS",
          "TypeScript",
          // "JavaScript",
          // "HTML",
          // "CSS",
          // "Python",
          // "Django",
          // "SQL",
          // "MongoDB",
          // "Git",
          // "GitHub",
          // "Figma",
          // "Adobe XD",
          // "Adobe Photoshop",
          // "Adobe Illustrator",
          // "Adobe Premiere Pro",
          // "Adobe After Effects",
          // "Adobe Lightroom",
          // "Adobe Audition",
          // "Adobe InDesign",
          // "Adobe Animate",
          // "Adobe Spark",
          // "Adobe Spark AR",
          // "Adobe Spark Video",
          // "Adobe Spark Post",
          // "Adobe Spark Page",
          // "Adobe Spark Video",
          // "Adobe Spark Video",
        ]}
      </TagCloud>

      {/* <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div> */}
    </motion.div>
  );
}

export default Skills;
