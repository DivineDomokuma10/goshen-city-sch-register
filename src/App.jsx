/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./App.css";
import { useEffect, useState } from "react";
import Student from "./components/Student";
import AppContext from "./context/AppContext";
import ReasonModal from "./components/ReasonModal";
import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import {
  genWeeks,
  genStudentWithCheckBoxes,
} from "../utils/checkBoxesGenerator";
import Students from "../utils/studentsData";

function App() {
  const [studentRegister, setStudentRegister] = useState([]);

  const [weekSession, setWeekSession] = useState(2);

  const [showModal, setShowModal] = useState(false);

  const [selectedCheckBoxId, setSelectedCheckBoxId] = useState("");

  const [currentWeeks, setCurrentWeeks] = useState(() => genWeeks(weekSession));

  const handleModal = () => setShowModal((prev) => !prev);

  const handleSelectedCheckBox = (id) => setSelectedCheckBoxId(id);

  const handleCheckBox = (checkBoxId, studentReason) => {
    const newVal = studentRegister.map((student) => ({
      ...student,
      checkBoxes: student.checkBoxes.map((checkBox) => {
        if (checkBoxId === checkBox.id) {
          return { ...checkBox, reason: studentReason };
        } else {
          return checkBox;
        }
      }),
    }));

    setStudentRegister(newVal);
  };

  useEffect(() => setStudentRegister(genStudentWithCheckBoxes(Students)), []);

  return (
    <AppContext.Provider
      value={{
        currentWeeks,
        selectedCheckBoxId,
        handleModal,
        handleCheckBox,
        handleSelectedCheckBox,
      }}
    >
      <main style={{ width: "100vw", height: "100vh", background: "#fff" }}>
        {showModal && <ReasonModal />}
        <TableContainer>
          <Table variant="striped">
            <Thead>
              <Tr>
                <Td fontWeight="bold" padding="0">
                  STUDENT NAME
                </Td>
                {currentWeeks.map((currentWeek) => (
                  <Td key={currentWeek} fontWeight="bold">
                    WEEK {currentWeek}
                  </Td>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {studentRegister.map((student) => (
                <Student
                  key={student.id}
                  studentName={student.name}
                  checkBoxes={student.checkBoxes}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </main>
    </AppContext.Provider>
  );
}

export default App;
