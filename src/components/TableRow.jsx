/* eslint-disable react/prop-types */
import { HStack, Td, Tr } from "@chakra-ui/react";
import CheckBoxes from "./CheckBoxes";

const TableRow = ({ studentName }) => {
  return (
    <Tr>
      <Td>{studentName}</Td>
      <Td>
        <HStack>
          <CheckBoxes />
        </HStack>
      </Td>
      <Td>
        <HStack>
          <CheckBoxes />
        </HStack>
      </Td>
      <Td>
        <HStack>
          <CheckBoxes />
        </HStack>
      </Td>
      <Td>
        <HStack>
          <CheckBoxes />
        </HStack>
      </Td>
    </Tr>
  );
};

export default TableRow;
