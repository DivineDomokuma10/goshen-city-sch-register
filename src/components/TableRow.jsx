/* eslint-disable react/prop-types */
import { HStack, Td, Tr } from "@chakra-ui/react";
import DayCheckBox from "./DayCheckBox";

const TableRow = ({ studentName }) => {
  return (
    <Tr>
      <Td>{studentName}</Td>
      <Td>
        <HStack>
          <DayCheckBox />
          <DayCheckBox />
          <DayCheckBox />
          <DayCheckBox />
          <DayCheckBox />
          <DayCheckBox />
        </HStack>
      </Td>
      <Td>
        <HStack>
          <DayCheckBox />
          <DayCheckBox />
          <DayCheckBox />
          <DayCheckBox />
          <DayCheckBox />
          <DayCheckBox />
        </HStack>
      </Td>
      <Td>
        <HStack>
          <DayCheckBox />
          <DayCheckBox />
          <DayCheckBox />
          <DayCheckBox />
          <DayCheckBox />
          <DayCheckBox />
        </HStack>
      </Td>
      <Td>
        <HStack>
          <DayCheckBox />
          <DayCheckBox />
          <DayCheckBox />
          <DayCheckBox />
          <DayCheckBox />
          <DayCheckBox />
        </HStack>
      </Td>
    </Tr>
  );
};

export default TableRow;
