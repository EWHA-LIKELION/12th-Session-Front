import React from "react";
import styled from "styled-components";

const Name = ({ name, nth, isFE }) => {
  return (
    <>
      {isFE ? (
        <div>
          {nth}기 프론트엔드 {name}입니다.
        </div>
      ) : null}
    </>
  );
};
export default Name;

const Wrapper = styled.div`
  background-color: black;
  color: ${({ isFE }) => (isFE ? "orange" : "green")};
`;
