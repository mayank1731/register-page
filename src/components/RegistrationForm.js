import React, { useState } from 'react';
import PhoneNumberInput from './PhoneNumberInput';
import OtpInput from './OtpInput';

const RegistrationForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [otpEntered, setOtpEntered] = useState(false);

  const handleSendOtp = () => {
    if (phoneNumber.length === 10) {
      setOtpSent(true);
      alert('OTP sent to ' + phoneNumber);
    } else {
      alert('Please enter a valid phone number');
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    if (e.target.value.length === 6) {
      setOtpEntered(true); // Show submit button after OTP is fully entered
    } else {
      setOtpEntered(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Please accept the Terms and Conditions.");
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="registration-box">
      <h2>OTP Registration</h2>
      <form onSubmit={handleFormSubmit}>
        <PhoneNumberInput
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          handleSendOtp={handleSendOtp}
          otpSent={otpSent}
        />
        {otpSent && (
          <OtpInput otp={otp} setOtp={handleOtpChange} />
        )}
        {otpEntered && (
          <>
            <div className="terms-and-conditions">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
              />
              <label htmlFor="terms">
                I agree to the <a href="#">Terms and Conditions</a>
              </label>
            </div>
            <button type="submit" className="submit-btn" disabled={!termsAccepted}>
              Submit
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;
