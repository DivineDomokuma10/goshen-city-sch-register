/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { HStack, Td, Tr } from "@chakra-ui/react";
import DayCheckBox from "./DayCheckBox";

const Student = ({ studentName, checkBoxes }) => {
  return (
    <Tr>
      <Td>{studentName}</Td>
      <Td>
        <HStack>
          {checkBoxes.slice(0, 5).map((checkBox) => (
            <DayCheckBox key={checkBox.id} {...checkBox} />
          ))}
        </HStack>
      </Td>
      <Td>
        <HStack>
          {checkBoxes.slice(5, 10).map((checkBox) => (
            <DayCheckBox key={checkBox.id} {...checkBox} />
          ))}
        </HStack>
      </Td>
      <Td>
        <HStack>
          {checkBoxes.slice(10, 15).map((checkBox) => (
            <DayCheckBox key={checkBox.id} {...checkBox} />
          ))}
        </HStack>
      </Td>
      <Td>
        <HStack>
          {checkBoxes.slice(15, 20).map((checkBox) => (
            <DayCheckBox key={checkBox.id} {...checkBox} />
          ))}
        </HStack>
      </Td>
    </Tr>
  );
};

export default Student;
