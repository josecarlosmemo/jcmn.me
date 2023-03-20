import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "@/typings";

type Props = {
  socials: Social[];
  email: string;
};

function Header({ socials, email }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social.name}
            url={social.link}
            fgColor="#ff79c6"
            bgColor="transparent"
          />
        ))}
      </motion.div>
      {/* If you're getting issues with Hydration after making the Email logo
      clickable, its because you have nested <a /> tags. Social Icon is a
      component which contains an <a /> tag and Link is just a fancy a tag, so
      it will complain. I solved this by just using the url property of the
      social Icon and wrapping the get in touch with me text in a Link tag,
      which works since they are on the same level now and no longer nested. */}
      {/* <Link href="#contact"> */}
      <motion.div
        initial={{ opacity: 0, x: 500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-dracula-darker-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="#ff79c6"
          bgColor="transparent"
          url={`mailto:${email}`}
        />
        <a
          href={`mailto:${email}`}
          className="uppercase hidden md:inline-flex text-sm text-[#ff79c6] font-semibold tracking-wider ml-2"
        >
          Get in Touch
        </a>
      </motion.div>
      {/* </Link> */}
    </header>
  );
}

export default Header;
