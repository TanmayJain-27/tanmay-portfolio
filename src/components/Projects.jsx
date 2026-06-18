import agegender from "../assets/agegender.png";
import jobnavigator from "../assets/jobnavigator.png";
import decimind from "../assets/decimind.png";

import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects">

      <h2>Projects</h2>

      <div className="projects-grid">

        {/* Age & Gender Prediction */}

        <div className="project-card">

          <a
            href="https://github.com/TanmayJain-27/Age-And-Gender-Prediction"
            target="_blank"
            rel="noreferrer"
            className="project-image"
          >
            <img
              src={agegender}
              alt="Age and Gender Prediction"
            />
          </a>

          <h3>Age & Gender Prediction</h3>

          <p>
            Deep learning-based computer vision system for age group
            and gender classification using images and webcam streams.
          </p>

          <div className="project-tags">
            <span>Python</span>
            <span>OpenCV</span>
            <span>CNN</span>
            <span>Deep Learning</span>
          </div>

          <a
            href="https://github.com/TanmayJain-27/Age-And-Gender-Prediction"
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            <FaGithub />
            Source Code
          </a>

        </div>

        {/* Job Navigator */}

        <div className="project-card">

          <a
            href="https://github.com/TanmayJain-27/Job-Navigator"
            target="_blank"
            rel="noreferrer"
            className="project-image"
          >
            <img
              src={jobnavigator}
              alt="Job Navigator"
            />
          </a>

          <h3>Job Navigator</h3>

          <p>
            Full-stack platform that helps users discover jobs,
            apply for roles, and track applications efficiently.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Express.js</span>
          </div>

          <a
            href="https://github.com/TanmayJain-27/Job-Navigator"
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            <FaGithub />
            Source Code
          </a>

        </div>

        {/* DeciMind AI */}

        <div className="project-card">

          <a
            href="https://github.com/TanmayJain-27/-DeciMind-AI"
            target="_blank"
            rel="noreferrer"
            className="project-image"
          >
            <img
              src={decimind}
              alt="DeciMind AI"
            />
          </a>

          <h3>DeciMind AI</h3>

          <p>
            AI-powered decision intelligence platform with governance
            analytics and explainable AI capabilities.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>Python</span>
            <span>Machine Learning</span>
            <span>SQLite</span>
          </div>

          <a
            href="https://github.com/TanmayJain-27/-DeciMind-AI"
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            <FaGithub />
            Source Code
          </a>

        </div>

      </div>

    </section>
  );
}

export default Projects;