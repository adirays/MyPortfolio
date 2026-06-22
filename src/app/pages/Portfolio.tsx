import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Copy,
  CheckCheck,
} from "lucide-react";
import Navigation from "../components/Navigation";
import PageTransition from "../components/PageTransition";
import CustomCursor from "../components/CustomCursor";
import { useTheme } from "../components/ThemeContext";
// import BackToTop from "../components/BackToTop";
import { ChatWidget } from "../components/ChatWidget";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import SkillBadge from "../components/SkillBadge";
import heroBg from "../../imports/image-4.png";

const palette = {
  light: {
    bg: "#f0eeea",
    surface: "#ffffff",
    text: "#1a1a1c",
    muted: "rgba(26,26,28,0.6)",
    warm: "#c8622a",
    cool: "#2a6b5e",
    dark: "#0e0e10",
    border: "rgba(26,26,28,0.18)",
  },
  dark: {
    bg: "#0e0e10",
    surface: "#141414",
    text: "#f8f9fa",
    muted: "rgba(248,249,250,0.4)",
    warm: "#c8622a",
    cool: "#3a9b8e",
    dark: "#000000",
    border: "rgba(248,249,250,0.08)",
  },
};

const display: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 400,
};

const body: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontWeight: 300,
};

const label: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontWeight: 300,
  fontSize: "10px",
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
};

const sectionPad = "py-[160px] px-8 md:px-[80px]";

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.3,
      duration: 0.6,
      ease: [0.25, 0, 0, 1],
    },
  }),
};

export default function Portfolio() {
  const { theme } = useTheme();
  const T = palette[theme];
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.15],
    [1, 0],
  );
  const heroBgY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "20%"],
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("your.email@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projects = [
    {
      title: "AI-Powered Nutritionist",
      subtitle: "Microservice-based Dietary Application",
      description:
        "Architected an application leveraging Google Cloud Vision API to estimate calorie intake with ~85% accuracy. Developed a RAG pipeline using Ollama for personalized dietary recommendations, significantly reducing hallucination rates.",
      tags: [
        "Flutter",
        "FastAPI",
        "Docker",
        "Ollama",
        "Google Cloud Vision",
        "AWS",
      ],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    },
    {
      title: "Algorithmic Stock Trading Dashboard",
      subtitle: "Real-time Financial Analytics",
      description:
        "Built a real-time dashboard using Streamlit to monitor portfolio volatility and sector exposure. Implemented anomaly detection using scikit-learn to identify irregular price movements and engineered robust data validation pipelines.",
      tags: [
        "Python",
        "Streamlit",
        "scikit-learn",
        "SQLite",
        "Pydantic",
      ],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    },
    {
      title: "Heart Disease Risk Prediction",
      subtitle: "Clinical Decision Support System",
      description:
        "Developed a binary classification model evaluating 13 clinical indicators. Optimized performance using k-fold cross-validation and GridSearchCV to achieve an ROC-AUC of 0.92, prioritizing recall for critical clinical predictions.",
      tags: [
        "Python",
        "scikit-learn",
        "Streamlit",
        "Docker",
        "Machine Learning",
      ],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    },
  ];

  const experiences = [
    {
      role: "Machine Learning Engineer",
      company:
        "International Institute of Medical Science and Technology Council (IIMSTC)",
      period: "Feb 2026 — Present",
      description:
        "Acting as Project Lead for the technical development of a full-fledged automated infrastructure defect detection platform for organizational deployment. Implementing YOLOv8 and YOLO26s for core image diagnostics and integrating EigenCAM to generate mathematically auditable structural health reports. Managing end-to-end architecture, including data augmentation and frontend integration.",
      tags: [
        "YOLOv8",
        "Computer Vision",
        "EigenCAM",
        "AI/ML",
        "Project Leadership",
      ],
    },
    {
      role: "AI/ML Engineer (Apprentice)",
      company: "TNS Foundation (MUFG Track)",
      period: "Oct 2025 — Feb 2026",
      description:
        "Developed and deployed end-to-end machine learning pipelines encompassing data extraction, preprocessing, and model training for cohort engineering projects. Optimized predictive models through systematic hyperparameter tuning and cross-validation to ensure stable performance for production-level tasks.",
      tags: [
        "Machine Learning",
        "Hyperparameter Tuning",
        "Data Engineering",
        "Python",
      ],
    },
  ];

  const skillCategories = [
    {
      category: "AI/ML",
      skills: [
        "TensorFlow",
        "scikit-learn",
        "Pandas",
        "RAG",
        "LLMs (Ollama)",
        "Feature Attribution",
        "Computer Vision",
      ],
    },
    {
      category: "Languages & Core",
      skills: [
        "Python (Advanced)",
        "Java",
        "Dart (Flutter)",
        "SQL",
      ],
    },
    {
      category: "Backend & Cloud",
      skills: [
        "FastAPI",
        "AWS (EC2, S3)",
        "Docker",
        "Kubernetes",
        "Google Cloud Vision API",
      ],
    },
    {
      category: "Tools & Frameworks",
      skills: [
        "Git",
        "Postman",
        "SQLite",
        "Streamlit",
        "Pydantic",
      ],
    },
  ];

  return (
    <PageTransition>
      <CustomCursor />
      {/* <BackToTop /> */}
      <ChatWidget />
      <div
        style={{
          backgroundColor: T.bg,
          color: T.text,
          minHeight: "100vh",
        }}
      >
        <Navigation />

        {/* Scroll progress line */}
        <motion.div
          className="fixed top-0 left-0 right-0 z-50"
          style={{
            scaleX: scrollYProgress,
            height: "1px",
            backgroundColor: T.warm,
            transformOrigin: "left",
          }}
        />

        {/* ── Hero ── */}
        <section
          className="relative min-h-screen flex items-center justify-center px-8 md:px-[80px] overflow-hidden"
          style={{ paddingTop: "80px" }}
        >
          {/* Background image — parallax */}
          <motion.div
            className="absolute inset-0"
            style={{ y: heroBgY }}
          >
            <img
              src={heroBg}
              alt=""
              className="w-full h-full object-cover"
              style={{ opacity: 0.06, filter: "saturate(0)" }}
            />
          </motion.div>

          <div className="relative z-10 max-w-5xl w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={heroVariants}
              custom={0}
            >
              <p
                style={{
                  ...label,
                  color: T.muted,
                  marginBottom: "24px",
                }}
                variants={heroVariants}
                custom={0}
              >
                Portfolio — 2026
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={heroVariants}
              custom={1}
            >
              <h1
                style={{
                  ...display,
                  fontSize: "clamp(48px, 7vw, 96px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  color: T.text,
                  marginBottom: "32px",
                }}
              >
                Pleasure to meet you, I'm Adi
              </h1>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={heroVariants}
              custom={2}
            >
              <p
                style={{
                  ...body,
                  fontSize: "14px",
                  letterSpacing: "0.04em",
                  color: T.muted,
                  maxWidth: "480px",
                  lineHeight: 1.7,
                  marginBottom: "56px",
                }}
              >
                I build AI-powered systems and full-stack
                applications, from LLM pipelines to production
                web apps.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  ...label,
                  padding: "14px 32px",
                  border: `0.5px solid ${T.text}`,
                  backgroundColor: T.text,
                  color: T.bg,
                  cursor: "pointer",
                  borderRadius: 0,
                  transition:
                    "background-color 0.3s, color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (
                    e.target as HTMLElement
                  ).style.backgroundColor = T.warm;
                  (e.target as HTMLElement).style.borderColor =
                    T.warm;
                }}
                onMouseLeave={(e) => {
                  (
                    e.target as HTMLElement
                  ).style.backgroundColor = T.text;
                  (e.target as HTMLElement).style.borderColor =
                    T.text;
                }}
              >
                Get in touch
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  ...label,
                  padding: "14px 32px",
                  border: `0.5px solid ${T.border}`,
                  backgroundColor: "transparent",
                  color: T.text,
                  cursor: "pointer",
                  borderRadius: 0,
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.borderColor =
                  T.text)
                }
                onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.borderColor =
                  T.border)
                }
              >
                View work
              </button>
              <a
                href="/resume.pdf"
                download
                style={{
                  ...label,
                  padding: "14px 32px",
                  border: `0.5px solid ${T.border}`,
                  backgroundColor: "transparent",
                  color: T.muted,
                  cursor: "pointer",
                  borderRadius: 0,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "color 0.3s, border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color =
                    T.warm;
                  (e.target as HTMLElement).style.borderColor =
                    T.warm;
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color =
                    T.muted;
                  (e.target as HTMLElement).style.borderColor =
                    T.border;
                }}
              >
                <ArrowUpRight
                  style={{ width: "12px", height: "12px" }}
                />
                Resume
              </a>
            </motion.div>
          </div>

          {/* Subtle watermark after transition */}
          <motion.div
            className="absolute bottom-8 right-8 pointer-events-none select-none text-right"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "220px",
              fontWeight: 400,
              color: T.text,
              opacity: 0.02,
              lineHeight: 0.85,
              userSelect: "none",
            }}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 0.02, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            AK
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            style={{ opacity: heroOpacity }}
          >
            <p
              style={{
                ...label,
                color: T.muted,
                textAlign: "center",
                marginBottom: "12px",
              }}
            >
              Scroll
            </p>
            <div
              style={{
                width: "1px",
                height: "48px",
                backgroundColor: T.muted,
                margin: "0 auto",
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{
                  width: "100%",
                  height: "50%",
                  backgroundColor: T.warm,
                }}
                animate={{ y: ["0%", "200%"] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>
        </section>

        {/* ── About ── */}
        <section
          id="about"
          className={sectionPad}
          style={{ borderTop: `0.5px solid ${T.border}` }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
            >
              <p
                style={{
                  ...label,
                  color: T.muted,
                  marginBottom: "24px",
                }}
              >
                01 — About
              </p>
              <h2
                style={{
                  ...display,
                  fontSize: "48px",
                  letterSpacing: "-0.01em",
                  color: T.text,
                  marginBottom: "64px",
                }}
              >
                About me
              </h2>
              <div className="grid md:grid-cols-2 gap-16">
                <div
                  style={{
                    ...body,
                    fontSize: "14px",
                    letterSpacing: "0.04em",
                    lineHeight: 1.8,
                    color: T.muted,
                  }}
                >
                  <p style={{ marginBottom: "20px" }}>
                    I build AI-powered systems and full-stack
                    applications, from LLM pipelines to
                    production web apps.
                  </p>
                  <p style={{ marginBottom: "20px" }}>
                    I'm a Machine Learning Engineer working
                    across advanced AI diagnostics and
                    full-stack ML deployments. Currently leading
                    the technical development of Auralis, an
                    automated infrastructure defect detection
                    platform at IIMSTC, leveraging YOLOv8 and
                    EigenCAM to generate mathematically
                    auditable structural health reports.
                  </p>
                  <p style={{ marginBottom: "20px" }}>
                    My projects span high-precision computer
                    vision, clinical decision support systems,
                    and locally hosted RAG pipelines. I focus on
                    building robust, microservice-based
                    architectures, selecting the optimal stack
                    for the challenge—whether it's Python and
                    scikit-learn for algorithmic stock anomaly
                    detection, and FastAPI paired with Docker
                    and Ollama for edge-deployable AI
                    applications.
                  </p>
                  <p>
                    {" "}
                    I'm currently completing my B.Tech in
                    Computer Science in Bengaluru, while
                    actively translating rigorous mathematical
                    concepts into high-impact, production-ready
                    enterprise solutions.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      value: "3+",
                      label: "Projects",
                      color: T.warm,
                    },
                    {
                      value: "8+",
                      label: "Technologies",
                      color: T.cool,
                    },
                    // {
                    //   value: "2+",
                    //   label: "Years building",
                    //   color: T.text,
                    // },
                    {
                      value: "BSc",
                      label: "Computer Engineering",
                      color: T.muted,
                    },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      style={{
                        backgroundColor: T.surface,
                        border: `0.5px solid ${T.border}`,
                        padding: "32px 24px",
                        borderRadius: 0,
                      }}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      <div
                        style={{
                          ...display,
                          fontSize: "32px",
                          color: stat.color,
                          marginBottom: "8px",
                        }}
                      >
                        {stat.value}
                      </div>
                      <div style={{ ...label, color: T.muted }}>
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section
          id="projects"
          className={sectionPad}
          style={{
            backgroundColor: T.surface,
            borderTop: `0.5px solid ${T.border}`,
          }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
            >
              <p
                style={{
                  ...label,
                  color: T.muted,
                  marginBottom: "24px",
                }}
              >
                02 — Work
              </p>
              <h2
                style={{
                  ...display,
                  fontSize: "48px",
                  letterSpacing: "-0.01em",
                  color: T.text,
                  marginBottom: "64px",
                }}
              >
                Featured projects
              </h2>
              <div className="grid gap-6">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    {...project}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section
          id="experience"
          className={sectionPad}
          style={{ borderTop: `0.5px solid ${T.border}` }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
            >
              <p
                style={{
                  ...label,
                  color: T.muted,
                  marginBottom: "24px",
                }}
              >
                03 — Experience
              </p>
              <h2
                style={{
                  ...display,
                  fontSize: "48px",
                  letterSpacing: "-0.01em",
                  color: T.text,
                  marginBottom: "64px",
                }}
              >
                Experience
              </h2>
              <div className="space-y-4">
                {experiences.map((experience, index) => (
                  <ExperienceCard
                    key={index}
                    {...experience}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section
          id="skills"
          className={sectionPad}
          style={{
            backgroundColor: T.surface,
            borderTop: `0.5px solid ${T.border}`,
          }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
            >
              <p
                style={{
                  ...label,
                  color: T.muted,
                  marginBottom: "24px",
                }}
              >
                04 — Skills
              </p>
              <h2
                style={{
                  ...display,
                  fontSize: "48px",
                  letterSpacing: "-0.01em",
                  color: T.text,
                  marginBottom: "64px",
                }}
              >
                Skills & technologies
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories.map(
                  (category, categoryIndex) => (
                    <motion.div
                      key={categoryIndex}
                      style={{
                        border: `0.5px solid ${T.border}`,
                        padding: "40px",
                        borderRadius: 0,
                      }}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      {/* Leader line + label */}
                      <div className="flex items-center gap-4 mb-8">
                        <div
                          style={{
                            width: "24px",
                            height: "0.5px",
                            backgroundColor:
                              "rgba(26,26,28,0.15)",
                          }}
                        />
                        <p style={{ ...label, color: T.muted }}>
                          {category.category}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map(
                          (skill, skillIndex) => (
                            <SkillBadge
                              key={skillIndex}
                              skill={skill}
                            />
                          ),
                        )}
                      </div>
                    </motion.div>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Now ── */}
        <section
          id="now"
          className={sectionPad}
          style={{ borderTop: `0.5px solid ${T.border}` }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
            >
              <p
                style={{
                  ...label,
                  color: T.muted,
                  marginBottom: "24px",
                }}
              >
                05 — Now
              </p>
              <h2
                style={{
                  ...display,
                  fontSize: "48px",
                  letterSpacing: "-0.01em",
                  color: T.text,
                  marginBottom: "48px",
                }}
              >
                What I'm doing now
              </h2>
              <div
                style={{
                  borderLeft: `0.5px solid ${T.warm}`,
                  paddingLeft: "40px",
                }}
              >
                <p
                  style={{
                    ...body,
                    fontSize: "14px",
                    letterSpacing: "0.04em",
                    color: T.text,
                    lineHeight: 1.8,
                    marginBottom: "16px",
                  }}
                >
                  Building AI-powered systems and exploring the
                  intersection of LLMs and production web
                  applications.
                </p>
                <p
                  style={{
                    ...body,
                    fontSize: "14px",
                    letterSpacing: "0.04em",
                    color: T.muted,
                    lineHeight: 1.8,
                    marginBottom: "16px",
                  }}
                >
                  Currently focused on completing my B.Tech in
                  Computer Science while developing
                  enterprise-grade AI diagnostics at IIMSTC. I'm
                  deep into auditable AI architectures, local
                  LLM deployment with RAG, and building
                  mathematically rigorous machine learning
                  systems.
                </p>
                <p
                  style={{
                    ...body,
                    fontSize: "14px",
                    letterSpacing: "0.04em",
                    color: T.muted,
                    lineHeight: 1.8,
                  }}
                ></p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Contact — dark section ── */}
        <section
          id="contact"
          className={sectionPad}
          style={{ backgroundColor: T.dark }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
            >
              <p
                style={{
                  ...label,
                  color: "rgba(248,249,250,0.4)",
                  marginBottom: "24px",
                }}
              >
                06 — Contact
              </p>
              <h2
                style={{
                  ...display,
                  fontSize: "48px",
                  letterSpacing: "-0.01em",
                  color: "#f8f9fa",
                  marginBottom: "24px",
                }}
              >
                Let's work together
              </h2>
              <p
                style={{
                  ...body,
                  fontSize: "14px",
                  letterSpacing: "0.04em",
                  color: "rgba(248,249,250,0.4)",
                  marginBottom: "64px",
                }}
              >
                I'm always interested in hearing about new
                projects and opportunities.
              </p>

              <div className="flex flex-col items-center gap-6">
                <button
                  onClick={handleCopyEmail}
                  style={{
                    ...label,
                    padding: "16px 40px",
                    border: "0.5px solid rgba(248,249,250,0.25)",
                    backgroundColor: "transparent",
                    color: "#f8f9fa",
                    cursor: "pointer",
                    borderRadius: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = T.warm)
                  }
                  onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(248,249,250,0.25)")
                  }
                >
                  {copied ? (
                    <>
                      <CheckCheck
                        style={{
                          width: "14px",
                          height: "14px",
                        }}
                      />
                      Email copied
                    </>
                  ) : (
                    <>
                      <Mail
                        style={{
                          width: "14px",
                          height: "14px",
                        }}
                      />
                      adityakiranm24@gmail.com.com
                      <Copy
                        style={{
                          width: "12px",
                          height: "12px",
                          opacity: 0.5,
                        }}
                      />
                    </>
                  )}
                </button>

                <div className="flex gap-4">
                  {[
                    {
                      href: "https://github.com",
                      Icon: Github,
                    },
                    {
                      href: "https://linkedin.com",
                      Icon: Linkedin,
                    },
                  ].map(({ href, Icon }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "16px",
                        border:
                          "0.5px solid rgba(248,249,250,0.2)",
                        display: "inline-flex",
                        color: "rgba(248,249,250,0.55)",
                        borderRadius: 0,
                        transition:
                          "color 0.3s, border-color 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#f8f9fa";
                        e.currentTarget.style.borderColor =
                          "rgba(248,249,250,0.45)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color =
                          "rgba(248,249,250,0.55)";
                        e.currentTarget.style.borderColor =
                          "rgba(248,249,250,0.2)";
                      }}
                    >
                      <Icon
                        style={{
                          width: "18px",
                          height: "18px",
                        }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            backgroundColor: T.dark,
            borderTop: "0.5px solid rgba(240,238,234,0.06)",
            padding: "32px 80px",
          }}
        >
          <div
            className="max-w-6xl mx-auto flex justify-between items-center"
            style={{ ...label, color: "rgba(240,238,234,0.2)" }}
          >
            <span>© 2026 M Aditya Kiran</span>
            <span>Built with React, Motion, Tailwind</span>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
}