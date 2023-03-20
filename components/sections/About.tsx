import React from "react";
import { motion } from "framer-motion";
import Title from "../Title";
import Layout from "../Layout";

type Props = {
  aboutText: string;
  imageUrl: string;
};

function About({ aboutText, imageUrl }: Props) {
  return (
    <Layout>
      <Title title="About" />

      <motion.img
        src={imageUrl}
        alt="This is a picture of me!"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mt-20 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-80 md:h-96 xl:w-[400px] xl:h-[500px] lg:w-44 lg:h-44 w-44 h-44"
      />
      <div className="md:space-y-10 px-0 md:px-10 space-y-5">
        <h4 className="text-2xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#ff79c6]/50">little</span>{" "}
          background
        </h4>
        <p className="md:text-base text-sm text-justify">{aboutText}</p>
      </div>
    </Layout>
  );
}

export default About;
