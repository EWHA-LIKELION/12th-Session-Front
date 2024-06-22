import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import axios from "axios";

// components
// import AdModal from "../components/AdModal";
import TopBar from "../components/TopBar";
import Book from "../components/Book";

const MainPage = () => {
  // 책 목록을 저장할 state
  const [bookList, setBookList] = useState([]);

  //--------------------------------------------------------------------
  // 문제 ) axios를 사용하여 책 목록을 받아오는 API를 호출하는 함수를 작성해주세요.
  // 이때 받아온 데이터는 setBookList를 사용하여 bookList에 저장해주세요.
  const BASE_URL = " https://likelionbook.pythonanywhere.com/";

  const getBookList = () => {
    axios({
      method: "GET",
      url: `${BASE_URL}book/`,
    })
      .then((response) => {
        setBookList(response.data.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  // 컴포넌트가 마운트될 때 getBookList 함수를 호출합니다.
  useEffect(() => {
    getBookList();
  }, []);
  //--------------------------------------------------------------------

  return (
    <>
      <Wrapper>
        <Container>
          <TopBar />
          <BookList>
            {/* 책 목록이 잘 받아와졌다면 아래 주석을 해제해주세요. */}
            {bookList.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </BookList>
        </Container>
      </Wrapper>
    </>
  );
};

export default MainPage;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookList = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
`;
