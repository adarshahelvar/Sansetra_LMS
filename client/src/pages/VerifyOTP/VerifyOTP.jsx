import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api/axios";

function VerifyOTP() {
  const navigate = useNavigate();

  const location = useLocation();

  const email = location.state?.email;

  const [otp, setOtp] = useState("");

  const verify = async () => {
    try {
      await api.post(
        "/auth/verify-otp",

        {
          email,
          otp,
        },
      );

      alert("Verification successful");

      navigate("/login");
    } catch (error) {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Verify OTP</h2>

        <p>
          OTP sent to:
          {email}
        </p>

        <input
          value={otp}
          onChange={(e) => {
            setOtp(e.target.value);
          }}
          placeholder="Enter OTP"
        />

        <button onClick={verify}>Verify</button>
      </div>
    </div>
  );
}

export default VerifyOTP;
