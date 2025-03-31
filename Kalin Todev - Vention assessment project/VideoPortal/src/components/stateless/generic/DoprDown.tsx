import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

interface DropDownProps {
  title: string;
  nameValues: string[];
  appearence: string;
  onChange: (value: number) => void;
}

function DropDown({ title, nameValues, appearence, onChange }: DropDownProps) {
  return (
    <Dropdown>
      <DropdownButton title={title} variant={appearence}>
        {nameValues.map((value, index) => (
          <Dropdown.Item key={index} onClick={() => onChange(index)}>
            {value}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </Dropdown>
  );
}

export default DropDown;
