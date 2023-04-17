import React, { Children } from "react";
import { motion, AnimationProps, MotionProps } from "framer-motion";

type Props = {
  id: string;
  children: React.ReactNode;
  header?: string;
  subheader?: string;
  className?: string;
  initial?: AnimationProps["initial"];
  whileInView?: MotionProps["whileInView"];
  transition?: AnimationProps["transition"];
  isAnimationDisabled?: boolean;
};

// TODO: Fix classnames for section

function Section({
  id,
  children,
  header,
  subheader,
  isAnimationDisabled,
  initial,
  whileInView,
  transition,
}: Props) {
  if (!initial) {
    initial = { opacity: 0 };
  }
  if (!whileInView) {
    whileInView = { opacity: 1 };
  }
  if (!transition) {
    transition = { duration: 1.5 };
  }

  return (
    <motion.section
      initial={isAnimationDisabled ? undefined : initial}
      whileInView={isAnimationDisabled ? undefined : whileInView}
      transition={isAnimationDisabled ? undefined : transition}
      className={`relative flex flex-col h-screen text-center md:text-left  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden pb-12 snap-center`}
      id={id}
    >
      {header && (
        <h3 className="absolute top-20 uppercase md:tracking-[20px] text-gray-500 text-xl tracking-[10px] text-center m-auto px-10 md:px-0">
          {header}
        </h3>
      )}

      {subheader && (
        <h4 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm px-10">
          {subheader}
        </h4>
      )}

      {children}
    </motion.section>
  );
}

export default Section;
