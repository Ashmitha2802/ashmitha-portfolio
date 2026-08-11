import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div href="#home" className="logo">
          ASHMITHA<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="small-text">
            COMPUTER SCIENCE ENGINEERING STUDENT
          </p>

          <h1>
            Ashmitha <span>SV</span>
          </h1>

          <h2>
            AI/ML & Full Stack Developer
          </h2>

          <p className="hero-description">
            Passionate about building AI-powered applications,
            solving real-world problems and creating modern
            full-stack solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
  <a
    href="https://www.linkedin.com/in/ashmitha-sv-558197294"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>

  <a
    href="https://github.com/Ashmitha2802"
    target="_blank"
    rel="noreferrer"
  >
    GitHub ↗
  </a>

  <a
    href="https://leetcode.com/u/ashmitha2817/"
    target="_blank"
    rel="noreferrer"
  >
    LeetCode ↗
  </a>
</div>

        </div>


        <div className="hero-visual">
          <div className="glow-circle">
            <div className="circle-inner">
                   &lt;/&gt;
              </div>
          </div>
        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="section">

        <p className="section-label">
          01 — ABOUT
        </p>

        <h2 className="section-title">
          Building with <span>code & intelligence.</span>
        </h2>

        <div className="about-content">

          <p>
            I am a Computer Science Engineering student with
            hands-on experience in Java, Python, Full Stack
            Development, Machine Learning and Computer Vision.
          </p>

          <p>
            I am passionate about building AI-powered applications
            and solving real-world problems using modern
            technologies.
          </p>

        </div>

        <div className="about-stats">

          <div className="stat">
            <h3>8.85</h3>
            <p>CGPA / 10</p>
          </div>

          <div className="stat">
            <h3>2</h3>
            <p>Internships</p>
          </div>

          <div className="stat">
            <h3>3</h3>
            <p>Projects</p>
          </div>

          <div className="stat">
            <h3>2</h3>
            <p>First Prizes</p>
          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}
      <section id="skills" className="section">

        <p className="section-label">
          02 — SKILLS
        </p>

        <h2 className="section-title">
          My <span>Tech Stack</span>
        </h2>

        <div className="skills-container">

          <div className="skill-group">
            <h3>Programming</h3>

            <div className="skill-list">
              <span>Java</span>
              <span>Python</span>
            </div>
          </div>


          <div className="skill-group">
            <h3>Web Technologies</h3>

            <div className="skill-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>React</span>
              <span>Bootstrap</span>
              <span>REST APIs</span>
            </div>
          </div>


          <div className="skill-group">
            <h3>Databases</h3>

            <div className="skill-list">
              <span>MongoDB</span>
              <span>MySQL</span>
            </div>
          </div>


          <div className="skill-group">
            <h3>AI / ML</h3>

            <div className="skill-list">
              <span>Computer Vision</span>
              <span>OpenCV</span>
              <span>MediaPipe</span>
              <span>Flask</span>
              <span>FastAPI</span>
              <span>NumPy</span>
              <span>Pandas</span>
              <span>Scikit-learn</span>
              <span>LLMs</span>
              <span>Agentic AI</span>
              <span>Multi-Agent Systems</span>
            </div>
          </div>


          <div className="skill-group">
            <h3>Deployment</h3>

            <div className="skill-list">
              <span>Vercel</span>
              <span>Netlify</span>
              <span>Render</span>
              <span>Streamlit</span>
            </div>
          </div>


          <div className="skill-group">
            <h3>Core CS</h3>

            <div className="skill-list">
              <span>SQL</span>
              <span>OOP</span>
              <span>DSA</span>
              <span>Operating Systems</span>
              <span>DBMS</span>
            </div>
          </div>


          <div className="skill-group">
            <h3>Tools</h3>

            <div className="skill-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Jira</span>
            </div>
          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section">

        <p className="section-label">
          03 — PROJECTS
        </p>

        <h2 className="section-title">
          Things I've <span>built.</span>
        </h2>


        <div className="projects-grid">


          {/* PROJECT 1 */}
          <div className="project-card">

            <div className="project-top">
              <span className="project-number">01</span>

              <a href="#" target="_blank">
                GitHub ↗
              </a>
            </div>

            <h3>
              Enhancing Yoga Practice using Computer Vision
            </h3>

            <p>
              Built a real-time yoga pose detection system using
              MediaPipe keypoints.
            </p>

            <p>
              Trained a pose classification model achieving
              <strong> 91% accuracy </strong>
              for yoga pose recognition.
            </p>

            <p>
              Implemented real-time pose accuracy evaluation by
              comparing user posture with reference poses.
            </p>

            <p>
              Integrated Flask backend with frontend for an
              interactive user experience.
            </p>

            <div className="tech-stack">
              Python · Computer Vision · MediaPipe ·
              Machine Learning · Flask
            </div>

          </div>


          {/* PROJECT 2 */}
          <div className="project-card">

            <div className="project-top">
              <span className="project-number">02</span>

              <a href="#" target="_blank">
                GitHub ↗
              </a>
            </div>

            <h3>
              AI-Powered Eye Strain and Sleep Quality Estimator
            </h3>

            <p>
              Developed a real-time AI application to detect
              eye strain using facial landmarks.
            </p>

            <p>
              Extracted blink rate, Eye Aspect Ratio (EAR), and
              yawning features using MediaPipe and OpenCV.
            </p>

            <p>
              Trained Random Forest, XGBoost and CatBoost models,
              achieving <strong>93.86% prediction accuracy.</strong>
            </p>

            <p>
              Built a Flask web application for real-time
              monitoring, prediction and health recommendations.
            </p>

            <div className="tech-stack">
              Python · Flask · OpenCV · MediaPipe ·
              Scikit-learn · Random Forest · XGBoost · CatBoost
            </div>

          </div>


          {/* PROJECT 3 */}
          <div className="project-card">

            <div className="project-top">
              <span className="project-number">03</span>

              <div className="project-links">
                <a href="#" target="_blank">
                  GitHub ↗
                </a>

                <a href="#" target="_blank">
                  Live ↗
                </a>
              </div>
            </div>

            <h3>
              AI Voice Learning Tutor
            </h3>

            <p>
              Built a multi-agent AI learning assistant with
              Teaching, Quiz, Notes and Resource agents powered
              by OpenRouter API.
            </p>

            <p>
              Implemented voice-based interaction using speech
              recognition and text-to-speech.
            </p>

            <p>
              Developed a Smart Notes generator with one-click
              PDF export using ReportLab.
            </p>

            <p>
              Designed a responsive modern dark-themed UI with
              React and Tailwind CSS.
            </p>

            <div className="tech-stack">
              React · Vite · Tailwind CSS · FastAPI · Python ·
              OpenRouter API · ReportLab
            </div>

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="section">

        <p className="section-label">
          04 — EXPERIENCE
        </p>

        <h2 className="section-title">
          My <span>Internships</span>
        </h2>


        <div className="experience-container">


          {/* CENSOWARE */}
          <div className="experience-card">

            <div className="experience-date">
              DEC 2025 · 2 WEEKS
            </div>

            <div className="experience-content">

              <h3>
                Frontend Development Intern
              </h3>

              <h4>
                Censoware Technologies
              </h4>

              <ul>
                <li>
                  Developed Time Capsule, a React and Bootstrap
                  based web application.
                </li>

                <li>
                  Translated design requirements into responsive,
                  reusable UI components.
                </li>

                <li>
                  Implemented interactive layouts and page
                  navigation with consistent styling.
                </li>

                <li>
                  Strengthened practical skills in component-driven
                  frontend development.
                </li>
              </ul>

            </div>

          </div>


          {/* TECHVOLT */}
          <div className="experience-card">

            <div className="experience-date">
              JUN 2025 · 2 WEEKS
            </div>

            <div className="experience-content">

              <h3>
                Frontend Development Intern
              </h3>

              <h4>
                Techvolt
              </h4>

              <ul>
                <li>
                  Built responsive user interfaces using React.js
                  and Bootstrap.
                </li>

                <li>
                  Created reusable React components to improve
                  maintainability.
                </li>

                <li>
                  Designed web pages including forms and
                  navigation components.
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ACHIEVEMENTS ================= */}
      <section id="achievements" className="section">

        <p className="section-label">
          05 — ACHIEVEMENTS
        </p>

        <h2 className="section-title">
          Proud moments & <span>recognition.</span>
        </h2>


        <div className="achievement-grid">

          <div className="achievement-card">

            <div className="achievement-icon">
              01
            </div>

            <h3>
              First Prize — Project Expo
            </h3>

            <p>
              TRENGEST 2K25
            </p>

            <span>
              Sri Ramakrishna Engineering College
            </span>

          </div>


          <div className="achievement-card">

            <div className="achievement-icon">
              02
            </div>

            <h3>
              First Prize — Paper Presentation
            </h3>

            <p>
              "Yoga Robot"
            </p>

            <span>
              TRENGEST 2K25 · Sri Ramakrishna Engineering College
            </span>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}
      <section className="section">

        <p className="section-label">
          06 — EDUCATION
        </p>

        <h2 className="section-title">
          Academic <span>Journey</span>
        </h2>


        <div className="education-card">

          <div>
            <h3>
              Sri Ramakrishna Engineering College
            </h3>

            <p>
              Bachelor of Engineering — Computer Science
            </p>

            <span>
              Aug 2023 — Present
            </span>
          </div>

          <div className="education-score">
            8.85
            <small>/10 CGPA</small>
          </div>

        </div>


        <div className="education-card">

          <div>
            <h3>
              GKD Matriculation Higher Secondary School
            </h3>

            <p>
              HSC
            </p>

            <span>
              Jan 2021 — May 2023
            </span>
          </div>

          <div className="education-score">
            94.8%
          </div>

        </div>

      </section>


      {/* ================= CERTIFICATIONS ================= */}
      <section className="section">

        <p className="section-label">
          07 — CERTIFICATIONS
        </p>

        <h2 className="section-title">
          Learning beyond the <span>classroom.</span>
        </h2>

        <div className="certifications">

          <div className="cert-card">
            <span>01</span>
            <h3>
              Introduction to Generative AI
            </h3>
            <p>
              Google Cloud Skills Boost
            </p>
          </div>

          <div className="cert-card">
            <span>02</span>
            <h3>
              Employability Skills: Job Ready (With AI)
            </h3>
            <p>
              Advanced Level — Wadhwani Foundation
            </p>
          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section id="contact" className="section contact">

        <p className="section-label">
          08 — CONTACT
        </p>

        <h2 className="section-title">
          Let's build something <span>great.</span>
        </h2>

        <p>
          Have an opportunity or want to collaborate?
          Let's connect.
        </p>

       <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ashmitha2802@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="primary-btn"
>
  Say Hello →
</a>

        <div className="contact-links">

          <a href="#" target="_blank">
            LinkedIn
          </a>

          <a href="#" target="_blank">
            GitHub
          </a>

          <a href="#" target="_blank">
            LeetCode
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer>
        © 2026 Ashmitha SV · Built with React
      </footer>

    </div>
  );
}

export default App;