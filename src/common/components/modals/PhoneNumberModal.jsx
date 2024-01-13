import React, { useEffect, useMemo, useState } from "react";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import PhoneNumberInputSet from "../inputSet/PhoneNumberField";

const PhoneNumberModal = ({
  phone,
  setChangedNumber,
  phoneExt = null,
  setNumberWithExt,
}) => {
  return (
    <PhoneNumberInputSet
      phone={phone}
      setChangedNumber={setChangedNumber}
      phoneExt={phoneExt}
      setNumberWithExt={setNumberWithExt}
      fieldClassName="phonenumber-set"
      modalClassName="phoneNumberModal"
      defaultFlagObj={null}
    />
  );
};

export default PhoneNumberModal;
