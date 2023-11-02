/* eslint-disable no-unused-vars */
// import { Modal } from "@chakra-ui/react";

import { useContext, useState } from "react";
import AppContext from "../context/AppContext";

const ReasonModal = () => {
  const { handleModal, handleCheckBox, selectedCheckBoxId } =
    useContext(AppContext);

  const [possibleReasons, setPossibleReasons] = useState([
    "Present",
    "Absent with notice",
    "Absent without notice",
  ]);

  // console.log(selectedCheckBoxId);

  return (
    <section className="modalCon">
      <div className="modal">
        <div className="modalClose">
          <span onClick={handleModal}>close</span>
        </div>

        <div className="modalContent">
          {possibleReasons.map((reason) => (
            <span
              key={reason}
              onClick={() => {
                handleModal();
                handleCheckBox(selectedCheckBoxId, reason);
              }}
            >
              {reason}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonModal;
