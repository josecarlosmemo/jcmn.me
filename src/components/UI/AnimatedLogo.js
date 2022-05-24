import React, { useRef, useEffect } from "react";
import Logo from "../../assets/images/logo-pink.png";
import { ReactComponent as LogoLines } from "../../assets/images/logo-lines.svg";
import "./AnimatedLogo.scss";
import anime from "animejs";

function AnimatedLogo() {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

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
        targets: "path",
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
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" src={Logo} alt="JCMN" ref={solidLogoRef} />
      <LogoLines ref={outlineLogoRef} />
    </div>
  );
}

export default AnimatedLogo;
