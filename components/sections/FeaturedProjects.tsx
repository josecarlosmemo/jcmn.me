import React from "react";
import { motion } from "framer-motion";
import Title from "../Title";
import { Project } from "@/typings";
import ProjectCarousel from "../ProjectCarousel";

type Props = {
  projects: Project[];
};

function FeaturedProjects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      <Title title="Featured Projects" />

      <ProjectCarousel projects={projects} />

      <div className="w-full absolute top-[30%] bg-dracula-pink/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default FeaturedProjects;
