import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import Header2 from "../components/Header2";

function DetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchDetail() {
      try {
        const res = await axios.get(`/boards/${id}`);
        console.log("상세:", res.data);
        setPost(res.data);
      } catch (err) {
        console.error("상세 페이지 오류:", err);
      }
    }
    fetchDetail();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  const formattedDate = new Date(post.createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Container>
      <Header2 />
      <Container2>
        <Title>{post.title}</Title>
        <WriterInfo>
          <NameDate>
            <Name>{post.writerName}</Name>
            <DateText> · {formattedDate}</DateText>
          </NameDate>
        
          <RightSide>
            <FollowButton>팔로우</FollowButton>
            <LikeCount>
              <FiHeart />
              <span>{post.heartCount}</span>
            </LikeCount>
          </RightSide>
        </WriterInfo>
        <Thumbnail src={post.thumbnailUrl} alt="thumbnail" />
        <Content>{post.content}</Content>
      </Container2>
    </Container>
  );
}

export default DetailPage;

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const Container2 = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1.8rem;
  text-align: center;

`;

const WriterInfo = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 2rem;
`;

const NameDate = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

const Name = styled.span`
  font-weight: 600;
  color: #212529;
`;

const DateText = styled.span`
  font-size: 1rem;
  color: #868e96;
  margin-left: 0.5rem;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FollowButton = styled.button`
  padding: 0.25rem 0.9rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: #20c997;
  background-color: white;
  border: 2px solid #20c997;
  border-radius: 20px;
  cursor: pointer;
  
  &:hover {
    background-color: #e6fcf5;
  }
`;

const LikeCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.9rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #495057;
  border: 2px solid #ced4da;
  border-radius: 20px;
  background-color: white;
`;

const Thumbnail = styled.img`
  width: 100%;
  margin: 1rem 0 2rem 0;
  border-radius: 8px;
`;

const Content = styled.p`
  font-size: 1.1rem;
  line-height: 1.75;
  color: #343a40;
  white-space: pre-wrap; /* 줄바꿈 유지 */
`;
