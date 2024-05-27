import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import TopBar from "../components/TopBar";
import Post from "../components/Post";

// props로 받아올 posts 구조 분해 할당
const HomePage = ({ posts }) => {
  const navigate = useNavigate();

  const handlePostClick = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <Wrapper>
      <TopBar />
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onClick={() => handlePostClick(post.id)}
        />
      ))}
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
