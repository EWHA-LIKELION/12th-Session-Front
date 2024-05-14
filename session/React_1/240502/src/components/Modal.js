import styled from "styled-components";

const Modal = ({ setModal }) => {
  const style = {
    width: "100px",
    height: "100px",
    display: "flex",

    backgroundColor: "orange",
    marginTop: "30px",
    justifyContent: "center",
    alignItems: "center",
  };

  const deleteModal = () => {
    setModal(false);
  };

  return (
    <>
      <ModalWrapper style={style}>
        <DeleteButton onClick={deleteModal}>모달 삭제</DeleteButton>
      </ModalWrapper>
    </>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  width: "100px";
  height: "100px";
  display: "flex";
`;

const DeleteButton = styled.button`
  background-color: "orange";
  margin-top: "30px";
  justify-content: "center";
  align-items: "center";
`;
