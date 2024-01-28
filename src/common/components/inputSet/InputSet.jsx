import React from "react";
import { Button, Input, SelectPicker, InputGroup, DatePicker } from "rsuite";
import { FaStarOfLife } from "react-icons/fa";
import { AiOutlineMinusCircle, AiOutlineCalendar } from "react-icons/ai";
import { HiCheckCircle } from "react-icons/hi";
import dayjs from "dayjs";

const InputSet = ({
  label,
  label2,
  required,
  error,
  removable,
  placeholder,
  selectpicker,
  data,
  as,
  disabled,
  value,
  change,
  onChange,
  onChangeClick,
  datepicker,
  preAddon,
  onSelect,
  postAddon,
}) => {
  return (
    <div className="input-set">
      {label && (
        <div className="label-line">
          <label>
            {label} {required && <FaStarOfLife className="req-star" />}
          </label>
          {change && (
            <Button appearance="link" size="xs" onClick={onChangeClick}>
              Change
            </Button>
          )}
        </div>
      )}
      {label2 && (
        <div className="label-line2">
          <label>
            {label2} {required && <FaStarOfLife className="req-star2" />}
          </label>
          {change && (
            <Button appearance="link" size="xs" onClick={onChangeClick}>
              Change
            </Button>
          )}
        </div>
      )}

      <div className="input-row">
        {selectpicker ? (
          datepicker ? (
            <DatePicker
              appearance="default"
              value={value}
              placeholder={placeholder}
              onChange={(v) => onChange(v)}
              // onChangeCalendarDate={(v) => onChange(v)}
              classPrefix="setting-cal"
              cleanable={false}
              caretAs={AiOutlineCalendar}
              oneTap
              format="dd MMMM yyyy"
              shouldDisableDate={(date) => dayjs(date).isAfter(dayjs())}
            />
          ) : (
            <SelectPicker
              data={data}
              value={value}
              searchable={false}
              classPrefix="settings"
              cleanable={true}
              onChange={(v) => onChange(v)}
            />
          )
        ) : change ? (
          <InputGroup>
            {preAddon && (
              <InputGroup.Addon className="pre-addon">
                {preAddon}
              </InputGroup.Addon>
            )}
            <Input
              placeholder={placeholder}
              as={as}
              disabled={disabled}
              value={value}
              onChange={(v) => onChange(v)}
            />
            <InputGroup.Addon>
              <HiCheckCircle className="check-icon" />
            </InputGroup.Addon>
          </InputGroup>
        ) : (
          <InputGroup>
            {preAddon && (
              <InputGroup.Addon className="pre-addon">
                {preAddon}
              </InputGroup.Addon>
            )}
            <Input
              placeholder={placeholder}
              as={as}
              disabled={disabled}
              value={value}
              onChange={(v) => onChange(v)}
            />
          </InputGroup>
        )} 
        &nbsp;&nbsp;{postAddon &&  <span>{postAddon}</span> }
        {removable && <AiOutlineMinusCircle className="remove-icon" />}
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default InputSet;
