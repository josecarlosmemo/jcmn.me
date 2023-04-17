import React from "react";
import { motion } from "framer-motion";
import Title from "../Title";
import Layout from "../Layout";
import Image from "next/image";

type Props = {
  aboutText: string;
  imageUrl: string;
};

function About({ aboutText, imageUrl }: Props) {
  return (
    <Layout>
      <Title title="About" />

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="md:mt-20 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-80 md:h-96 xl:w-[400px] xl:h-[500px] lg:w-44 lg:h-44 w-44 h-44 mt-24 "
      >
        <Image
          src={imageUrl}
          alt="This is a picture of me!"
          width={400}
          height={500}
          className="rounded-full object-cover md:rounded-lg md:w-80 md:h-96 xl:w-[400px] xl:h-[500px] lg:w-44 lg:h-44 w-44 h-44"
        />
      </motion.div>

      <div className="px-0 space-y-5 md:space-y-10 md:px-10">
        <h4 className="text-2xl font-semibold md:text-4xl">
          Here is a{" "}
          <span className="underline decoration-[#ff79c6]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm text-justify md:text-base">{aboutText}</p>
      </div>
    </Layout>
  );
}

export default About;
