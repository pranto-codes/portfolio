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
  Palette,
  Wrench,
  Globe,
} from "lucide-react";
import "./styles.css";
import profilePic from "./../public/8d0aec01-5351-415f-bf90-b2c47956f254.png";

const linkedin = "https://www.linkedin.com/in/shakibur-rahman-620326336/";
const github = "https://github.com/pranto-codes";

const projects = [
  {
    title: "Dragon News",
    description:
      "A responsive news platform focused on clean layouts, category-based content, and a smooth reading experience. Building it helped me understand how to organize content and create an interface that feels natural to navigate.",
    image: "/Screenshot 2026-10-08 150640.png",
    tags: ["React", "JavaScript", "Responsive UI"],
    link: "https://dragonewspranto.netlify.app",
  },
  {
    title: "Pranto Mess Blog",
    description:
      "A blog-style web project designed to present content through a simple, readable, and user-friendly interface. It helped me practice component-based development and responsive layouts.",
    image: "/Screenshot 2026-10-16 092337.png",
    tags: ["React", "CSS", "Web Design"],
    link: "https://prantomess-blog.netlify.app/",
  },

  {
    title: "zapShift",
    description:
      "A full-stack parcel delivery platform that connects customers, riders, merchants, and administrators. Building zapShift helped me gain practical experience with authentication, role-based access, parcel tracking, Stripe payments, REST APIs, and database management.",
    image: "/Screenshot 2026-10-08 145527.png",
    tags: ["React", "Express.js", "MongoDB", "Firebase", "Stripe"],
    link: "https://zap-shift-client-qvhl.vercel.app/",
  },

  {
    title: "Frame Flow",
    description:
      "A modern gallery experience designed to present visual content in an organized and engaging way, with a focus on layout, usability, and responsive design.",
    image: "/Screenshot 2026-10-16 094344.png",
    tags: ["React", "JavaScript", "UI Design"],
    link: "https://frame-flow-premium-gallery-ix6y.vercel.app/",
  },
  {
    title: "CalcSpace",
    description:
      "A practical calculator application built to make calculations simple and accessible. This project gave me more practice with JavaScript logic and interactive user interfaces.",
    image: "/Screenshot 2026-10-16 094322.png",
    tags: ["JavaScript", "React", "Interactive UI"],
    link: "https://calcspace-calculator.vercel.app/",
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "I build responsive, accessible, and user-friendly interfaces with a focus on clean design and smooth interactions.",
    icon: Code2,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
      "React Router",
    ],
  },
  {
    title: "Backend & Data",
    description:
      "I am expanding my full-stack skills by learning how APIs, databases, authentication, and server-side logic work together.",
    icon: Globe,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "REST APIs",
      "JSON",
      "Stripe",
    ],
  },
  {
    title: "Tools & Workflow",
    description:
      "I use modern development tools to write code, manage projects, debug issues, and deploy web applications.",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Postman", "npm"],
  },
];

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <a className="logo" href="#home">
          SR<span>.</span>
        </a>

        <nav className="">
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
            <p className="eyebrow">
              FRONTEND DEVELOPMENT × ECONOMICS × CREATIVITY
            </p>

            <h1>
              Hi, I'm <span>Shakibur Rahman Pranto.</span>
            </h1>

            <h2>Frontend Developer & Economics Student.</h2>

            <p className="hero-text">
              I'm a motivated frontend developer passionate about building
              responsive, visually appealing, and user-friendly websites. I
              enjoy turning ideas into real digital experiences, learning new
              technologies, and solving problems through code. Alongside
              development, my Economics background helps me approach challenges
              with analytical thinking and curiosity.
            </p>

            <div className="actions">
              <a className="primary-btn" href="#projects">
                Explore My Projects <ArrowUpRight size={18} />
              </a>

              <a
                className="secondary-btn"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} /> Connect With Me
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
              <img src={profilePic} alt="Shakibur Rahman Pranto" />
            </div>

            <div className="hero-card-bottom">
              <span>Based in Bangladesh</span>
              <span>Open to opportunities</span>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">01 — ABOUT</p>
            <h2>A developer who loves learning by building.</h2>
          </div>

          <div className="about-grid">
            <p>
              I'm an Economics student at Islamic University, Kushtia, with a
              strong interest in frontend web development. I enjoy creating
              websites that look good, work smoothly, and provide a positive
              experience across different screen sizes.
            </p>

            <p>
              Through hands-on projects, I'm developing my skills in JavaScript,
              React, responsive design, and modern web technologies. I believe
              consistent practice, curiosity, and learning from mistakes are
              essential to becoming a better developer.
            </p>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading skills-heading">
            <p className="eyebrow">02 — SKILLS</p>
            <h2>Skills & Technologies</h2>
            <p className="skills-intro">
              Here are the technologies and tools I have been learning and
              working with to build responsive, user-friendly web applications.
            </p>
          </div>

          <div className="skill-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article className="skill-card" key={group.title}>
                  <div className="skill-card-heading">
                    <div className="skill-icon">
                      <Icon size={23} />
                    </div>
                    <h3>{group.title}</h3>
                  </div>

                  <p className="skill-description">{group.description}</p>

                  <div className="tech-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              );
            })}

            <article className="skill-card">
              <div className="skill-card-heading">
                <div className="skill-icon">
                  <Palette size={23} />
                </div>
                <h3>Other Strengths</h3>
              </div>

              <p className="skill-description">
                Beyond coding, I value clear communication, analytical thinking,
                and the ability to learn from challenges.
              </p>

              <div className="tech-list">
                {[
                  "Problem Solving",
                  "Analytical Thinking",
                  "Research",
                  "Writing",
                  "Teamwork",
                  "Continuous Learning",
                ].map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading row">
            <div>
              <p className="eyebrow">03 — PROJECTS</p>
              <h2>Things I've been building.</h2>
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
                <a
                  className="project-image"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} website preview`}
                    loading="lazy"
                  />
                </a>

                <div className="project-number">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="project-content">
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
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-heading">
            <p className="eyebrow">04 — EDUCATION</p>
            <h2>My academic journey.</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span>2022 — Present</span>
              <div>
                <h3>Islamic University, Kushtia</h3>
                <p>Bachelor of Economics · CGPA 3.45</p>
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
            Read Article <ArrowUpRight size={18} />
          </a>
        </section>

        <section id="contact" className="contact section">
          <p className="eyebrow">05 — CONTACT</p>
          <h2>Let's build something useful.</h2>

          <p>
            I'm always interested in learning, collaborating, and exploring
            opportunities to grow as a frontend developer.
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
