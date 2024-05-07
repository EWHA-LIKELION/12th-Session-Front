import styled from "styled-components";

const Modal = ({ setModal }) => {
  const deleteModal = () => {
    setModal(false);
  };
  return (
    <>
      <ModalWrapper>
        <DeleteButton onClick={deleteModal}>모달 삭제</DeleteButton>
      </ModalWrapper>
    </>
  );
};
export default Modal;

const ModalWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  background-color: orange;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

const DeleteButton = styled.button`
  background-color: red;
  width: 20px;
`;
