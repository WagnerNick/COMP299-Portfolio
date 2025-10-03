import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="home-text">
        <h1>
          Hi, I'm <span className="highlight">Nick</span>
        </h1>
        <h2 className="role">Aspiring Game Developer</h2>
        <p>
          I’m passionate about creating interactive experiences and games, primarily in Unity with C#. I also explore
          web technologies, 3D modeling, and design tools to bring creative ideas to life.
        </p>

        <div className="home-buttons">
          <a href="/about" className="btn">
            About Me
          </a>
          <a href="/contact" className="btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="home-image">
        <img src="src/assets/me.jpg" alt="Profile" />
      </div>
    </section>
  );
}
