import React, { useState } from "react";
import SignupForm from "../common/components/authentication/signup/SignupForm";
import AuthenticationWrapper from "../common/components/authentication/wrapper/AuthenticationWrapper";

const Signup = () => {
  /* Sign-Up States */
  const [step, setStep] = useState(1);
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
    phoneExt: "+91",
    country: "India",
    code: "IN",
  });
  return (
    <AuthenticationWrapper>
      <div className="_signup">
        {/* <div className="loading">
          <div className="bar" style={{ backgroundColor: "#2B64F9" }}></div>
          <div
        className="bar"
        style={{ backgroundColor: step === 1 ? "#DBDCDE" : "#2B64F9" }}
      ></div>
        </div> */}
        <SignupForm state={state} setState={setState} />
        {/* {step === 1 ? (
      <SignupForm
        state={state}
        setState={setState}
        onSuccess={() => setStep(2)}
      />
    ) : step === 2 ? (
      <MobileVerificationForm
        state={state}
        setState={setState}
        onSuccess={() => setStep(3)}
      />
    ) : step === 3 ? (
      <VerifyOTPForm goBack={() => setStep(2)} state={state} />
    ) : null} */}
      </div>
    </AuthenticationWrapper>
  );
};

export default Signup;
