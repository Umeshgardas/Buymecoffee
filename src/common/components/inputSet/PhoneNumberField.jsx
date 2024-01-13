import React, { useEffect, useMemo, useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import { Dropdown, Input, InputGroup, Modal } from "rsuite";
import { HiCheckCircle } from "react-icons/hi";
import SearchIcon from "@rsuite/icons/Search";
import CountryPhone from "@/common/constants/CountryCode";

const PhoneNumberField = ({
  phone,
  setChangedNumber = () => {},
  phoneExt,
  onChangePhoneExt = () => {},
  setNumberWithExt = () => {},
  fieldClassName,
  inputid,
  modalClassName,
  errorMsg,
}) => {
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleInputChange = (event) => {
    if (
      event === selectedCountry?.dial_code?.trim() ||
      event?.length <= selectedCountry?.dial_code?.trim()?.length
    ) {
      setChangedNumber("");
      return setNumber(selectedCountry?.dial_code?.trim());
    } else {
      setNumber(
        selectedCountry?.dial_code?.trim() +
          " " +
          event.replaceAll(selectedCountry?.dial_code?.trim(), "")?.trim().replace(/[^0-9]/g, "")?.trim()
      );
      setChangedNumber(
        event
          .replaceAll(selectedCountry?.dial_code?.trim(), "")
          ?.trim()
          .replace(/[^0-9]/g, "")?.trim()
      );
    }
  };
  const customFilter = (item, searchKeyword) => {
    const lowerCaseKeyword = searchKeyword.toLowerCase();
    return (
      item.name.toLowerCase().includes(lowerCaseKeyword) ||
      item.code.toLowerCase().includes(lowerCaseKeyword) ||
      item.dial_code.includes(searchKeyword)
    );
  };
  const CountryListItem = ({ item, isSelected = false }) => {
    return (
      <p
        className={`${isSelected ? "priority" : ""} countries`}
        onClick={() => {
          setSelectedCountry(item);
          setNumber(
            phone
              ? item?.dial_code?.trim() + " " + phone?.trim()
              : item?.dial_code
          );
          onChangePhoneExt(item?.dial_code);
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
  const filterData = useMemo(
    () => CountryPhone.filter((item) => customFilter(item, searchKeyword)),
    [searchKeyword]
  );
  useEffect(() => {
    if (phoneExt) {
      setSelectedCountry(phoneExt);
      let _number = phoneExt?.dial_code?.trim();
      if (phone) {
        _number += ` ${phone?.trim()}`;
      }
      setNumber(_number);
    }
  }, [phoneExt]);

  useEffect(() => {
    if (number) {
      setNumberWithExt(number.split(" ").join(""));
    }
  }, [number]);

  return (
    <>
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
          <Input
            id={inputid ? inputid : ""}
            value={!number ? phone : number}
            onChange={handleInputChange}
          />
          {fieldClassName === "phonenumber-set" && !errorMsg ? (
            <InputGroup.Addon>
              {/* <HiCheckCircle className="check-icon" /> */}
            </InputGroup.Addon>
          ) : (
            ""
          )}
        </InputGroup>
        {errorMsg?.length > 0 && (
          <p className="text-danger" style={{ marginTop: 5 }}>
            {errorMsg}
          </p>
        )}
      </div>
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

export default PhoneNumberField;
