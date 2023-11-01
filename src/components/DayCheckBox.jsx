/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Checkbox } from "@chakra-ui/react";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const DayCheckBox = ({ id, reason }) => {
  const { handleModal, handleSelectedCheckBox } = useContext(AppContext);

  const handleColorScheme = (reason) => {
    if (reason === "Present") return "green";
    else if (reason === "Absent with notice") return "yellow";
    else if (reason === "Absent without notice") return "red";
    else undefined;
  };

  return (
    <Checkbox
      id={id}
      size="sm"
      isChecked={reason.length > 0 ? true : false}
      onChange={(e) => {
        handleModal();
        handleSelectedCheckBox(id);
      }}
      colorScheme={handleColorScheme(reason)}
    />
  );
};

export default DayCheckBox;
