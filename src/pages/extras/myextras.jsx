import React, { useState } from "react";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import { isValidNumber } from "../../helpers/regex";

function MyExtras() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const divStyle = {
    backgroundColor: isFocused ? "#fff" : "#E0E5E9",
  };
  return (
    <>
      <form action="" className="extras_form_container">
        <div className="extras_form_container-inputs inline">
          <div className="offering">
            <label>What are you offering?</label>
            <div className="offering-input-container">
              <input type="text" />
            </div>
          </div>
          <div className="price">
            <div className="heading">Price</div>
            <div className="input-container">
              <span className="dollar-symbol">$</span>
              <input
                type="number"
                className="input-field"
                placeholder="26"
                min="0"
                step="any" // Allows decimal input
                onKeyDown={(e) => {
                  // Prevents typing of '-' for negative numbers
                  if (e.key === "-" || e.key === "+") {
                    e.preventDefault();
                  }
                }}
                onInput={(e) => isValidNumber(e.target.value)}
              />
            </div>
          </div>
          {/* <div className="price">
            <div className="heading">Price</div>
            <div className="price-input-container"
            style={divStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}>
              <span id="doller" htmlFor="dollarInput">$</span>
              <input type="number" title="$" placeholder="26" onInput={isValidNumber}

              />
            </div>
          </div> */}
        </div>
        <div className="extras_form_container-inputs">
          <label>Description</label>
          <input type="text" placeholder="Describe" />
        </div>
        <div className="extras_form_container-inputs">
          <label id="note">
            Confirmation message
            <span
              className="question-container"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered && (
                <span id="messageText">
                  if you'd like additional information to fulfill this offering,
                  you can leave a question here{" "}
                </span>
              )}
              <AiTwotoneQuestionCircle id="question-icon" />
            </span>
          </label>
          <input
            type="text"
            placeholder="Eg : Thank you,Here's is your extra:https://m/scl..."
          />
        </div>
        <div className="choose_file_container">
          <label>Choose an image</label>
          <p>Recommoeded size: by 460 by 200 pixels</p>
          <input
            type="file"
            className="choose_file"
            placeholder="choose file"
          />
        </div>
      </form>
    </>
  );
}

export default MyExtras;
