import React from "react";
import { motion } from "framer-motion/";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="relative flex cursor-pointer group">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src="https://www.gstatic.com/devrel-devsite/prod/vf835aa6b9cd89b3f27e5e46b762d88066cfe5cc51e31c466c45c27dbcd2bcca1/firebase/images/touchicon-180.png"
        alt=""
        className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale md:w-28 md:h-28"
      />
      <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32 md:w-28 md:h-28">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
