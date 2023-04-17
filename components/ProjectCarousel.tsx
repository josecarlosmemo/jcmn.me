import { Project } from "@/typings";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

type Props = {
  projects: Project[];
};

function ProjectCarousel({ projects }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const target = e.target as HTMLDivElement;
    const scrollPosition = target.scrollLeft;
    const slideWidth = target.scrollWidth / projects.length;
    const slideIndex = Math.round(scrollPosition / slideWidth);
    setCurrentSlide(slideIndex);
  };

  return (
    <>
      <div
        className="relative z-20 flex w-full overflow-hidden overflow-x-scroll overflow-y-hidden snap-x snap-mandatory"
        onScroll={handleScroll}
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
      {/* Add Scroll Indicator with dracula scheme and lines */}

      {/* TODO: Elavate the indicator on md onwards */}

      <div className="absolute left-0 z-50 flex items-center justify-center w-full h-10 bottom-32 xs:bottom-4 md:bottom-0">
        <div className="flex space-x-2">
          {projects.map((_, i) => (
            <motion.div
              key={i}
              className={`w-10 h-1 rounded-full`}
              initial={{ backgroundColor: "#bd93f9", opacity: 0.5 }}
              animate={
                i === currentSlide
                  ? { backgroundColor: "#ff79c6", opacity: 1 }
                  : undefined
              }
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
      </div>

      {/*TODO: Add left and right arrows to scroll through the projects */}
    </>
  );
}

export default ProjectCarousel;
