import { useContext, useState } from "react";
import { Checkbox } from "@chakra-ui/react";
import AppContext from "../context/AppContext";

const DayCheckBox = () => {
  const { handleModal, studentReason } = useContext(AppContext);

  let checkBoxId = Math.random().toString();

  const [applyColorScheme, setApplyColorScheme] = useState(false);

  const handleColorScheme = (reason) => {
    if (reason === "Present") return "green";
    else if (reason === "Absent with notice") return "yellow";
    else if (reason === "Absent without notice") return "red";
  };

  return (
    <Checkbox
      size="sm"
      id={checkBoxId}
      onChange={(e) => {
        handleModal();
        console.log(e.currentTarget.id);
        if (e.currentTarget.id === checkBoxId) setApplyColorScheme(true);
      }}
      colorScheme={applyColorScheme && handleColorScheme(studentReason)}
    />
  );
};

export default DayCheckBox;
