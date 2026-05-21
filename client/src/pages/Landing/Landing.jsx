import "./Landing.css";
import {
  FaUsers,
  FaBoxOpen,
  FaUserTie,
  FaStar,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaClock,
  FaCreditCard,
  FaRocket,
  FaDownload,
  FaGooglePlay,
  FaApple,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import tcs from "../../assets/logos/tcs.png";
import infosys from "../../assets/logos/infosys.png";
import accenture from "../../assets/logos/accenture.png";
import deloitte from "../../assets/logos/deloitte.png";
import capgemini from "../../assets/logos/capgemini.png";
import wipro from "../../assets/logos/wipro.png";

function Landing() {
  const companies = [
    "TCS",
    "Infosys",
    "Accenture",
    "Deloitte",
    "Capgemini",
    "Wipro",
  ];

  const features = [
    [
      "Industry Experts",
      "Learn from certified SAP professionals with real-world experience.",
      <FaGraduationCap />,
    ],
    [
      "Real-Time Projects",
      "Work on live SAP projects and gain practical industry exposure.",
      <FaBriefcase />,
    ],
    [
      "Certifications",
      "Earn industry-recognized certificates after course completion.",
      <FaCertificate />,
    ],
    [
      "Placement Support",
      "Resume building, mock interviews and dedicated placement guidance.",
      <FaUserTie />,
    ],
    [
      "Learn Anytime",
      "Access courses anytime, anywhere on web or mobile.",
      <FaClock />,
    ],
    [
      "Affordable Learning",
      "Premium SAP education at student-friendly prices.",
      <FaCreditCard />,
    ],
  ];

  const courses = [
    [
      "SAP FICO",
      "Financial Accounting & Controlling",
      "30+ Hours",
      "Beginner to Advanced",
    ],
    [
      "SAP HCM",
      "Next Generation ERP System",
      "40+ Hours",
      "Beginner to Advanced",
    ],
    ["SAP MM", "Materials Management", "25+ Hours", "Beginner to Advanced"],
    ["SAP SD", "Sales & Distribution", "25+ Hours", "Beginner to Advanced"],
    ["SAP PP", "Production Planning", "20+ Hours", "Beginner to Advanced"],
    ["SAP HANA", "In-Memory Database", "20+ Hours", "Beginner to Advanced"],
  ];

  const reviews = [
    [
      "Rahul Verma",
      "Sansetra helped me build real skills and I landed my dream SAP job.",
      "Infosys",
    ],
    [
      "Sneha Reddy",
      "The practical approach and projects made learning easy and effective.",
      "Accenture",
    ],
    [
      "Amit Sharma",
      "Best platform to learn SAP with placement support. Highly recommended!",
      "TCS",
    ],
    [
      "Priya Nair",
      "Great mentors, real-time projects and amazing support throughout.",
      "Deloitte",
    ],
  ];

  return (
    <div className="sap-landing">
      <section className="sap-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h1>
                Learn SAP.
                <br />
                Build Skills.
                <br />
                <span>Get Hired.</span>
              </h1>

              <p>
                Practical training, real-time projects and placement support to
                accelerate your career.
              </p>

              <div className="hero-actions">
                <button className="primary-btn">Explore Courses →</button>
                <button className="outline-btn">
                  Download App <FaDownload />
                </button>
              </div>

              <div className="hero-stats">
                <div>
                  <FaUsers />
                  <b>50K+</b>
                  <small>Learners</small>
                </div>
                <div>
                  <FaBoxOpen />
                  <b>200+</b>
                  <small>Courses</small>
                </div>
                <div>
                  <FaUserTie />
                  <b>100+</b>
                  <small>Expert Trainers</small>
                </div>
                <div>
                  <FaStar />
                  <b>95%</b>
                  <small>Placement Support</small>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="hero-visual">
                <div className="laptop-card">
                  <h6>Dashboard</h6>
                  <p>Welcome back, Learner!</p>
                  <div className="dash-row">
                    <span>
                      12
                      <br />
                      Courses
                    </span>
                    <span>
                      05
                      <br />
                      Certificates
                    </span>
                    <span>
                      03
                      <br />
                      Projects
                    </span>
                  </div>
                  <div className="chart-bars">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>

                <div className="phone-mock">
                  <div className="phone-top"></div>
                  <h6>Hi, Learner 👋</h6>
                  <input placeholder="Search for courses..." />
                  <div className="phone-course">
                    <span>Master SAP</span>
                    <b>Build Your Future</b>
                    <button>Start Learning</button>
                  </div>
                  <p>Continue Learning</p>
                  <div className="mini-card">SAP S/4HANA</div>
                  <div className="mini-grid">
                    <span>FICO</span>
                    <span>MM</span>
                    <span>SD</span>
                    <span>PP</span>
                  </div>
                </div>

                <div className="float-card one">👥 Expert Trainers</div>
                <div className="float-card two">🛡️ Certification</div>
                <div className="float-card three">💼 Real-Time Projects</div>
                <div className="float-card four">🚀 Placement Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container page-panel">
        <section className="trusted">
          <h6>Trusted by Learners. Recognized by Top Companies.</h6>
          <div className="logos">
            {companies.map((company, index) => (
              <div className="logo-box" key={index}>
                <h3 className="company-text">{company}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="why-section">
          <h2>
            Why Choose <span>Sansetra?</span>
          </h2>
          <div className="row g-3">
            {features.map((item, i) => (
              <div className="col-lg-2 col-md-4 col-sm-6" key={i}>
                <div className="feature-card">
                  <div className="feature-icon">{item[2]}</div>
                  <h5>{item[0]}</h5>
                  <p>{item[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="course-section">
          <div className="section-head">
            <h2>
              Popular SAP <span>Courses</span>
            </h2>
            <a>View All Courses →</a>
          </div>

          <div className="row g-3">
            {courses.map((course, i) => (
              <div className="col-lg-2 col-md-4 col-sm-6" key={i}>
                <div className={`sap-course c${i + 1}`}>
                  <h3>{course[0]}</h3>
                  <p>{course[1]}</p>
                  <div>
                    <small>{course[2]}</small>
                    <small>{course[3]}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reviews">
          <h2>Real Stories. Real Success.</h2>
          <div className="row g-4">
            {reviews.map((review, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="review-card">
                  <img
                    src={`https://randomuser.me/api/portraits/${i % 2 ? "women" : "men"}/${20 + i}.jpg`}
                  />
                  <div className="stars">★★★★★</div>
                  <p>{review[1]}</p>
                  <h5>{review[0]}</h5>
                  <small>Placed at</small>
                  <h4>{review[2]}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mobile-app">
          <div className="app-img">
            <img src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=900&auto=format&fit=crop" />
          </div>

          <div>
            <p>Learn on the Go</p>
            <h2>Sansetra Mobile App</h2>
            <span>
              Your learning companion in your pocket. Access courses, track
              progress, get job alerts and more — anytime, anywhere.
            </span>
          </div>

          <div className="store-buttons">
            <button>
              <FaGooglePlay /> GET IT ON
              <br />
              <b>Google Play</b>
            </button>
            <button>
              <FaApple /> Download on the
              <br />
              <b>App Store</b>
            </button>
          </div>

          <div className="qr-box">
            QR
            <br />
            <small>Scan to Download</small>
          </div>
        </section>

        <section className="career-banner">
          <div className="rocket">
            <FaRocket />
          </div>
          <div>
            <h2>Start Your Career Journey Today!</h2>
            <p>
              Join thousands of learners who are building successful SAP careers
              with Sansetra.
            </p>
          </div>
          <button>Start Learning Now</button>
          <button className="dark-btn">Explore Courses</button>
        </section>
      </main>
    </div>
  );
}

export default Landing;
