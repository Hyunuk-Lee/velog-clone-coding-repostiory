import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import { FiShare2 } from "react-icons/fi";
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
      <DetailLayout>
        <SideButtons>
          <CircleButton>
            <FiHeart size={20} />
          </CircleButton>
          <LikeNumber>{post.heartCount}</LikeNumber>
          <CircleButton>
            <ShareIcon>
              <FiShare2 size={20} />
            </ShareIcon>
          </CircleButton>
        </SideButtons>

        <ContentArea>
          <Title>{post.title}</Title>

          <WriterInfo>
            <NameDate>
              <Name>{post.writerName}</Name>
              <DateText> · {formattedDate}</DateText>
            </NameDate>
            <RightSide>
              <FollowButton>팔로우</FollowButton>
            </RightSide>
          </WriterInfo>

          <TagList>
            <Tag>API 디자인</Tag>
            <Tag>API개발</Tag>
            <Tag>DevTools</Tag>
            <Tag>개발도구</Tag>
          </TagList>

          <Thumbnail src={post.thumbnailUrl} alt="thumbnail" />
          <Content>{post.content}</Content>
        </ContentArea>
      </DetailLayout>
    </Container>
  );
}

export default DetailPage;

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const DetailLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 1024px;
  margin: 0 auto;
`;

const SideButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.75rem;
  border-radius: 36px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  position: absolute;
  top: 330px;
  left: 200px;
  width: 50px;
  @media (max-width: 1250px) {
    display: none;
  }
`;

const CircleButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid #dee2e6;
  background-color: ${({ active }) => (active ? "#495057" : "white")};
  color: ${({ active }) => (active ? "white" : "#495057")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 0.3rem;

  &:hover {
    background-color: ${({ active }) => (active ? "#343a40" : "#f1f3f5")};
  }
`;

const LikeNumber = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #495057;
  margin-bottom: 1rem;
`;

const ShareIcon = styled.span`
  font-size: 1rem;
`;

const ContentArea = styled.div`
  max-width: 720px;
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

const TagList = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  font-size: 0.85rem;
  background-color: #f1f3f5;
  color: #20c997;
  font-weight: 500;
  padding: 0.35rem 0.8rem;
  border-radius: 20px;
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
  white-space: pre-wrap;
`;
