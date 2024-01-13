import React, { useState, useEffect, useMemo } from "react";
import { FaStarOfLife } from "react-icons/fa";
import { Dropdown, Input, InputGroup, Modal } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import validator from "validator";

// Constants
import CountryPhone from "@/common/constants/CountryCode";
import isMobileNumberValid from "@/validators/isMobileNumberValid";

const CountryCodePhoneNumberField = ({
  fieldClassName,
  inputid,
  modalClassName,
  errorMsg,
  country,
  phone,
  phoneExt,
  setErrors,
  errorMssg,
  setErrorMssg,
  onValueChange = () => {},
}) => {
  // State
  const [selectedCountry, setSelectedCountry] = useState({});
  const [open, setOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  // const [errorMssg, setErrorMssg] = useState(null);

  // Country List Item
  const CountryListItem = ({ item, isSelected = false }) => {
    return (
      <p
        className={`${isSelected ? "priority" : ""} countries`}
        onClick={() => {
          setSelectedCountry(item);
          onValueChange({
            phoneExt: item.dial_code,
            phone: phone,
            country: item?.name,
            code: item?.code,
          });
          if (isMobileNumberValid(phone, item?.code)) {
            setErrorMssg(false);
          } else {
            setErrorMssg("Please enter valid mobile number");
          }
          setSearchKeyword("");
          setOpen(false);
        }}
      >
        <span className="priority-flag" style={{ fontSize: 20 }}>
          {item?.emoji}
        </span>
        <span className="priority-name">{item?.name}</span>{" "}
        <span className="priority-code" style={{ marginLeft: 8 }}>
          {item?.dial_code}
        </span>
      </p>
    );
  };

  // Custom Filter Based On Search Keyword
  const customFilter = (item, searchKeyword) => {
    const lowerCaseKeyword = searchKeyword.toLowerCase();
    return (
      item.name.toLowerCase().includes(lowerCaseKeyword) ||
      item.code.toLowerCase().includes(lowerCaseKeyword) ||
      item.dial_code.includes(searchKeyword)
    );
  };

  // Filtered Data Of Country List
  const filterData = useMemo(
    () => CountryPhone.filter((item) => customFilter(item, searchKeyword)),
    [searchKeyword]
  );

  // Handle Phone Number Input
  function handlePhoneNumberChange(event) {
    setErrors(null);
    onValueChange({
      phone: event.replace(/[^0-9]/g, ""),
      phoneExt,
      country: selectedCountry.name,
    });
    if (isMobileNumberValid(event, selectedCountry?.code)) {
      setErrorMssg(false);
    } else {
      setErrorMssg("Please enter valid mobile number");
    }
  }

  // UseEffect
  useEffect(() => {
    const countryPhoneObject = CountryPhone.filter(
      (e) => e.name === country
    )[0];

    setSelectedCountry(countryPhoneObject);
  }, [phone, country, phoneExt]);

  return (
    <>
      {/* Form */}
      <div className={fieldClassName}>
        <label>
          Phone <FaStarOfLife className="req-star" />
        </label>
        <InputGroup className={errorMsg?.length ? "error-input" : ""}>
          <Dropdown
            size="sm"
            icon={
              <span
                className="dropdownflag"
                style={{
                  fontSize: 20,
                  display: "flex",
                  fontFamily: "Twemoji Country Flags",
                }}
              >
                {selectedCountry?.emoji}
              </span>
            }
            onClick={() => setOpen(true)}
          ></Dropdown>
          <input
            id={inputid ? inputid : ""}
            value={phoneExt}
            onChange={(e) => handlePhoneNumberChange(e.target.value)}
            disabled={true}
            style={{
              maxWidth:
                phoneExt?.length === 2 ? 25 : phoneExt?.length === 3 ? 30 : 44, //temp fix
              paddingRight: 0,
            }}
          />
          <Input
            id={inputid ? inputid : ""}
            value={phone}
            onChange={(e) => handlePhoneNumberChange(e)}
          />
          {fieldClassName === "phonenumber-set" && !errorMsg ? (
            <InputGroup.Addon />
          ) : (
            ""
          )}
        </InputGroup>
        {(errorMssg || errorMsg?.length > 0) && (
          <p className="text-danger" style={{ marginTop: 5 }}>
            {errorMssg ? errorMssg : errorMsg}
          </p>
        )}
      </div>

      {/* Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className={modalClassName}
      >
        <InputGroup
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: ".5rem",
          }}
          cleanable
        >
          <SearchIcon />
          <Input placeholder="Search" onChange={(e) => setSearchKeyword(e)} />
        </InputGroup>
        <Modal.Body>
          <div className={`${modalClassName}-body`}>
            {searchKeyword?.length === 0 && selectedCountry && (
              <CountryListItem isSelected={true} item={selectedCountry} />
            )}
            {filterData?.map((item, i) => (
              <CountryListItem item={item} key={i} />
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CountryCodePhoneNumberField;
