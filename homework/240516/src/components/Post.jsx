import styled from "styled-components";

const Post = ({ post, onClick }) => {
  const { title, content } = post;

  return (
    <PostContainer onClick={onClick}>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </PostContainer>
  );
};

export default Post;

const PostContainer = styled.div`
  width: 90%;
  margin: 20px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: palevioletred;
`;

const Content = styled.div``;
