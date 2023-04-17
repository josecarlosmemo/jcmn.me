import React from "react";
import { motion } from "framer-motion";
import { Social } from "@/typings";
import dynamic from "next/dynamic";
import { SocialIconProps } from "react-social-icons";

// Dynamic import SocialIcon
const SocialIcon = dynamic(
  () =>
    import("react-social-icons").then((module) => module.SocialIcon) as Promise<
      React.ComponentType<SocialIconProps>
    >,
  { ssr: false }
);

type Props = {
  socials: Social[];
  email: string;
};

function Header({ socials, email }: Props) {
  return (
    <header className="fixed top-0 z-20 flex items-start justify-between w-full p-5 mx-auto -translate-x-1/2 max-w-7xl left-1/2 xl:items-center">
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

      <motion.div
        initial={{ opacity: 0, x: 500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center cursor-pointer text-dracula-darker-300"
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
    </header>
  );
}

export default Header;
