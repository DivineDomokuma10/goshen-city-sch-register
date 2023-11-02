/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { HStack, Td, Tr } from "@chakra-ui/react";
import DayCheckBox from "./DayCheckBox";
import { useEffect, useState } from "react";

const Student = ({ studentName, checkBoxes, weekSession }) => {
  const [startIndex, setStartIndex] = useState();

  useEffect(
    () => setStartIndex(weekSession === 1 ? 0 : 0 + (weekSession - 1) * 20),
    [weekSession]
  );

  return (
    <Tr>
      <Td>{studentName}</Td>

      <Td>
        <HStack>
          {checkBoxes.slice(startIndex, startIndex + 5).map((checkBox) => (
            <DayCheckBox key={checkBox.id} {...checkBox} />
          ))}
        </HStack>
      </Td>
      <Td>
        <HStack>
          {checkBoxes.slice(startIndex + 5, startIndex + 10).map((checkBox) => (
            <DayCheckBox key={checkBox.id} {...checkBox} />
          ))}
        </HStack>
      </Td>
      <Td>
        <HStack>
          {checkBoxes
            .slice(startIndex + 10, startIndex + 15)
            .map((checkBox) => (
              <DayCheckBox key={checkBox.id} {...checkBox} />
            ))}
        </HStack>
      </Td>
      <Td>
        <HStack>
          {checkBoxes
            .slice(startIndex + 15, startIndex + 20)
            .map((checkBox) => (
              <DayCheckBox key={checkBox.id} {...checkBox} />
            ))}
        </HStack>
      </Td>
    </Tr>
  );
};

export default Student;
