import React, { useEffect, useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { AiFillCheckCircle } from "react-icons/ai";

const PasswordBox = ({
  password,
  setPassword,
  name,
  passwordMustSameError,
  InvalidPass,
  onPasswordValid,
  setonPasswordValid,
  disabled = false,
  showPopup = false
}) => {
  /* States */
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [capital, setCapital] = useState(false);
  const [small, setSmall] = useState(false);
  const [char, setChar] = useState(false);
  const [num, setNum] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(false);

  let tooweak;
  /*Function For Validate Password  */
  const handlePasswordChange = (e) => {
    const password = e?.target?.value;
    onPasswordValid && setonPasswordValid(tooweak);
    setPassword(password);
  };

  // Effect
  // useEffect(() => {
  //   setPasswordStrength(passwordStrength);
  // }, [passwordStrength]);

  useEffect(() => {
    if (password.length) {
      const capital = /[A-Z]/;
      const small = /[a-z]/;
      const num = /[0-9]/;
      const char = /[!@#$%^&*]/;
      setCapital(() => capital.test(password));
      setNum(() => num.test(password));
      setChar(() => char.test(password));
      setSmall(() => small.test(password));

      let tooweak =
        num.test(password) &&
        char.test(password) &&
        small.test(password) &&
        capital.test(password) &&
        password?.length >= 8;
      setPasswordStrength(tooweak);
      if (tooweak && name !== "password") {
        setShowModal(false && showPopup);
        setonPasswordValid(tooweak);
      } else {
        setShowModal(true && showPopup);
      }
    } else {
      setShowModal(false && showPopup);
    }
  }, [password, showPopup]);
  return (
    <>
      <div id="password-field">
        <input
          id="passwordfield"
          className={
            (name === "newpassword" &&
              password?.length > 0 &&
              !passwordStrength) ||
            (name === "cnewpassword" && !tooweak && passwordMustSameError) ||
            (name === "password" && InvalidPass)
              ? "error"
              : ""
          }
          style={{
            fontSize: password?.length > 0 && !showPassword ? "20px" : "12px",
            gap: password?.length > 0 && !showPassword ? "10px" : "10px",
          }}
          type={showPassword ? "text" : "password"}
          value={password}
          minLength={8}
          onChange={(e) => handlePasswordChange(e)}
          placeholder="Password"
          autoComplete="new-password"
          disabled={disabled}
          onBlur={() => setShowModal(false)}
        />

        {/* <button
          type="button"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          className="eye-button"
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button> */}

        <div
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          className="eye-button"
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </div>

        {showModal && name !== "password" && (
          <div id="password-notification">
            <p>Password should contain</p>

            <div className="notification">
              {password?.length >= 8 ? (
                <>
                  <div className="success-message">
                    <AiFillCheckCircle className="checkIcon" />
                    One least 8 characters
                  </div>
                </>
              ) : (
                <>
                  <div className="error-message">
                    <AiFillCheckCircle className="checkIcon" />
                    One least 8 characters
                  </div>
                </>
              )}
            </div>

            <div className="notification">
              {!small ? (
                <>
                  <div className="error-message">
                    <AiFillCheckCircle className="checkIcon" />
                    One lower case letter
                  </div>
                </>
              ) : (
                <>
                  <div className="success-message">
                    <AiFillCheckCircle className="checkIcon" />
                    One lower case letter
                  </div>
                </>
              )}
            </div>

            <div className="notification">
              {!capital ? (
                <>
                  <div className="error-message">
                    <AiFillCheckCircle className="checkIcon" />
                    One uppercase letter
                  </div>
                </>
              ) : (
                <>
                  <div className="success-message">
                    <AiFillCheckCircle className="checkIcon" />
                    One uppercase letter
                  </div>
                </>
              )}
            </div>

            <div className="notification">
              {!char ? (
                <>
                  <div className="error-message">
                    <AiFillCheckCircle className="checkIcon" />
                    One special character{" "}
                  </div>
                </>
              ) : (
                <>
                  <div className="success-message">
                    <AiFillCheckCircle className="checkIcon" />
                    One special character{" "}
                  </div>
                </>
              )}
            </div>

            <div className="notification">
              {!num ? (
                <>
                  {" "}
                  <div className="error-message">
                    <AiFillCheckCircle className="checkIcon" />
                    One number
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className="success-message">
                    <AiFillCheckCircle className="checkIcon" />
                    One number
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      {name === "newpassword" ? (
        <p id="tooweak">
          {password?.length > 0 &&
            (!passwordStrength ? "Password is too weak" : null)}
        </p>
      ) : null}
      {name === "cnewpassword" ? (
        <p id="notmatchpassword">
          {!passwordMustSameError ? null : "Password doesn’t match"}
        </p>
      ) : null}

      {name === "password" ? (
        <p id="password">{!InvalidPass ? null : "Incorrect Password"}</p>
      ) : null}
    </>
  );
};
export default PasswordBox;
