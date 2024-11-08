import React from 'react';

const OtpInput = ({ otp, setOtp }) => {
  return (
    <div>
      <label>Enter OTP</label>
      <input
        type="text"
        value={otp}
        onChange={setOtp}
        placeholder="Enter OTP"
        maxLength={6}
      />
    </div>
  );
};

export default OtpInput;
