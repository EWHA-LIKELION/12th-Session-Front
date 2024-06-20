import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//components
import TopBar from "../components/TopBar";

//images
import book from "../images/book.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [id, setID] = useState();
  const [name, setName] = useState();

  //-------------------------------------------------------------------------
  // 문제 1) userID, userName를 key로 id, name 정보를 localStorage에 저장하고 mypage로 이동
  const saveAccounts = () => {
    window.localStorage.setItem("userID", id);
    window.localStorage.setItem("userName", name);

    navigate("/mypage");
  };
  // ------------------------------------------------------------------------

  return (
    <>
      <Wrapper>
        <TopBar />
        <Container>
          <img src={book} alt="book" />
          <InputWrapper>
            <input
              placeholder="아이디"
              onChange={(e) => setID(e.target.value)}
            ></input>
            <input
              placeholder="닉네임"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <button onClick={saveAccounts}>로그인</button>
            <button
              onClick={() => navigate("/signup")}
              style={{ color: "#809bc3", background: "white" }}
            >
              회원가입
            </button>
          </InputWrapper>
        </Container>
      </Wrapper>
    </>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 10%;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-top: 30px;

  input,
  button {
    height: 40px;
    border-style: none;
    outline: none;
    border-radius: 4px;
  }

  input {
    margin-bottom: 15px;
    padding-left: 7%;

    background: #ffffff;
    box-shadow: 0px 2px 6px 0px #a5a5a533;
  }

  button {
    margin-bottom: 10px;
    background: #809bc3;
    color: white;
    border: 1px solid #809bc3;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
  }
`;
