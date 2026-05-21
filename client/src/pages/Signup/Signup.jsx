import "./Signup.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api/axios";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    education: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", formData);

      navigate("/verify-otp", {
        state: {
          email: formData.email,
        },
      });
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} />

          <input name="email" placeholder="Email" onChange={handleChange} />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <input
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          <input
            name="education"
            placeholder="Education"
            onChange={handleChange}
          />

          <input name="address" placeholder="Address" onChange={handleChange} />

          <button>Register</button>
          <div className="auth-bottom">
            Already have account?
            <Link to="/login">Log In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
