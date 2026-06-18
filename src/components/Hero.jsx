import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">

      <img
        src={profile}
        alt="Tanmay Jain"
        className="profile-img"
      />

      <h1>Tanmay Jain</h1>

      <h3>
        Full Stack Developer • Machine Learning Enthusiast
      </h3>

      <p>
        Final-year Information Technology student with experience in
        full-stack development, machine learning, and software engineering.
        Passionate about building scalable web applications, intelligent
        systems, and practical solutions to real-world problems.
      </p>

      <div className="buttons">

        <a
          href="https://github.com/TanmayJain-27"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/tanmayjain2745"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="/Tanmay_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>

      </div>

      <div className="hero-stats">

        <div className="stat">
          <h2>3+</h2>
          <p>Projects</p>
        </div>

        <div className="stat">
          <h2>3</h2>
          <p>Virtual Experiences</p>
        </div>

        <div className="stat">
          <h2>2026</h2>
          <p>Graduate</p>
        </div>

      </div>

    </section>
  );
}

export default Hero;