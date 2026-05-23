import "./VerifyOTP.css";
import { toast } from "react-toastify";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import api from "../../api/axios";

function VerifyOTP() {
  const navigate = useNavigate();

  const location = useLocation();

  const email = location.state?.email;

  const [otp, setOtp] = useState("");

  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    try {
      setLoading(true);

      const res = await api.post("/auth/verify-otp", {
        email,
        otp,
      });

      toast.success(res.data.message || "Email verified");

      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Verify Email</h2>

        <p>
          OTP sent to:
          <br />
          <b>{email}</b>
        </p>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => {
            setOtp(e.target.value);
          }}
        />

        <button onClick={handleVerify}>
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </div>
    </div>
  );
}

export default VerifyOTP;
