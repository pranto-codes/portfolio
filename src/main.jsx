import React from "react";
import { createRoot } from "react-dom/client";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowUpRight,
  ExternalLink,
  Download,
  Code2,
  PenLine,
  BarChart3,
} from "lucide-react";
import "./styles.css";
import profilePic from "./../public/8d0aec01-5351-415f-bf90-b2c47956f254.png";

const linkedin = "https://www.linkedin.com/in/shakibur-rahman-620326336/";
const github = "https://github.com/pranto-codes";

const projects = [
  {
    title: "Dragon News",
    description:
      "A responsive news platform focused on clean layouts, category-based content, and a smooth reading experience.",
    tags: ["React", "JavaScript", "Responsive UI"],
    link: "https://dragonewspranto.netlify.app",
  },
  {
    title: "Pranto Mess Blog",
    description:
      "A blog-style web project designed to present content in a simple, readable, user-friendly interface.",
    tags: ["React", "CSS", "Web Design"],
    link: "https://prantomess-blog.netlify.app/",
  },
];

function App() {
  return (
    <div className="site">
      <header className="navbar">
        {/**
       *   <a className="logo" href="#home">
          SR<span>.</span>
        </a>
       */}
        {/**   <img src={profilePic} alt="" /> */}

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-btn" href={linkedin} target="_blank" rel="noreferrer">
          LinkedIn <ArrowUpRight size={16} />
        </a>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">ECONOMICS × TECHNOLOGY × WRITING</p>
            <h1>
              Hi, I'm <span>Shakibur Rahman.</span>
            </h1>
            <h2>Front-End Web Developer & Economics Student.</h2>
            <p className="hero-text">
              I build responsive, user-friendly web experiences while studying
              Economics at Islamic University, Kushtia. I also write about
              economics and ideas that matter.
            </p>
            <div className="actions">
              <a className="primary-btn" href="#projects">
                View My Work <ArrowUpRight size={18} />
              </a>
              <a
                className="secondary-btn"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
            <div className="socials">
              <a href={github} target="_blank" rel="noreferrer">
                <Github size={19} /> GitHub
              </a>
              <a href="mailto:prantome98@gmail.com">
                <Mail size={19} /> Email
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-glow"></div>
            <div className="initials">
              <img
                src={profilePic}
                alt="Shakibur Rahman"
                style={{
                  width: "350px",
                  height: "440px",
                  objectFit: "",
                  borderRadius: "10%",
                }}
              />
            </div>
            <div className="hero-card-bottom">
              <span>Based in Bangladesh</span>
              <span>Available for opportunities</span>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">01 — ABOUT</p>
            <h2>A developer with an analytical mindset.</h2>
          </div>
          <div className="about-grid">
            <p>
              I'm a final-year Economics student at Islamic University, Kushtia
              with a CGPA of 3.45 and 2+ years of front-end web development
              experience.
            </p>
            <p>
              My work combines technical problem-solving with analytical
              thinking, academic research, and writing. I enjoy turning ideas
              into clean, responsive interfaces that people can actually use.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">02 — SKILLS</p>
            <h2>What I work with.</h2>
          </div>
          <div className="skill-grid">
            <div className="skill-card">
              <Code2 size={28} />
              <h3>Front-End Development</h3>
              <p>HTML, CSS, JavaScript, React, responsive web design.</p>
            </div>
            <div className="skill-card">
              <BarChart3 size={28} />
              <h3>Economics & Research</h3>
              <p>
                Economic analysis, analytical thinking, and academic research.
              </p>
            </div>
            <div className="skill-card">
              <PenLine size={28} />
              <h3>Writing</h3>
              <p>Technical writing, academic writing, and content writing.</p>
            </div>
            <div className="skill-card">
              <Github size={28} />
              <h3>Development Workflow</h3>
              <p>Git and GitHub for version control and project management.</p>
            </div>
          </div>
          <div className="tech-list">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Responsive Design",
              "Git",
              "GitHub",
            ].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading row">
            <div>
              <p className="eyebrow">03 — PROJECTS</p>
              <h2>Selected work.</h2>
            </div>
            <a
              className="text-link"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="project-grid">
            {projects.map((project, i) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{i + 1}</div>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Visit project <ExternalLink size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-heading">
            <p className="eyebrow">04 — EDUCATION</p>
            <h2>Academic background.</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span>2022 — Present</span>
              <div>
                <h3>Islamic University, Kushtia</h3>
                <p>Bachelor of Economics · Final Year · CGPA 3.45</p>
              </div>
            </div>
            <div className="timeline-item">
              <span>2022</span>
              <div>
                <h3>Government M. M. College, Jashore</h3>
                <p>
                  Higher Secondary Certificate · GPA 5.00 · Board Merit List ·
                  Scholarship Recipient
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <span>2020</span>
              <div>
                <h3>BAF Shaheen School, Jashore</h3>
                <p>Secondary School Certificate · Science Group · GPA 5.00</p>
              </div>
            </div>
          </div>
        </section>

        <section className="publication section">
          <div>
            <p className="eyebrow">PUBLICATION</p>
            <h2>Trade on Edge: 90 Days to Reshape Economy</h2>
            <p>Published writer in Dhaka Opinion Magazine.</p>
          </div>
          <a
            className="primary-btn"
            href="https://dhakaopinionmagazine.com/2025/04/13/trade-on-edge-90-days-to-reshape-economy/"
            target="_blank"
            rel="noreferrer"
          >
            Read article <ArrowUpRight size={18} />
          </a>
        </section>

        <section id="contact" className="contact section">
          <p className="eyebrow">05 — CONTACT</p>
          <h2>Let's build something useful.</h2>
          <p>
            I'm open to opportunities where I can combine web development,
            analytical thinking, and communication.
          </p>
          <div className="contact-links">
            <a href="mailto:prantome98@gmail.com">
              <Mail size={19} /> prantome98@gmail.com
            </a>
            <a href="tel:+8801784503769">
              <Phone size={19} /> +880 1784 503 769
            </a>
          </div>
          <div className="actions">
            <a
              className="primary-btn"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <ArrowUpRight size={18} />
            </a>
            <a className="secondary-btn" href="/cv.pdf" download>
              <Download size={18} /> Download CV
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Shakibur Rahman</span>
        <div>
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
