import React, { useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
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
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import "./styles.css";
import profilePic from "./../public/8d0aec01-5351-415f-bf90-b2c47956f254.png";

const linkedin = "https://www.linkedin.com/in/shakibur-rahman-620326336/";
const github = "https://github.com/pranto-codes";

const projects = [
  {
    title: "Pranto Mess Blog",
    description:
      "A responsive blog-style web application designed to deliver a clean and engaging content-reading experience. The project focuses on reusable React components, structured content layouts, responsive design, interactive UI elements, and intuitive navigation. It demonstrates practical experience in building modern web interfaces, organizing content, styling components, and creating a consistent user experience across different screen sizes.",
    image: "/Screenshot 2026-10-16 092337.png",
    tags: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Component-Based Architecture",
      "Reusable Components",
      "UI/UX Design",
      "Mobile-First Design",
      "Web Development",
      "Frontend Development",
      "Content Management",
      "Interactive UI",
      "Cross-Browser Compatibility",
      "Netlify Deployment",
    ],
    category: "React",
    link: "https://prantomess-blog.netlify.app/",
  },
  {
    title: "Dragon News",
    description:
      "A responsive news platform developed to provide an organized and user-friendly news-reading experience. The application features category-based news browsing, structured article presentation, dynamic content rendering, and smooth navigation. Built with React, the project demonstrates component-based development, client-side routing, API integration, reusable UI elements, responsive layouts, and efficient content organization. It reflects practical frontend development skills and the ability to build interactive web applications with a focus on usability and maintainability.",
    image: "/Screenshot 2026-10-08 150640.png",
    tags: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "React Router",
      "API Integration",
      "REST API",
      "Dynamic Rendering",
      "Component-Based Architecture",
      "Reusable Components",
      "Responsive Design",
      "Mobile-First Design",
      "News Aggregation",
      "Category-Based Filtering",
      "JSON Data Handling",
      "Asynchronous JavaScript",
      "UI/UX Design",
      "Client-Side Routing",
      "Frontend Development",
      "Netlify Deployment",
    ],
    category: "React",
    link: "https://dragonewspranto.netlify.app",
  },
  {
    title: "Tea House",
    description:
      "A modern tea shop landing page designed to showcase tea products through an elegant layout, attractive visuals, and a welcoming user experience. The project focuses on responsive layouts, utility-first styling, structured content sections, reusable design patterns, and clear visual hierarchy to create an engaging shopping-inspired interface across different screen sizes.",
    image: "/Screenshot 2026-10-17 093246.png",
    tags: [
      "HTML5",
      "Tailwind CSS",
      "CSS3",
      "Responsive Design",
      "UI/UX Design",
      "Landing Page Design",
      "Flexbox",
      "CSS Grid",
      "Mobile-First Design",
      "Utility-First CSS",
      "Visual Hierarchy",
      "Product Showcase",
      "Web Design",
      "Frontend Development",
      "Vercel Deployment",
    ],
    category: "UI Design",
    link: "https://teahouse-six.vercel.app/",
  },
  {
    title: "Auction Gallery",
    description:
      "An interactive auction gallery application developed to present auction items through a clean, organized, and engaging interface. The project emphasizes component-based architecture, dynamic content rendering, interactive user interfaces, reusable components, and responsive layouts. It demonstrates practical React development skills while focusing on usability, content presentation, and a smooth browsing experience.",
    image: "/auction.png",
    tags: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Component-Based Architecture",
      "Reusable Components",
      "Interactive UI",
      "State Management",
      "Event Handling",
      "Dynamic Rendering",
      "Array Methods",
      "Conditional Rendering",
      "Responsive Design",
      "UI/UX Design",
      "Frontend Development",
      "Auction Platform",
      "Vercel Deployment",
    ],
    category: "React",
    link: "https://auction-gallery-7ee5.vercel.app/",
  },
  {
    title: "zapShift",
    description:
      "A full-stack parcel delivery management platform designed to connect customers, riders, merchants, and administrators through a unified delivery workflow. The application includes user authentication, parcel booking, delivery tracking, rider applications, administrative management, payment processing with Stripe, and payment history. Built with React, Express.js, and MongoDB, the project demonstrates REST API development, database operations, role-based workflows, protected routes, asynchronous data handling, and integration between frontend and backend services.",
    image: "/Screenshot 2026-10-08 145527.png",
    tags: [
      "React",
      "JavaScript",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MongoDB Atlas",
      "REST API",
      "Firebase Authentication",
      "Stripe Payments",
      "Axios",
      "TanStack Query",
      "JWT / Token Verification",
      "Role-Based Access",
      "Protected Routes",
      "CRUD Operations",
      "Async JavaScript",
      "Payment History",
      "Parcel Tracking",
      "Dashboard Development",
      "Responsive Design",
      "Vercel Deployment",
    ],
    category: "Full Stack",
    link: "https://zap-shift-client-qvhl.vercel.app/",
  },
  {
    title: "Frame Flow",
    description:
      "A modern visual gallery application created to present images and creative content through a polished, organized, and responsive interface. The project focuses on visual storytelling, clean layouts, intuitive navigation, consistent spacing, and engaging UI design. It demonstrates frontend development techniques for creating visually appealing gallery experiences that remain accessible and easy to explore across devices.",
    image: "/Screenshot 2026-10-16 094344.png",
    tags: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX Design",
      "Gallery Layout",
      "Visual Storytelling",
      "Component-Based Architecture",
      "Reusable Components",
      "Interactive UI",
      "Image Presentation",
      "Modern Web Design",
      "Mobile-First Design",
      "Frontend Development",
      "Vercel Deployment",
    ],
    category: "UI Design",
    link: "https://frame-flow-premium-gallery-ix6y.vercel.app/",
  },
  {
    title: "CalcSpace",
    description:
      "An interactive calculator application designed to make everyday calculations simple, intuitive, and accessible. The project focuses on building a responsive interface, handling user input, managing calculation state, and implementing interactive functionality. It demonstrates practical JavaScript and React concepts, including event handling, conditional rendering, reusable components, and state-driven UI updates.",
    image: "/Screenshot 2026-10-16 094322.png",
    tags: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Interactive UI",
      "Calculator Logic",
      "State Management",
      "Event Handling",
      "Conditional Rendering",
      "Input Handling",
      "Component-Based Architecture",
      "Reusable Components",
      "DOM Concepts",
      "Functional Programming",
      "UI/UX Design",
      "Frontend Development",
      "Vercel Deployment",
    ],
    category: "React",
    link: "https://calcspace-calculator.vercel.app/",
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "Building responsive interfaces with reusable components, smooth navigation, and thoughtful user experiences.",
    icon: Code2,
    skills: [
      "React Hooks",
      "React Context API",
      "React Router",
      "React Hook Form",
      "Axios",
      "DaisyUI",
      "HeroUI",
      "Gravity UI",
      "SweetAlert2",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    title: "Backend & Data",
    description:
      "Learning how APIs, databases, authentication, and server-side technologies work together.",
    icon: Globe,
    skills: [
      "Node.js",
      "Express.js",
      "Next.js",
      "MongoDB",
      "Firebase",
      "Better Auth",
      "REST APIs",
      "JSON",
      "Stripe",
    ],
  },
  {
    title: "Tools & Workflow",
    description:
      "Using modern development tools to write, debug, manage, and deploy applications.",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Netlify",
      "Postman",
      "npm",
      "Tailwind CSS",
      "HeroUI",
      "Gravity UI",
      "Firebase Console",
      "MongoDB Atlas",
    ],
  },
];

const education = [
  {
    year: "September 2023 — August 2027 (expected)",
    title: "Islamic University, Kushtia",
    description: "Bachelor of Economics · CGPA 3.45",
  },
  {
    year: "2022",
    title: "Government M. M. College, Jashore",
    description:
      "Higher Secondary Certificate · GPA 5.00 · Board Merit List · Scholarship Recipient",
  },
  {
    year: "2020",
    title: "BAF Shaheen School, Jashore",
    description: "Secondary School Certificate · Science Group · GPA 5.00",
  },
];

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11 },
  },
};

// Reusable scroll reveal component
function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      variants={reveal}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// Animated heading with a small accent
function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">
        <span className="section-number">{number}</span>
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {description && <p className="section-intro">{description}</p>}
    </Reveal>
  );
}

// Scroll-linked progress bar
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

// Interactive card with spring-based 3D tilt
function SpotlightCard({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 180,
    damping: 18,
  });

  const springY = useSpring(rotateY, {
    stiffness: 180,
    damping: 18,
  });

  function handleMove(event) {
    if (reduceMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    rotateX((0.5 - y) * 7);
    rotateY((x - 0.5) * 7);
  }

  function resetTilt() {
    rotateX(0);
    rotateY(0);
  }

  return (
    <motion.div
      className={`spotlight-card ${className}`}
      style={
        reduceMotion
          ? {}
          : {
              rotateX: springX,
              rotateY: springY,
              transformPerspective: 1000,
            }
      }
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

// Hero text reveals one line after another
function HeroText({ children, delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion ? false : { opacity: 0, y: 24, filter: "blur(5px)" }
      }
      animate={reduceMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

// Reusable animated technology ticker
function TechTicker() {
  const items = [
    "React",
    "JavaScript",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Firebase",
  ];

  const reduceMotion = useReducedMotion();

  return (
    <div className="ticker" aria-label="Technologies I work with">
      <motion.div
        className="ticker-track"
        animate={reduceMotion ? {} : { x: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <span className="ticker-item" key={`${item}-${index}`}>
            <Sparkles size={14} />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// Projects with animated filtering and image interaction
function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const reduceMotion = useReducedMotion();

  const filters = ["All", "React", "Full Stack", "UI Design"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="projects-top">
        <SectionHeading
          number="03"
          eyebrow="SELECTED WORK"
          title="Things I've been building."
          description="A collection of projects where I've been learning, experimenting, and turning ideas into working experiences."
        />

        <motion.a
          className="text-link"
          href={github}
          target="_blank"
          rel="noreferrer"
          whileHover={reduceMotion ? undefined : { x: 4 }}
        >
          All repositories <ArrowUpRight size={17} />
        </motion.a>
      </div>

      <div
        className="project-filters"
        role="group"
        aria-label="Filter projects"
      >
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            className={`filter-btn ${filter === item ? "active" : ""}`}
            onClick={() => setFilter(item)}
          >
            {item}
            {filter === item && (
              <motion.span
                className="filter-indicator"
                layoutId="filter-indicator"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <motion.div layout className="project-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.article
              layout
              key={project.title}
              className="project-card"
              initial={
                reduceMotion ? false : { opacity: 0, y: 25, scale: 0.97 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.95, y: 12 }
              }
              transition={{
                duration: 0.4,
                delay: reduceMotion ? 0 : index * 0.04,
                ease,
                layout: { type: "spring", stiffness: 280, damping: 28 },
              }}
            >
              <SpotlightCard className="project-spotlight">
                <a
                  className="project-image"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.title}`}
                >
                  <motion.img
                    src={project.image}
                    alt={`${project.title} website preview`}
                    loading="lazy"
                    whileHover={reduceMotion ? undefined : { scale: 1.07 }}
                    transition={{ duration: 0.55, ease }}
                  />
                  <span className="image-open">
                    <ArrowUpRight size={19} />
                  </span>
                </a>

                <div className="project-content">
                  <div className="project-meta">
                    <span className="project-number">
                      {String(projects.indexOf(project) + 1).padStart(2, "0")}
                    </span>
                    <span className="project-category">{project.category}</span>
                  </div>

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
                    Explore project <MoveUpRight size={16} />
                  </a>
                </div>
              </SpotlightCard>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function App() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const portraitY = useTransform(heroProgress, [0, 1], [0, 90]);
  const portraitScale = useTransform(heroProgress, [0, 1], [1, 1.12]);
  const heroOpacity = useTransform(heroProgress, [0, 0.85], [1, 0.35]);

  return (
    <div className="site">
      <ScrollProgress />

      <header className="navbar">
        <a className="logo" href="#home" aria-label="Back to home">
          SR<span>.</span>
        </a>

        <nav>
          {["About", "Skills", "Projects", "Education", "Contact"].map(
            (item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={reduceMotion ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07, duration: 0.4 }}
                whileHover={reduceMotion ? undefined : { y: -2 }}
              >
                {item}
              </motion.a>
            ),
          )}
        </nav>

        <motion.a
          className="nav-btn"
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          whileHover={reduceMotion ? undefined : { y: -3 }}
          whileTap={reduceMotion ? undefined : { scale: 0.97 }}
        >
          Let's connect <ArrowUpRight size={16} />
        </motion.a>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero section" ref={heroRef}>
          <motion.div className="hero-copy" style={{ opacity: heroOpacity }}>
            <HeroText delay={0.1}>
              <p className="eyebrow">
                <span className="availability-dot" />
                FRONTEND DEVELOPMENT · ECONOMICS · CREATIVITY
              </p>
            </HeroText>

            <HeroText delay={0.2}>
              <h1>
                Turning ideas into <span>digital experiences.</span>
              </h1>
            </HeroText>

            <HeroText delay={0.32}>
              <h2>I'm Shakibur Rahman Pranto.</h2>
            </HeroText>

            <HeroText delay={0.43}>
              <p className="hero-text">
                A frontend developer and Economics student who enjoys building
                responsive, thoughtful, and user-friendly websites. I combine
                analytical thinking with creative problem-solving to turn ideas
                into useful digital experiences.
              </p>
            </HeroText>

            <HeroText delay={0.54}>
              <div className="actions">
                <motion.a
                  className="primary-btn"
                  href="#projects"
                  whileHover={reduceMotion ? undefined : { y: -4, scale: 1.02 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                >
                  Explore my work <ArrowUpRight size={18} />
                </motion.a>

                <motion.a
                  className="secondary-btn"
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                >
                  <Linkedin size={18} /> Let's connect
                </motion.a>
              </div>
            </HeroText>

            <HeroText delay={0.65}>
              <div className="socials">
                <a href={github} target="_blank" rel="noreferrer">
                  <Github size={18} /> GitHub
                </a>
                <a href="mailto:prantome98@gmail.com">
                  <Mail size={18} /> Email
                </a>
              </div>
            </HeroText>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={
              reduceMotion ? false : { opacity: 0, scale: 0.88, rotate: 3 }
            }
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease }}
          >
            <motion.div
              className="orbit orbit-one"
              animate={reduceMotion ? {} : { rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="orbit orbit-two"
              animate={reduceMotion ? {} : { rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="portrait-frame"
              style={reduceMotion ? {} : { y: portraitY, scale: portraitScale }}
            >
              <img src={profilePic} alt="Shakibur Rahman Pranto" />
              <div className="portrait-shade" />
            </motion.div>

            <motion.div
              className="floating-label label-top"
              animate={reduceMotion ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="label-icon">
                <Code2 size={17} />
              </span>
              <span>Building for the web</span>
            </motion.div>

            <motion.div
              className="floating-label label-bottom"
              animate={reduceMotion ? {} : { y: [0, 7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="availability-dot" />
              Open to opportunities
            </motion.div>

            <div className="hero-caption">
              <span>BASED IN BANGLADESH</span>
              <span>01 / 05</span>
            </div>
          </motion.div>

          <motion.a
            className="scroll-cue"
            href="#about"
            animate={reduceMotion ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <span /> Scroll to explore
          </motion.a>
        </section>

        <TechTicker />

        {/* ABOUT */}
        <section id="about" className="section about-section">
          <SectionHeading
            number="01"
            eyebrow="A LITTLE ABOUT ME"
            title="Curious by nature. A builder by practice."
            description="I enjoy understanding how things work, then using that knowledge to create something useful."
          />

          <div className="about-grid">
            <Reveal>
              <div className="about-index">01 / THINK</div>
              <h3>Analytical thinking, creative execution.</h3>
              <p>
                I'm an Economics student at Islamic University, Kushtia, with a
                strong interest in frontend web development. My academic
                background encourages me to think critically, understand
                problems, and approach challenges from different perspectives.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="about-index">02 / BUILD</div>
              <h3>Learning through real projects.</h3>
              <p>
                Through hands-on projects, I'm developing my skills in React,
                JavaScript, responsive design, APIs, and full-stack
                technologies. I believe consistency, curiosity, and learning
                from mistakes are essential to becoming a better developer.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills-section">
          <SectionHeading
            number="02"
            eyebrow="MY TOOLKIT"
            title="Skills that keep growing."
            description="Technologies and tools I've been exploring through practice and project development."
          />

          <motion.div
            className="skill-grid"
            variants={stagger}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.1 }}
          >
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.article
                  key={group.title}
                  className="skill-card"
                  variants={reveal}
                  whileHover={reduceMotion ? undefined : { y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="skill-card-heading">
                    <motion.div
                      className="skill-icon"
                      whileHover={
                        reduceMotion ? undefined : { rotate: -8, scale: 1.08 }
                      }
                    >
                      <Icon size={22} />
                    </motion.div>
                    <span className="skill-index">0{index + 1}</span>
                  </div>

                  <h3>{group.title}</h3>
                  <p className="skill-description">{group.description}</p>

                  <div className="tech-list">
                    {group.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={reduceMotion ? false : { opacity: 0, y: 7 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.025, duration: 0.3 }}
                        whileHover={reduceMotion ? undefined : { y: -3 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.article>
              );
            })}

            <motion.article
              className="skill-card strengths-card"
              variants={reveal}
              whileHover={reduceMotion ? undefined : { y: -8 }}
            >
              <div className="skill-card-heading">
                <div className="skill-icon">
                  <Palette size={22} />
                </div>
                <span className="skill-index">04</span>
              </div>
              <h3>Other Strengths</h3>
              <p className="skill-description">
                Beyond coding, I value communication, analytical thinking, and
                continuous learning.
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
            </motion.article>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <ProjectsSection />

        {/* EDUCATION */}
        <section id="education" className="section education-section">
          <SectionHeading
            number="04"
            eyebrow="MY JOURNEY"
            title="Learning is a long game."
            description="The academic milestones that have shaped my journey so far."
          />

          <div className="timeline">
            <motion.div
              className="timeline-line"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease }}
            />

            {education.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.12}>
                <motion.article
                  className="timeline-item"
                  whileHover={reduceMotion ? undefined : { x: 6 }}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PUBLICATION */}
        <Reveal>
          <section className="publication section">
            <div className="publication-mark">
              <Sparkles size={23} />
            </div>
            <div className="publication-copy">
              <p className="eyebrow">BEYOND DEVELOPMENT</p>
              <h2>Trade on Edge: 90 Days to Reshape Economy</h2>
              <p>Published writer in Dhaka Opinion Magazine.</p>
            </div>
            <motion.a
              className="primary-btn"
              href="https://dhakaopinionmagazine.com/2025/04/13/trade-on-edge-90-days-to-reshape-economy/"
              target="_blank"
              rel="noreferrer"
              whileHover={reduceMotion ? undefined : { y: -4 }}
            >
              Read article <ArrowUpRight size={18} />
            </motion.a>
          </section>
        </Reveal>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <Reveal>
            <p className="eyebrow">05 — LET'S CONNECT</p>
            <h2>
              Have an idea?
              <br />
              <span>Let's make it real.</span>
            </h2>
            <p className="contact-description">
              I'm interested in learning, collaborating, and exploring
              opportunities to grow as a frontend developer.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="contact-links">
              <a href="mailto:prantome98@gmail.com">
                <Mail size={19} />
                <span>prantome98@gmail.com</span>
                <ArrowUpRight size={17} />
              </a>
              <a href="tel:+8801784503769">
                <Phone size={19} />
                <span>+880 1784 503 769</span>
                <ArrowUpRight size={17} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="actions">
              <motion.a
                className="primary-btn"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                whileHover={reduceMotion ? undefined : { y: -4 }}
              >
                Connect on LinkedIn <ArrowUpRight size={18} />
              </motion.a>
              <motion.a
                className="secondary-btn"
                href="/cv.pdf"
                download
                whileHover={reduceMotion ? undefined : { y: -4 }}
              >
                <Download size={18} /> Download CV
              </motion.a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          SR<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Shakibur Rahman Pranto</span>
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
