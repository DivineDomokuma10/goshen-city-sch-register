import "./App.css";
import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import TableRow from "./components/TableRow";

function App() {
  return (
    <TableContainer>
      <Table variant={"simple"}>
        <Thead>
          <Tr>
            <Td fontWeight="bold" padding="0">
              STUDENT NAME
            </Td>
            <Td fontWeight="bold">WEEK 1</Td>
            <Td fontWeight="bold">WEEK 2</Td>
            <Td fontWeight="bold">WEEK 3</Td>
            <Td fontWeight="bold">WEEK 4</Td>
          </Tr>
        </Thead>
        <Tbody>
          <TableRow studentName={"John emeka"} />
          <TableRow studentName={"Daniel James"} />
          <TableRow studentName={"Daniel James"} />
          <TableRow studentName={"Daniel James"} />
          <TableRow studentName={"Daniel James"} />
          <TableRow studentName={"Daniel James"} />
          <TableRow studentName={"Daniel James"} />
          <TableRow studentName={"Daniel James"} />
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default App;
