import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useReducedMotion,
} from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowUpRight,
  Download,
  Code2,
  Palette,
  Wrench,
  Globe,
  MoveUpRight,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import "./styles.css";

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
    category: "React Apps",
    link: "https://prantomess-blog.netlify.app/",
  },
  {
    title: "Law.BD – Lawyer Appointment Booking Platform",
    description:
      "A modern and responsive lawyer appointment booking website designed to make legal services more accessible and convenient. Features a professional homepage, lawyer profile cards, detailed attorney information, appointment booking functionality, booking management with cancellation options, and dedicated About, Blogs, and Contact pages. Designed with a clean legal-inspired interface, elegant typography, professional color combinations, interactive elements, and responsive layouts. Built with React, Tailwind CSS, and React Router, the project demonstrates component-based architecture, dynamic data rendering, client-side routing, localStorage-based booking management, reusable components, and responsive UI development.",
    image: "/lawbd.png",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "React Router",
      "React Hooks",
      "Local Storage",
      "Dynamic Routing",
      "Appointment Booking",
      "Responsive Design",
      "Reusable Components",
      "Frontend Development",
    ],
    category: "React Applications",
    link: "https://lawyers-lyart.vercel.app/",
  },
  {
    title: "Gamer – Online Gaming Platform",
    description:
      "A modern and responsive gaming website designed to deliver an immersive digital gaming experience. Features an engaging hero section, gaming video gallery, game categories, instant-play promotions, company information, and career opportunities. Designed with bold typography, a dark gaming-inspired interface, vibrant neon accents, interactive hover effects, and responsive layouts. Built with HTML5 and CSS3, the project demonstrates semantic markup, modern CSS layouts, responsive web design, and interactive UI development.",
    image: "/gamer.png",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Flexbox",
      "CSS Grid",
      "Font Awesome",
      "Landing Page",
    ],
    category: "UI / Landing Pages",
    link: "https://game-file-opal.vercel.app/",
  },
  {
    title: "Memorable Water Bottle",
    description:
      "A modern and responsive water bottle shopping website designed to deliver a smooth and engaging e-commerce experience. Features a dynamic product collection, product search and sorting, interactive shopping cart, quantity management, stock validation, and persistent cart data using localStorage. Built with React, the project demonstrates component-based architecture, React Hooks, state management, reusable components, and responsive UI design.",
    image: "/memorable-water-bottle.png",
    tags: [
      "React",
      "JavaScript",
      "CSS3",
      "Responsive Design",
      "React Hooks",
      "Local Storage",
      "E-commerce",
    ],
    category: "React Apps",
    link: "https://memorable-water-b-ottle.vercel.app/",
  },
  {
    title: "Flower Shop – Online Flower Store",
    description:
      "A modern and responsive flower shop website designed to create an elegant and engaging online shopping experience. Features a visually appealing hero section, beautiful flower collections, promotional offers, product highlights, and an inviting shopping interface. Designed with elegant typography, a soft floral-inspired color palette, interactive elements, and responsive layouts. Built with HTML5 and CSS3, the project demonstrates semantic markup, modern CSS styling, responsive web design, and user-focused interface development.",
    image: "/flower-shop.png",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Flexbox",
      "CSS Grid",
      "Google Fonts",
      "Landing Page",
    ],
    category: "UI / Landing Pages",
    link: "https://flowershop-five-lac.vercel.app/",
  },
  {
    title: "Money Master",
    description:
      "A responsive personal finance management application designed to help users organize their income, track monthly expenses, calculate available balances, and plan savings more effectively. The application features income and expense tracking across multiple categories, automated financial calculations, percentage-based savings planning, expense breakdowns, interactive progress indicators, input validation, and real-time financial summaries. It provides a clean, user-friendly dashboard with responsive layouts and intuitive interactions, making everyday money management simple and accessible. The project demonstrates practical experience in JavaScript logic, DOM manipulation, event handling, form validation, financial calculations, reusable functions, and responsive frontend development.",
    image: "/money-master.png",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "DOM Manipulation",
      "Event Handling",
      "Form Validation",
      "Financial Calculations",
      "Income Tracking",
      "Expense Management",
      "Savings Calculator",
      "Dynamic Content Rendering",
      "Number Formatting",
      "Interactive Dashboard",
      "Responsive Design",
      "User Interface Design",
      "Frontend Development",
      "Web Development",
      "Vercel Deployment",
    ],
    category: "JavaScript Apps",
    link: "https://money-disaster.vercel.app/",
  },

  {
    title: "PheroTube",
    description:
      "A responsive video discovery and search platform designed to provide an engaging video-browsing experience. The application integrates the YouTube Data API v3 to allow users to search for videos across different topics, explore categories, view video details, and watch content through an embedded video player. It features dynamic content rendering, interactive search functionality, video cards, category-based browsing, and responsive layouts. The project demonstrates practical experience in API integration, asynchronous JavaScript, DOM manipulation, event handling, and building interactive frontend applications.",
    image: "/pherotube.png",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "YouTube Data API v3",
      "REST API Integration",
      "Asynchronous JavaScript",
      "Fetch API",
      "Dynamic Content Rendering",
      "DOM Manipulation",
      "Event Handling",
      "Video Search",
      "Embedded Video Player",
      "Responsive Design",
      "Interactive UI",
      "Frontend Development",
      "Web Development",
      "Vercel Deployment",
    ],
    category: "JavaScript Apps",
    link: "https://pheortube.vercel.app/",
  },
  {
    title: "HireLoop",
    description:
      "A modern job-seeking platform designed to connect job seekers with recruiters through an intuitive and user-friendly experience. The application features role-based dashboards, job posting and management, company profile management, recruiter authentication, and organized job discovery. Built with Next.js and MongoDB, the project demonstrates full-stack development, server-side rendering, authentication, REST API integration, database management, reusable components, and responsive UI design. It reflects practical skills in building scalable web applications with a focus on usability, maintainability, and efficient recruitment workflows.",
    image: "/hireloop.png",
    tags: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "Better Auth",
      "Authentication",
      "Role-Based Access Control",
      "REST API",
      "Server Components",
      "Server Actions",
      "Dynamic Rendering",
      "Database Integration",
      "CRUD Operations",
      "Job Management",
      "Company Management",
      "Responsive Design",
      "Reusable Components",
      "Full-Stack Development",
      "Vercel Deployment",
    ],
    category: "Full Stack",
    link: "https://hireloop-client-l3by.vercel.app/",
  },
  {
    title: "Fruit Burst – Fresh Fruit Store",
    description:
      "A modern and responsive fruit shopping website designed to deliver a vibrant and engaging online shopping experience. Features an eye-catching editorial-style hero section, fresh fruit collections, promotional offers, product highlights, and a newsletter subscription section. Designed with bold typography, a vibrant color palette, creative layouts, and responsive elements. Built with HTML5 and CSS3, the project demonstrates semantic markup, modern CSS styling, responsive web design, and user-focused interface development.",
    image: "/fruit-burst.png",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Flexbox",
      "CSS Grid",
      "Google Fonts",
      "Landing Page",
    ],
    category: "UI / Landing Pages",
    link: "https://fruit-burst-nu.vercel.app/",
  },
  {
    title: "G3 Architect",
    description:
      "A modern and fully responsive architecture website designed to showcase architectural services, team expertise, and project achievements through a clean and professional interface. The application features an engaging hero section, team introduction, service highlights, key business statistics, and sponsor showcase. Built with React and Vite, the project demonstrates component-based development, reusable UI components, responsive layouts, modern CSS styling, and effective content organization. It reflects practical frontend development skills with an emphasis on visual consistency, accessibility, intuitive navigation, and seamless user experience across desktop, tablet, and mobile devices.",
    image: "/architecture.png",
    tags: [
      "React",
      "Vite",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Mobile-First Design",
      "Component-Based Architecture",
      "Reusable Components",
      "Modern UI Design",
      "UI/UX Design",
      "Interactive Navigation",
      "Frontend Development",
      "Lucide React",
      "Vercel Deployment",
    ],
    category: "UI / Landing Pages",
    link: "https://architecture-file.vercel.app/",
  },
  {
    title: "Subscription & Pricing Website",
    description:
      "A modern and fully responsive subscription pricing website designed to present different membership plans through a clean, intuitive, and user-friendly interface. The application features pricing cards, plan comparisons, subscription options, and a polished layout that helps users easily explore and evaluate available plans. Built with React, Vite, and Tailwind CSS, the project demonstrates component-based development, reusable UI elements, responsive layouts, modern styling techniques, and effective content organization. It reflects practical frontend development skills with an emphasis on visual hierarchy, clear pricing presentation, accessibility, and seamless user experience across desktop, tablet, and mobile devices.",
    image: "/pricing.png",
    tags: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Mobile-First Design",
      "Component-Based Architecture",
      "Reusable Components",
      "Pricing Cards",
      "Plan Comparison",
      "Modern UI Design",
      "UI/UX Design",
      "Frontend Development",
      "Vercel Deployment",
    ],
    category: "UI / Landing Pages",
    link: "https://tailwind-react-pricing-options-pi.vercel.app/",
  },
  {
    title: "Book Poka",
    description:
      "A responsive online book discovery platform designed to provide readers with an engaging and user-friendly browsing experience. The application focuses on showcasing books through an organized interface, allowing users to explore book collections, discover interesting titles, and navigate through content effortlessly. Built with React, the project demonstrates component-based development, dynamic content rendering, reusable UI elements, responsive layouts, and modern frontend design practices. It reflects practical frontend development skills with an emphasis on clean presentation, intuitive navigation, and an enjoyable book discovery experience.",
    image: "/bookpoka.png",
    tags: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "Mobile-First Design",
      "Component-Based Architecture",
      "Reusable Components",
      "Dynamic Rendering",
      "Book Discovery",
      "Content Organization",
      "UI/UX Design",
      "Interactive User Interface",
      "Frontend Development",
      "Vercel Deployment",
    ],
    category: "React Apps",
    link: "https://book-poka.vercel.app/",
  },
  {
    title: "Pet Shop",
    description:
      "A responsive pet adoption platform designed to help users explore and discover adorable pets through an engaging and user-friendly interface. The website features category-based pet browsing, interactive pet cards, search functionality, price sorting, pet details modals, and adoption interactions. Built with HTML, CSS, and JavaScript, the project demonstrates DOM manipulation, dynamic content rendering, event handling, responsive layouts, and reusable UI patterns. It reflects practical frontend development skills with a focus on accessibility, usability, and modern web design.",
    image: "/petshop.png",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "DOM Manipulation",
      "Dynamic Rendering",
      "Event Handling",
      "Category-Based Filtering",
      "Search Functionality",
      "Price Sorting",
      "Modal Implementation",
      "Responsive Design",
      "Mobile-First Design",
      "Interactive UI",
      "Reusable Components",
      "UI/UX Design",
      "Frontend Development",
      "Vercel Deployment",
    ],
    category: "JavaScript Apps",
    link: "https://petshop-ten-rho.vercel.app/",
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
    category: "React Apps",
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
    category: "UI / Landing Pages",
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
    category: "React Apps",
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
    category: "UI / Landing Pages",
    link: "https://frame-flow-premium-gallery-ix6y.vercel.app/",
  },

  {
    title: "Donate Bangladesh",
    description:
      "A responsive donation management platform built to support humanitarian relief campaigns across Bangladesh. The application allows users to contribute to different campaigns, track donation progress, monitor their available balance, and view donation history. It features interactive donation forms, input validation, dynamic balance updates, campaign progress tracking, and a user-friendly interface. The project demonstrates practical JavaScript concepts, including DOM manipulation, event handling, conditional rendering, reusable utility functions, and dynamic UI updates.",
    image: "/donate-bangladesh.png",
    tags: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "DaisyUI",
      "Responsive Design",
      "Donation Management",
      "DOM Manipulation",
      "Event Handling",
      "Input Validation",
      "Dynamic UI Updates",
      "State Management",
      "Array Methods",
      "Conditional Rendering",
      "Reusable Functions",
      "Interactive UI",
      "UI/UX Design",
      "Frontend Development",
      "Vercel Deployment",
    ],
    category: "JavaScript Apps",
    link: "https://donate-bd-six.vercel.app/",
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
    category: "React Apps",
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
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      variants={reveal}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

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

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

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
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
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

function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const reduceMotion = useReducedMotion();
  const filters = [
    "All",
    "Full Stack",
    "React Apps",
    "JavaScript Apps",
    "UI / Landing Pages",
  ];

  const categoryCounts = projects.reduce((counts, project) => {
    counts[project.category] = (counts[project.category] || 0) + 1;
    return counts;
  }, {});

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const visibleCount = filteredProjects.length;

  return (
    <section id="projects" className="section projects-section">
      <div className="projects-top">
        <SectionHeading
          number="03"
          eyebrow="SELECTED WORK"
          title="Things I've been building."
          description="A collection of projects where I've been learning, experimenting, and turning ideas into working experiences."
        />
        <a className="text-link" href={github} target="_blank" rel="noreferrer">
          All repositories <ArrowUpRight size={17} />
        </a>
      </div>

      <div className="project-total" aria-live="polite">
        <strong key={filter}>{String(visibleCount).padStart(2, "0")}</strong>
        <span>
          <b>{filter === "All" ? "Projects showcased" : filter}</b>
          <small>
            Showing {visibleCount} of {projects.length} projects
          </small>
        </span>
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
            aria-pressed={filter === item}
          >
            <span>{item}</span>
            <small>
              {item === "All" ? projects.length : categoryCounts[item] || 0}
            </small>
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
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.35, delay: index * 0.025, ease }}
            >
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
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function App() {
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["About", "Skills", "Projects", "Education", "Contact"];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <ScrollProgress />

      <header className="navbar">
        <a
          className="logo"
          href="#home"
          onClick={closeMenu}
          aria-label="Back to home"
        >
          SR<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
        >
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </nav>

        <a className="nav-btn" href={linkedin} target="_blank" rel="noreferrer">
          Let's connect <ArrowUpRight size={16} />
        </a>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <motion.p
              className="eyebrow"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="availability-dot" />
              FRONTEND DEVELOPMENT · ECONOMICS · CREATIVITY
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease }}
            >
              Turning ideas into <span>digital experiences.</span>
            </motion.h1>

            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              I'm Shakibur Rahman Pranto.
            </motion.h2>

            <motion.p
              className="hero-text"
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A frontend developer and Economics student who enjoys building
              responsive, thoughtful, and user-friendly websites. I combine
              analytical thinking with creative problem-solving to turn ideas
              into useful digital experiences.
            </motion.p>

            <div className="actions">
              <a className="primary-btn" href="#projects">
                Explore my work <ArrowUpRight size={18} />
              </a>
              <a
                className="secondary-btn"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} /> Let's connect
              </a>
            </div>

            <div className="socials">
              <a href={github} target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
              <a href="mailto:prantome98@gmail.com">
                <Mail size={18} /> Email
              </a>
            </div>
          </div>

          <motion.div
            className="hero-visual"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            <div className="portrait-shape portrait-shape-back" />
            <div className="portrait-shape portrait-shape-front" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="portrait-frame">
              <img
                src="/8d0aec01-5351-415f-bf90-b2c47956f254.png"
                alt="Shakibur Rahman Pranto"
              />
              <span className="portrait-shade" />
            </div>

            <div className="floating-label label-top">
              <Code2 size={17} /> Frontend developer
            </div>
            <div className="floating-label label-bottom">
              <span className="availability-dot" />
              Open to opportunities
            </div>
            <div className="portrait-stamp">
              DESIGN
              <br />· BUILD
              <br />· LEARN
            </div>
            <div className="hero-caption">
              <span>BASED IN BANGLADESH</span>
              <span>01 / 05</span>
            </div>
          </motion.div>

          <a className="scroll-cue" href="#about">
            <span /> Scroll to explore
          </a>
        </section>

        <TechTicker />

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
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                >
                  <div className="skill-card-heading">
                    <div className="skill-icon">
                      <Icon size={22} />
                    </div>
                    <span className="skill-index">0{index + 1}</span>
                  </div>
                  <h3>{group.title}</h3>
                  <p className="skill-description">{group.description}</p>
                  <div className="tech-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </motion.article>
              );
            })}

            <motion.article
              className="skill-card strengths-card"
              variants={reveal}
              whileHover={reduceMotion ? undefined : { y: -5 }}
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

        <ProjectsSection />

        <section id="education" className="section education-section">
          <SectionHeading
            number="04"
            eyebrow="MY JOURNEY"
            title="Learning is a long game."
            description="The academic milestones that have shaped my journey so far."
          />
          <div className="timeline">
            {education.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <article className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

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
            <a
              className="primary-btn"
              href="https://dhakaopinionmagazine.com/2025/04/13/trade-on-edge-90-days-to-reshape-economy/"
              target="_blank"
              rel="noreferrer"
            >
              Read article <ArrowUpRight size={18} />
            </a>
          </section>
        </Reveal>

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
            <div className="actions contact-actions">
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
