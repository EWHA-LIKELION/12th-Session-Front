import React, { useState } from "react";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Name from "./components/Name";

const lionList = [
  { name: "아기사자", nth: "12", isFE: true },
  { name: "아기사자", nth: "12", isFE: false },
  { name: "아기사자", nth: "12", isFE: true },
];

function App() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  return (
    <>
      <Input />
      <hr />
      <button onClick={openModal}>모달 열기</button>
      {modal ? <Modal setModal={setModal} /> : null}
      <Name />
    </>
  );
}

export default App;
