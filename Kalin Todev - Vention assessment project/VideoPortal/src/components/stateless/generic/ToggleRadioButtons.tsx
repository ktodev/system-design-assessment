// NOTE: This compnent is implemented, but not used so far.
// Keep in mind the toggle goup is not responsive on small screen device!
// This limitation comes from the underlying react-bootstrp "ToggleButtonGroup" component
// Hoever, because of the abstraction provided by "ToggleRadioButtonsProps", 
// this could be easily substituded accros the whole app's usages

import { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

interface ToggleRadioButtonsProps {
  nameValues: string[];
  appearence: string;
  onChange: (value: number) => void;
}

function ToggleRadioButtons({nameValues, appearence, onChange}: ToggleRadioButtonsProps) {
  const [value, setValue] = useState(0);

  const handleChange = (value: number) => {
    setValue(value);
    onChange(value);
  };

  return (
    <div className="toggle-button-group">
      <ToggleButtonGroup
        type="radio"
        name="options"
        value={value}
        onChange={handleChange}
      >
        {nameValues.map((value, index) => (
            <ToggleButton key={index} id={`tbg-radio-${index}`} value={index} variant={appearence}>
                {value}
            </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}

export default ToggleRadioButtons;
  