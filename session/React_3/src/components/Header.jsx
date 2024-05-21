import React, { useState } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { useTheme } from "../assets/context/ThemeContext";

const Header = () => {
  const selectedPart = useSelector((state) => state.part.selectedPart);
  const { isDark } = useTheme();

  return (
    <Wrapper isDark={isDark}>
      <div>11기 {selectedPart} 변지혜님 환영합니다.</div>
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.div`
  width: calc(100% - 20px);
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding: 10px;

  background-color: ${(props) => (props.isDark ? "#5e5e5e" : "#adadad")};
  font-family: Pretendard;
  color: white;
`;
