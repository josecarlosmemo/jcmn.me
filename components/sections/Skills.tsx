import React from "react";
import { motion } from "framer-motion";
import Title from "../Title";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { Skill } from "@/typings";

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 h-screen justify-center xl:space-y-0 mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Title title="Skills" />
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm px-10">
        Here are some of the technologies I&apos;ve been working with recently:
      </h3>

      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
      >
        <TagCloud
          className="pt-24 text-sm text-dracula md:pt-0"
          options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
          })}
        >
          {[...skills.map((skill) => skill.title)]}
        </TagCloud>
      </motion.div>

      {/* Latest project */}
    </motion.div>
  );
}

export default Skills;
