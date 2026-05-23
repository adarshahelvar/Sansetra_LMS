import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/");

    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        {/* Logo */}

        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Sansetra" className="site-logo" />
        </Link>

        {/* Mobile */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          {/* Existing Menu */}

          <ul className="navbar-nav mx-auto nav-center">
            <li className="nav-item">
              <Link className="nav-link active-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/courses">
                Courses
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/jobs">
                SAP Jobs
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/community">
                Community
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            {user?.role === "admin" || user?.role === "instructor" ? (
              <Link className="nav-link" to="/admin-dashboard">
                Dashboard
              </Link>
            ) : (
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            )}
          </ul>

          <div className="nav-buttons">
            {token ? (
              <>
                {(user?.role === "admin" || user?.role === "instructor") && (
                  <Link to="/add-course">
                    <button className="add-course-btn">+ Add Course</button>
                  </Link>
                )}

                <div className="user-box">👤 {user?.name}</div>

                <button className="logout-btn" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="login-btn">Log In</button>
                </Link>

                <Link to="/signup">
                  <button className="signup-btn">Sign Up</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
