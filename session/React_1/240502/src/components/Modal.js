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

<ModalWrapper isSelected={isSelected}>
  const ModalWrapper = styled.div` color:{" "}
  {({ isSelected }) => (isSelected ? "#ffffff" : "#333333")}; background-color:{" "}
  {({ isSelected }) => (isSelected ? "#81a7d3" : "#d8e4ec")};`; const
  DeleteButton = styled.button` display: inline-block; color: purple;
  background-color: pink; font-size: 1em; font-weight: bolder; margin: 1em;
  padding: 1em; border: none; border-radius: 3px; `;
</ModalWrapper>;
