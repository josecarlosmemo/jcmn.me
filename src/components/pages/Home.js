import React from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../UI/AnimatedLetters";
import AnimatedLogo from "../UI/AnimatedLogo";
import "./Home.scss";

function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters str="Hi," idx={10} /> <br />
          <AnimatedLetters str={"I'm "} idx={15} />
          <AnimatedLetters str="José Carlos" idx={20} />
        </h1>
        <p>Software Developer / Designer</p>
        <Link className="flat-button" to="/contact">
          Contact Me
        </Link>
        <Link className="flat-button" to="/contact">
          Resume
        </Link>
      </div>

      <AnimatedLogo />
    </div>
  );
}

export default Home;
