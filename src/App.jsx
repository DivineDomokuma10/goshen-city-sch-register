/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { useEffect, useState } from "react";
import Student from "./components/Student";
import AppContext from "./context/AppContext";
import ReasonModal from "./components/ReasonModal";
import {
  Button,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import {
  genWeeks,
  genStudentWithCheckBoxes,
} from "./utils/checkBoxesGenerator";
import Students from "./utils/studentsData";

function App() {
  const [studentRegister, setStudentRegister] = useState([]);

  const [weekSession, setWeekSession] = useState(1);

  const [showModal, setShowModal] = useState(false);

  const [selectedCheckBoxId, setSelectedCheckBoxId] = useState("");

  const [currentWeeks, setCurrentWeeks] = useState([]);

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

  const handleForward = () =>
    setWeekSession((prev) => (prev < 3 ? prev + 1 : prev));

  const handleBackward = () =>
    setWeekSession((prev) => (prev !== 1 ? prev - 1 : prev));

  useEffect(() => setStudentRegister(genStudentWithCheckBoxes(Students)), []);

  useEffect(() => {
    setCurrentWeeks(genWeeks(weekSession));
    console.log(studentRegister);
  }, [weekSession]);

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
      <VStack spacing="16">
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
                  weekSession={weekSession}
                  studentName={student.name}
                  checkBoxes={student.checkBoxes}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <HStack spacing={"60"}>
          <Button
            size="sm"
            colorScheme={weekSession !== 1 ? "purple" : undefined}
            onClick={handleBackward}
          >
            Back
          </Button>

          <Button
            size="sm"
            colorScheme={weekSession !== 3 ? "purple" : undefined}
            onClick={handleForward}
          >
            Next
          </Button>
        </HStack>
      </VStack>
    </AppContext.Provider>
  );
}

export default App;
