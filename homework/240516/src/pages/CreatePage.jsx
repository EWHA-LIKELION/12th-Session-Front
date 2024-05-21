import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import TopBar from "../components/TopBar";

// props로 받아올 posts, setPosts 구조 분해 할당
const CreatePage = ({ posts, setPosts }) => {
  // 게시글 작성 또는 수정 후 홈 화면으로 이동시키기 위한 네비게이트 함수 선언
  const navigate = useNavigate();
  // URL 파라미터에서 게시글 ID를 추출하기
  const { id } = useParams();
  // 수정 모드 여부 확인 (id가 존재하면 true, 그렇지 않으면 false)
  const isEditMode = Boolean(id);

  // 기존 게시글을 찾음 (수정 모드인 경우!)
  const existingPost = isEditMode
    ? posts.find((post) => post.id === Number(id))
    : null;

  // 새로운 게시글을 저장할 useState (수정 모드인 경우 기존 게시글, 그렇지 않으면 기본값)
  const [newPost, setNewPost] = useState(
    isEditMode
      ? existingPost
      : {
          id: posts.length + 1,
          title: "",
          content: "",
        }
  );

  // 제목과 내용을 구조 분해 할당으로 풀어쓰기
  const { title, content } = newPost;

  // input의 change 이벤트에 바인딩할 함수 선언 (두 input을 모두 관리할 수 있는 통합 함수)
  const onChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  // 제목 입력창에서 엔터를 누르면 내용 입력창으로 포커스가 넘어가는 기능
  const [next, setNext] = useState(false);
  const firstInput = useRef(null);
  const secondInput = useRef(null);

  // 첫 렌더링 시 제목 입력창에 포커스
  useEffect(() => {
    firstInput.current.focus();
  }, []);

  // next가 변경되면, true인지 검사하고 내용 입력창에 포커스
  useEffect(() => {
    if (next) {
      secondInput.current.focus();
      setNext(false);
    }
  }, [next]);

  // 제목 입력창에 submit 이벤트 발생 시 바인딩할 함수
  const onNext = (e) => {
    e.preventDefault();
    if (!title) {
      alert("제목을 입력해주세요.");
    } else {
      setNext(true);
    }
  };

  // 내용 입력창에 submit 이벤트 발생 시 바인딩할 함수 정의
  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("제목을 입력해주세요.");
    } else if (!content) {
      alert("내용을 입력해주세요.");
    } else {
      setNext(false);
      if (isEditMode) {
        // 수정 모드인 경우 기존 게시글을 수정
        const updatedPosts = posts.map((post) =>
          post.id === Number(id) ? newPost : post
        );
        setPosts(updatedPosts);
      } else {
        // 새로운 게시글을 추가
        setPosts([...posts, newPost]);
      }
      // 홈 화면으로 이동
      navigate("/");
    }
  };

  return (
    <Wrapper>
      <TopBar />
      <Container>
        <form onSubmit={onNext}>
          <input
            placeholder="제목"
            name="title"
            value={title}
            onChange={onChange}
            ref={firstInput}
          />
        </form>
        <form onSubmit={onSubmit} className="second-form">
          <input
            placeholder="내용"
            name="content"
            value={content}
            onChange={onChange}
            ref={secondInput}
          />
          <button type="submit">{isEditMode ? "수정" : "제출"}</button>
        </form>
      </Container>
    </Wrapper>
  );
};

export default CreatePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 30%;
  margin-top: 3%;
  input {
    outline: 0;
    padding: 5px;
    font-size: 1.2rem;
  }
  input:focus {
    border: 2px solid lightcoral;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  button {
    margin-top: 10px;
    padding: 10px;
    background-color: lavenderblush;
    border: 0;
    cursor: pointer;
  }
`;
