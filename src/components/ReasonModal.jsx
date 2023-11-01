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
    <section style={styles.modalCon}>
      <div style={styles.modal}>
        <div style={styles.modalClose}>
          <span onClick={handleModal}>close</span>
        </div>

        <div style={styles.modalContent}>
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

const styles = {
  modalCon: {
    top: "0",
    left: "0",
    zIndex: "50",
    width: "100vw",
    height: "100vh",
    display: "flex",
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  modal: {
    display: "flex",
    borderRadius: "5px",
    flexDirection: "column",
    backgroundColor: "white",
  },
  modalClose: {
    padding: "1px 10px",
    display: "flex",
    justifyContent: "flex-end",
  },
  modalContent: {
    display: "flex",
    padding: "20px",
    flexDirection: "column",
  },
};

export default ReasonModal;
