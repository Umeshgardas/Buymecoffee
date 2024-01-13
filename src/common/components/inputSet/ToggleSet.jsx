import React from "react";
import { Toggle } from "rsuite";
import { SelectPicker } from "rsuite";

const ToggleSet = ({ label, select, data, onChange, checked }) => {
  return (
    <div className="toggle-set">
      <label>{label}</label>
      <div className="toggle">
        {select ? (
          <SelectPicker
            appearance="subtle"
            searchable={false}
            data={data}
            cleanable={false}
          />
        ) : (
          <Toggle
            onChange={(checked, event) => onChange(checked)}
            checked={checked}
          />
        )}
      </div>
    </div>
  );
};

export default ToggleSet;
