import React from "react";
import { FaStarOfLife } from "react-icons/fa";
import { Input, InputGroup } from "rsuite";
import InputSet from "./InputSet";

const PhoneInputSet = ({ label, required, currentNumber }) => {
  return (
    <div className="phone-input">
      <div className="label-line">
        <label>
          {label} {required && <FaStarOfLife className="req-star" />}
        </label>
      </div>
      <InputGroup  className="rs-phone" classPrefix="phone">
      {/* <InputGroup.Addon></InputGroup.Addon> */}
        <InputSet required value={currentNumber} preAddon={`+91`} />
      </InputGroup>
    </div>
  );
};

export default PhoneInputSet;
