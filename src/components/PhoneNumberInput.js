import React from 'react';

const PhoneNumberInput = ({ phoneNumber, setPhoneNumber, handleSendOtp, otpSent }) => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="phone-input"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter your phone number"
        maxLength={10}
      />
      <button
        type="button"
        className="send-otp"
        onClick={handleSendOtp}
        disabled={otpSent}
      >
        {otpSent ? 'OTP Sent' : 'Send OTP'}
      </button>
    </div>
  );
};

export default PhoneNumberInput;
