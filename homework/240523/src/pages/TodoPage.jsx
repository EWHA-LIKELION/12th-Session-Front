<<<<<<< HEAD
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import {useDispatch} from "react-redux";
import {addTodo} from "../redux/todoSlice";
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
>>>>>>> a553386ee12a527c9e4e99a60e6de0bd6b474ea1
import TodoList from "../components/TodoList";

const TodoPage = () => {
  const navigate = useNavigate();
  
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

<<<<<<< HEAD
=======
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

>>>>>>> a553386ee12a527c9e4e99a60e6de0bd6b474ea1
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
<<<<<<< HEAD
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력하세요..."
=======
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할 일을 입력하세요..."
>>>>>>> a553386ee12a527c9e4e99a60e6de0bd6b474ea1
        />
        <Button type="submit">추가</Button>
      </Form>
      <TodoList />
      <HomeButton onClick={() => navigate("/")}>홈으로</HomeButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  gap: 20px;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 60%;
  gap: 10px;
`;

const Input = styled.input`
  font-size: 1rem;
  font-family: Pretendard;
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  `;

  const Button = styled.button`
    padding: 10px;
    border-radius: 10px;
    font-size: 1rem;
    font-family: Pretendard;
    border: none;
    background-color: #e4e4e4;
    color: black;

    white-space: nowrap;
    cursor: pointer;

    &:hover {
      background-color: #a4a4a4;;
    }
  `;

  const HomeButton = styled(Button)`
    margin-top: 20px;
    padding: 10px 20px;
  `;

export default TodoPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  gap: 20px;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 60%;
  gap: 10px;
`;

const Input = styled.input`
  font-size: 1rem;
  font-family: Pretendard;
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  font-family: Pretendard;
  border: none;
  background-color: #e4e4e4;
  color: black;

  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: #a4a4a4;
  }
`;

const HomeButton = styled(Button)`
  margin-top: 20px;
  padding: 10px 20px;
`;
