import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";
import LogoNavbar from "../../assets/images/logo-navbar.png";
import LogoSubtitle from "../../assets/images/logo-subtitle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faUser,
  faFileLines,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoNavbar} alt="logo" />
        <img src={LogoSubtitle} className="sub-logo" alt="jcmn" />
      </Link>

      <nav>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#6272a4" />
        </NavLink>

        <NavLink
          className={(navData) => (navData.isActive ? "active" : " about-link")}
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#6272a4" />
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive ? "active" : " contact-link"
          }
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#6272a4" />
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive ? "active" : " projects-link"
          }
          to="/projects"
        >
          <FontAwesomeIcon icon={faRectangleList} color="#6272a4" />
        </NavLink>

        <Link className="resume-link" to="/contact">
          <FontAwesomeIcon icon={faFileLines} color="#6272a4" />
        </Link>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/josecarlosmemo"
          >
            <FontAwesomeIcon icon={faGithub} color="#6272a4" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="linkLinkedIn">
            <FontAwesomeIcon icon={faLinkedin} color="#6272a4" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
