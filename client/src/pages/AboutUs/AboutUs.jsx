import "./AboutUs.css";

import {
  FaGraduationCap,
  FaLaptopCode,
  FaUsers,
  FaBriefcase,
  FaCertificate,
  FaRocket,
} from "react-icons/fa";

function AboutUs() {
  return (
    <div className="about-page">
      {/* Hero */}

      <section className="hero-about">
        <div className="container">
          <h1>Welcome to Sansetra</h1>

          <p>
            An industry-focused learning platform designed to help students and
            professionals gain practical SAP and technology skills through
            real-world learning experiences.
          </p>
        </div>
      </section>

      {/* Features */}

      <section className="features-section">
        <div className="container">
          <h2>Why Sansetra?</h2>

          <div className="row">
            <div className="col-lg-4">
              <div className="feature-card">
                <FaGraduationCap />

                <h3>Industry Learning</h3>

                <p>Learn concepts aligned with real company requirements.</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="feature-card">
                <FaLaptopCode />

                <h3>Hands-on Projects</h3>

                <p>Build practical SAP and enterprise projects.</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="feature-card">
                <FaUsers />

                <h3>Community Support</h3>

                <p>Connect with students and professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Users Get */}

      <section className="benefits">
        <div className="container">
          <h2>What You Get After Enrollment</h2>

          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li>✔ Complete SAP learning path</li>

                <li>✔ Real-world projects</li>

                <li>✔ Industry-level use cases</li>

                <li>✔ Interview preparation</li>

                <li>✔ Resume guidance</li>

                <li>✔ Job opportunities</li>

                <li>✔ Community access</li>

                <li>✔ Lifetime content access</li>
              </ul>
            </div>

            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55e?q=80&w=1000"
                alt="students"
                className="benefits-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <FaBriefcase />

              <h2>20+</h2>

              <p>Industry Projects</p>
            </div>

            <div className="stat-card">
              <FaCertificate />

              <h2>50+</h2>

              <p>Learning Topics</p>
            </div>

            <div className="stat-card">
              <FaRocket />

              <h2>100%</h2>

              <p>Career Growth Focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="cta-section">
        <div className="container">
          <h2>Start Building Your Career Today</h2>

          <p>Join Sansetra and accelerate your professional journey.</p>

          <button
            onClick={() => {
              window.location.href = "/courses";
            }}
          >
            Explore Courses
          </button>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
