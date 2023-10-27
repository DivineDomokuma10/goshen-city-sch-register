/* eslint-disable no-unused-vars */
import { Checkbox, HStack } from "@chakra-ui/react";
import { useState } from "react";

const CheckBoxes = () => {
  const [checkBoxes, setCheckBoxes] = useState([
    { name: "mon", reason: "" },
    { name: "tue", reason: "" },
    { name: "wed", reason: "" },
    { name: "thu", reason: "" },
    { name: "fri", reason: "" },
  ]);

  return (
    <HStack>
      {checkBoxes.map((checkBox) => (
        <Checkbox
          key={checkBox.name}
          size="sm"
          onClick={(e) => console.log(e.target)}
        />
      ))}
    </HStack>
  );
};

export default CheckBoxes;
