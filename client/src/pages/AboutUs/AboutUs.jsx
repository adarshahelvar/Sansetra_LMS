import "./AboutUs.css";

import {
  FaRocket,
  FaGraduationCap,
  FaLaptopCode,
  FaUsers,
  FaBriefcase,
  FaCertificate,
  FaBrain,
  FaBullseye,
  FaChartLine,
  FaLightbulb,
  FaProjectDiagram,
  FaUserTie,
  FaCheckCircle,
  FaLayerGroup,
  FaCloud,
  FaHandshake,
  FaBookOpen,
  FaRoute,
  FaGlobe,
  FaStar,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";

function AboutUs() {
  const problems = [
    "Students learn theory but struggle with real implementation.",
    "Many courses explain tools but do not show business use cases.",
    "Learners complete tutorials but still feel confused in interviews.",
    "There is a gap between classroom learning and company expectations.",
    "Freshers often lack project confidence and practical exposure.",
    "Working professionals need structured upskilling but do not know where to start.",
  ];

  const features = [
    {
      icon: <FaGraduationCap />,
      title: "Structured SAP Learning",
      desc: "Courses are organized from basic concepts to advanced business scenarios so learners do not feel lost.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Industry-Level Projects",
      desc: "Learners work through real business workflows, reports, integrations, and enterprise-style project cases.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Practical Implementation",
      desc: "Every topic focuses on what you can actually build, configure, analyze, or explain in real projects.",
    },
    {
      icon: <FaUserTie />,
      title: "Career Preparation",
      desc: "Sansetra helps learners prepare for interviews, resumes, project explanations, and job-oriented discussions.",
    },
    {
      icon: <FaUsers />,
      title: "Learning Community",
      desc: "Students can connect with peers, discuss doubts, share progress, and grow together.",
    },
    {
      icon: <FaCertificate />,
      title: "Completion Recognition",
      desc: "Learners can showcase completed learning paths, projects, and practical skills.",
    },
    {
      icon: <FaBrain />,
      title: "Concept Clarity",
      desc: "Complex SAP and enterprise topics are explained in simple language with practical examples.",
    },
    {
      icon: <FaChartLine />,
      title: "Growth Tracking",
      desc: "The platform is built to help learners see their journey from beginner to confident professional.",
    },
    {
      icon: <FaCloud />,
      title: "Modern Platform",
      desc: "Sansetra is built as a modern LMS with online learning, payments, dashboards, and video-based training.",
    },
  ];

  const journey = [
    {
      step: "01",
      title: "Start with Foundations",
      text: "Learners begin with core concepts, basic terminology, module overview, and business process understanding.",
    },
    {
      step: "02",
      title: "Understand Real Use Cases",
      text: "Every important topic is connected with how companies use SAP in finance, inventory, sales, HR, production, and reporting.",
    },
    {
      step: "03",
      title: "Practice With Projects",
      text: "Students work through practical scenarios so they can explain what they learned with confidence.",
    },
    {
      step: "04",
      title: "Prepare for Career",
      text: "The final stage focuses on resume building, interview preparation, project explanation, and job-readiness.",
    },
  ];

  const outcomes = [
    "You understand SAP from a business and technical point of view.",
    "You can explain projects confidently in interviews.",
    "You get clarity on how real companies use SAP modules.",
    "You build a portfolio of practical learning and projects.",
    "You become more confident while applying for jobs.",
    "You learn with a roadmap instead of random videos.",
    "You get access to community support and career-focused guidance.",
    "You can revise topics anytime through structured course content.",
  ];

  const projects = [
    "SAP Finance Reporting Dashboard",
    "Inventory and Procurement Flow",
    "Sales Order Management Process",
    "Material Requirement Planning Scenario",
    "Employee Master Data Management",
    "Vendor Payment Tracking System",
    "SAP S/4HANA Migration Case Study",
    "Purchase Order Approval Workflow",
  ];

  const faqs = [
    {
      q: "Who is Sansetra for?",
      a: "Sansetra is designed for students, freshers, working professionals, and career switchers who want practical SAP and enterprise technology learning.",
    },
    {
      q: "Is this only for beginners?",
      a: "No. The platform supports beginner-friendly learning but also includes project-based and industry-level content useful for intermediate learners.",
    },
    {
      q: "What makes Sansetra different?",
      a: "The platform focuses on practical understanding, project explanation, job readiness, and real business scenarios instead of only theory.",
    },
    {
      q: "Will I get projects?",
      a: "Yes. The learning experience is designed around projects, business cases, workflows, and practical scenarios.",
    },
    {
      q: "Can I learn at my own pace?",
      a: "Yes. The platform is video-based and allows learners to access purchased courses anytime.",
    },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-glow glow-one"></div>
        <div className="about-glow glow-two"></div>

        <div className="floating-chip chip-one">
          <FaRocket /> Career Growth
        </div>

        <div className="floating-chip chip-two">
          <FaBrain /> Practical Skills
        </div>

        <div className="floating-chip chip-three">
          <FaBriefcase /> Job Ready
        </div>

        <div className="container hero-inner">
          <span className="eyebrow">About Sansetra LMS</span>

          <h1>
            Learn SAP with Purpose. Build Skills with Confidence. Grow Your
            Career with Real Projects.
          </h1>

          <p>
            Sansetra is an industry-focused learning platform created to help
            learners move beyond theory and build practical, job-ready skills.
            The platform brings structured courses, project-based learning,
            community support, and career-focused guidance into one modern LMS.
          </p>

          <div className="hero-actions-about">
            <a href="/courses">Explore Courses</a>
            <a href="/community" className="secondary-action">
              Join Community
            </a>
          </div>

          <div className="hero-metrics">
            <div>
              <h3>20+</h3>
              <p>Project Ideas</p>
            </div>
            <div>
              <h3>50+</h3>
              <p>Learning Topics</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Career Focused</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="section-heading">
            <span>Our Story</span>
            <h2>Why Sansetra Was Built</h2>
          </div>

          <div className="story-grid">
            <div className="story-card large-card">
              <FaLightbulb />
              <h3>The Problem We Noticed</h3>
              <p>
                Many learners spend months watching tutorials, completing small
                exercises, and reading notes, but still struggle when they face
                real interviews or practical work. The reason is simple: most
                learning is disconnected from real business problems.
              </p>
              <p>
                Companies do not only expect definitions. They expect candidates
                to understand workflows, explain projects, solve problems, and
                connect technology with business outcomes.
              </p>
            </div>

            <div className="story-card">
              <FaBullseye />
              <h3>Our Mission</h3>
              <p>
                Sansetra exists to bridge the gap between learning and working.
                Our mission is to make enterprise learning more practical,
                structured, and career-focused.
              </p>
            </div>

            <div className="story-card">
              <FaHandshake />
              <h3>Our Promise</h3>
              <p>
                We aim to provide clear explanations, meaningful projects, and
                guidance that helps learners become confident, not just
                certified.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <div className="container">
          <div className="section-heading">
            <span>The Learning Gap</span>
            <h2>Problems Learners Commonly Face</h2>
          </div>

          <div className="problem-grid">
            {problems.map((item, index) => (
              <div className="problem-card" key={index}>
                <span>{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-section">
        <div className="container">
          <div className="solution-panel">
            <div>
              <span className="eyebrow">Our Solution</span>
              <h2>Learning Designed Around Real Career Outcomes</h2>
              <p>
                Sansetra organizes learning in a way that feels natural and
                practical. Instead of random videos, learners follow a guided
                path. Instead of memorizing theory, they understand why the
                concept matters. Instead of only watching, they apply ideas
                through projects and use cases.
              </p>
              <p>
                Whether someone is starting from zero or improving existing
                skills, Sansetra helps them build clarity, confidence, and
                direction.
              </p>
            </div>

            <div className="solution-visual">
              <div className="orbit orbit-one">
                <FaBookOpen />
              </div>
              <div className="orbit orbit-two">
                <FaTools />
              </div>
              <div className="orbit orbit-three">
                <FaRocket />
              </div>
              <div className="center-orbit">
                <FaGraduationCap />
                <strong>Sansetra</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section-about">
        <div className="container">
          <div className="section-heading">
            <span>Platform Strengths</span>
            <h2>What Makes Sansetra Different</h2>
          </div>

          <div className="feature-grid-about">
            {features.map((item, index) => (
              <div className="about-feature-card" key={index}>
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="journey-section">
        <div className="container">
          <div className="section-heading">
            <span>Your Roadmap</span>
            <h2>How Your Learning Journey Looks</h2>
          </div>

          <div className="journey-timeline">
            {journey.map((item, index) => (
              <div className="journey-card" key={index}>
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="enrollment-section">
        <div className="container">
          <div className="section-heading">
            <span>After Enrollment</span>
            <h2>What You Receive When You Join</h2>
          </div>

          <div className="outcome-grid">
            {outcomes.map((item, index) => (
              <div className="outcome-card" key={index}>
                <FaCheckCircle />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sap-section">
        <div className="container">
          <div className="sap-content">
            <div>
              <span className="eyebrow">SAP Career Focus</span>
              <h2>Why SAP Learning Needs Practical Understanding</h2>
              <p>
                SAP is used by large organizations to manage finance,
                procurement, sales, production, HR, analytics, and many other
                business operations. Learning SAP is not only about remembering
                screens or commands. It is about understanding how business
                processes work together.
              </p>
              <p>
                Sansetra focuses on this practical connection. When learners
                study a topic, they also understand why it exists, where it is
                used, how companies apply it, and how to explain it in a job
                interview or project discussion.
              </p>
            </div>

            <div className="sap-stack">
              <div>Finance</div>
              <div>Materials</div>
              <div>Sales</div>
              <div>Production</div>
              <div>HR</div>
              <div>Analytics</div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-showcase">
        <div className="container">
          <div className="section-heading">
            <span>Project-Based Learning</span>
            <h2>Examples of Projects Learners Can Explore</h2>
          </div>

          <div className="project-mini-grid">
            {projects.map((project, index) => (
              <div className="project-mini-card" key={index}>
                <FaLayerGroup />
                <h3>{project}</h3>
                <p>
                  A practical business scenario designed to help learners
                  understand enterprise workflows and real implementation logic.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="career-section">
        <div className="container">
          <div className="career-panel">
            <div>
              <span className="eyebrow">Career Transformation</span>
              <h2>From Learning Confusion to Career Confidence</h2>
              <p>
                Many learners know what they want: a better career, better
                confidence, and better opportunities. What they often lack is a
                clear path. Sansetra gives that path through structured content,
                projects, examples, and practical explanations.
              </p>
            </div>

            <div className="career-flow">
              <div>
                <FaBrain />
                <span>Understand</span>
              </div>
              <div>
                <FaTools />
                <span>Practice</span>
              </div>
              <div>
                <FaProjectDiagram />
                <span>Build</span>
              </div>
              <div>
                <FaBriefcase />
                <span>Apply</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="community-about">
        <div className="container">
          <div className="community-card-large">
            <FaUsers />
            <h2>Learning Is Better With a Community</h2>
            <p>
              Sansetra is not just about watching videos. It is about growing
              with others. Learners can connect, discuss doubts, explore career
              topics, share progress, and stay motivated through a community
              experience.
            </p>
            <a href="/community">Join Community</a>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-heading">
            <span>Questions</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((item, index) => (
              <div className="faq-item" key={index}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta-about">
        <div className="container">
          <FaGlobe />
          <h2>Ready to Start Learning With Purpose?</h2>
          <p>
            Explore Sansetra courses, build practical skills, work on projects,
            and start moving toward your career goals.
          </p>
          <a href="/courses">Explore Courses</a>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
