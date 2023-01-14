import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/jacob-stein-7564a4203/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://github.com/jacob-stein1"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
