import "./NotFound.css";

import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="not-found-card">
        <h1>404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>The page you're looking for doesn't exist or may have been moved.</p>

        <div className="button-group">
          <button
            className="home-btn"
            onClick={() => {
              navigate("/");
            }}
          >
            Go Home
          </button>

          <button
            className="back-btn"
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
