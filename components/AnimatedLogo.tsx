import React, { useRef, useEffect } from "react";
import anime from "animejs";
import Image from "next/image";
import LineLogo from "./LineLogo";

type Props = {};

function AnimatedLogo({}: Props) {
  const bgRef = useRef();
  const outlineLogoRef = useRef() as React.MutableRefObject<SVGSVGElement>;
  const solidLogoRef = useRef() as React.MutableRefObject<HTMLImageElement>;
  useEffect(() => {
    const timeline = anime.timeline({
      easing: "easeInOutSine",
    });

    // Background FadeIn
    timeline.add({
      targets: bgRef.current,
      easing: "easeInQuart",
      opacity: 1,
      duration: 4000,
    });

    // Drawing SVG
    timeline.add(
      {
        targets: "path.line-logo",
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 10000,
        direction: "alternate",
      },
      1000
    );
    // Solid Logo Appears
    timeline.add(
      {
        targets: solidLogoRef.current,
        opacity: 1,
        duration: 1000,
      },
      5000
    );
    timeline.add(
      {
        targets: outlineLogoRef.current,
        opacity: 0,
        duration: 1000,
      },
      5500
    );
  }, []);

  return (
    <div className="relative w-32 h-32 mx-auto">
      <Image
        src={"/assets/images/logo-pink.png"}
        alt={"JCMN Solid Logo"}
        width={128}
        height={128}
        ref={solidLogoRef}
        className="absolute top-auto bottom-auto right-auto z-10 m-auto opacity-0 unselectable"
        priority
      />

      <LineLogo
        innerRef={outlineLogoRef}
        width={128}
        height={128}
        className="stroke-[#ff79c6] stroke-[5px]"
      />
    </div>
  );
}

export default AnimatedLogo;
