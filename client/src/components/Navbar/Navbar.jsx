import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">

      <div className="container">

        {/* Logo */}

        <Link className="navbar-brand" to="/">

          <img
            src={logo}
            alt="Sansetra"
            className="site-logo"
          />

        </Link>


        {/* Mobile button */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >

          <span className="navbar-toggler-icon"></span>

        </button>


        <div
          className="collapse navbar-collapse"
          id="navMenu"
        >

          {/* Center Menu */}

          <ul className="navbar-nav mx-auto nav-center">

            <li className="nav-item">

              <Link
                className="nav-link active-link"
                to="/"
              >

                Home

              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link"
                to="/courses"
              >

                Courses

              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link"
                to="/jobs"
              >

                SAP Jobs

              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link"
                to="/projects"
              >

                Projects

              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link"
                to="/community"
              >

                Community

              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link"
                to="/about"
              >

                About Us

              </Link>

            </li>

          </ul>


          {/* Buttons */}

          <div className="nav-buttons">

            <button className="login-btn">

              Log In

            </button>


            <button className="signup-btn">

              Sign Up

            </button>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;