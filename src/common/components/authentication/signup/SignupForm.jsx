import React, { useMemo, useState } from "react";
import InputBox from "../../formcontrols/InputBox";
import PasswordBox from "../../formcontrols/PasswordBox";
import Button from "../../formcontrols/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";

const SignupForm = ({ state, setState = () => {}, onSuccess = () => {} }) => {
  // State
  const [_errors, setErrors] = useState({});
  const [btnLoading, setBtnLoading] = useState(false);

  // PasswordValid State
  const [passwordValid, setPasswordValid] = useState(false);
  const [cPasswordValid, setCPasswordValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const onSubmit = async (e) => {
    // try {
    //   e.preventDefault();
    //   const { errors, isValid } = validateSignup(state);
    //   if (!isValid) {
    //     setErrors(errors);
    //     setErrorMsg(null);
    //     return;
    //   }
    //   setBtnLoading(true);
    //   const isEmailExists = await postData(
    //     `${process.env.NEXT_PUBLIC_API_URL}/auth/check-user`,
    //     {
    //       email: state.email,
    //     }
    //   );
    //   if (isEmailExists?.status === 200) {
    //     setErrors({ email: "Email already exists. Please login instead!" });
    //     setErrorMsg(null);
    //     return;
    //   }
    //   onSuccess();
    // } catch (error) {
    //   setErrorMsg(error?.message);
    // } finally {
    //   setBtnLoading(false);
    // }
  };

  // Handle Data
  const handleSetData = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // For Disable button until All field filled
  const disabled = useMemo(() => {
    const { email, password } = state;
    return email?.length > 0 && passwordValid;
  }, [state, passwordValid]);
  return (
    <form className="form" onSubmit={onSubmit} id="signup_user_details_form">
      <div className="form-top">
        <div className="singupwith">
          <FaFacebookF className="facebook-icon" />
          Sign up with Facebook
          <LuArrowRight />
        </div>
        <div className="singupwith">
          <FcGoogle />
          Sign up with Google
          <LuArrowRight />
        </div>
        <div className="or">
        <span className="horizontal-line"></span>Or
        <span className="horizontal-line"></span>
        </div>
        <InputBox
          name={"email"}
          placeholder={"Your email"}
          value={state.email}
          onChange={handleSetData}
          inputClassName={"signup_input"}
          errMsg={_errors.email}
        />

        <PasswordBox
          password={state.password}
          setPassword={(password) => setState({ ...state, password })}
          onPasswordValid={passwordValid}
          setonPasswordValid={setPasswordValid}
          showPopup={true}
        />
      </div>
      <div className="form-bottom">
        <Button
          disabled={
            !disabled || btnLoading || state.password !== state.cpassword
          }
          label={"Sign up with email"}
          type={"submit"}
          className="ghostbutton"
          loading={btnLoading}
        />
        <div className="header">
          <span className="signup_para">
            By signing up, you agree to our Terms. We do not allow adult
            content. You must be 18+ to create a page{" "}
          </span>
        </div>
        <p className="_linkpara">
          Already have an account? <span className="link">Login</span>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
