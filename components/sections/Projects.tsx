import React from "react";
import { motion } from "framer-motion";
import Title from "../Title";

type Props = {};

function Projects({}: Props) {
  //   const projects = [1, 2, 3, 4, 5];
  //   const tech = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <Title title="Projects" />
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-400/80">
        {/* {projects.map((project, i) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src="https://www.gstatic.com/devrel-devsite/prod/vf835aa6b9cd89b3f27e5e46b762d88066cfe5cc51e31c466c45c27dbcd2bcca1/firebase/images/touchicon-180.png"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#ff0000]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>
                UPS Clone
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {tech.map((tech, i) => (
                  <img key={tech} className="h-10 w-10" />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                Elit irure ut cupidatat eu minim excepteur elit dolore.
                Consequat cupidatat cillum dolor labore. Elit quis veniam magna
                nisi. Proident nostrud Lorem dolore id veniam elit aute elit
                nulla. Reprehenderit mollit adipisicing labore in occaecat
                pariatur aliqua labore. Dolor aliqua dolore ipsum labore mollit.
                Duis eu velit nulla labore laborum. Excepteur consequat minim
                dolor nulla fugiat. Cillum eiusmod labore quis dolore excepteur
                eu eiusmod pariatur officia veniam ut cupidatat magna minim.
                Magna officia elit consequat officia consectetur veniam ea
                proident irure veniam.
              </p>
            </div>
          </div>
        ))} */}
      </div>
      <div className="w-full absolute top-[30%] bg-dracula-pink/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
