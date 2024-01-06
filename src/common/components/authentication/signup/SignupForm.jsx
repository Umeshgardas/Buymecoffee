import React, { useMemo, useState } from "react";
import InputBox from "../../formcontrols/InputBox";
import PasswordBox from "../../formcontrols/PasswordBox";
import Button from "../../formcontrols/Button";

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
        <InputBox
          name={"email"}
          placeholder={"Your email"}
          value={state.email}
          onChange={handleSetData}
          wrapperClassName={"w-100"}
          errMsg={_errors.email}
        />

        <PasswordBox
          password={state.password}
          setPassword={(password) => setState({ ...state, password })}
          onPasswordValid={passwordValid}
          setonPasswordValid={setPasswordValid}
          showPopup={true}
        />
        {/* <PasswordBox
        password={state.cpassword}
        setPassword={(cpassword) => setState({ ...state, cpassword })}
        onPasswordValid={cPasswordValid}
        setonPasswordValid={setCPasswordValid}
        passwordMustSameError={(state.password !== state.cpassword) && state.cpassword?.length} //temporary fix, need to fix the component props
        name="cnewpassword"
        disabled={!passwordValid}
        showPopup={passwordValid}
      /> */}
        {/*   {errorMsg && <p className="error-box">{errorMsg}</p>} */}
      </div>
      <div className="form-bottom">
        <Button
          disabled={
            !disabled || btnLoading || state.password !== state.cpassword
          }
          label={"Submit"}
          type={"submit"}
          className="ghostbutton"
          loading={btnLoading}
        />
        <div className="header">
          <span>
            Create your account today and analyze, track, and trade stocks like
            never before{" "}
          </span>
        </div>
        <p className="_linkpara">
          Already have an account?{" "}
          <button
            // className="link"
            // onClick={() => router.push("/login/")}
            type=""
          >
            Log In
          </button>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
