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


      <p>
        Final-year Information Technology student with experience in
        full-stack development, machine learning, and computer vision.
        Passionate about building practical software solutions and
        solving real-world problems through technology.
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
          <p>Simulations</p>
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