/* eslint-disable no-unused-vars */
import "./App.css";
import { useState } from "react";
import TableRow from "./components/TableRow";
import AppContext from "./context/AppContext";
import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import ReasonModal from "./components/ReasonModal";

function App() {
  const [studentReason, setStudentReason] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleCheckBox = (reason) => setStudentReason(reason);

  const handleModal = () => setShowModal((prev) => !prev);

  return (
    <AppContext.Provider
      value={{ studentReason, handleModal, handleCheckBox, setStudentReason }}
    >
      {showModal ? <ReasonModal /> : ""}
      <TableContainer>
        <Table variant="striped">
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
            <TableRow studentName={"James Daniel"} />
            <TableRow studentName={"Daniel emeka"} />
            <TableRow studentName={"Daniel James"} />
            <TableRow studentName={"emeka James"} />
            <TableRow studentName={"James Daniel"} />
            <TableRow studentName={"Daniel James"} />
            <TableRow studentName={"Daniel James"} />
          </Tbody>
        </Table>
      </TableContainer>
    </AppContext.Provider>
  );
}

export default App;
