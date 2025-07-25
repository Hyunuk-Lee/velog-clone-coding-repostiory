import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function PostCard({ post }) {
  const {
    id,
    title,
    content,
    thumbnailUrl,
    createdAt,
    commentCount,
    writerName,
    writerProfileUrl,
    heartCount,
  } = post;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/boards/${id}`);
  };

  const formattedDate = new Date(createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card onClick={handleClick}>
      <Thumbnail src={thumbnailUrl} alt="post thumbnail" />
      <PostBody>
        <Title>{title}</Title>
        <Preview>{content}</Preview>
        <Meta>
          {formattedDate} · {commentCount}개의 댓글
        </Meta>
      </PostBody>
      <PostFooter>
        <WriterInfo>
          <Avatar src={writerProfileUrl} alt="profile" />
          <Username>by <b>{writerName}</b></Username>
        </WriterInfo>
        <Like>
          <FiHeart />
          <span>{heartCount}</span>
        </Like>
      </PostFooter>
    </Card>
  );
}

export default PostCard;

const Card = styled.div`
  background-color: white;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  min-width: 280px;
  max-width: 350px;
  border: 1px solid #dee2e6;
  height: 100%; 
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const PostBody = styled.div`
  padding: 1rem;
  flex: 1;
`;

const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Preview = styled.p`
  font-size: 0.9rem;
  color: #495057;
  line-height: 1.4;
  max-height: 2.8em;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Meta = styled.div`
  margin-top: 0.75rem;
  font-size: 0.8rem;
  color: #868e96;
`;

const PostFooter = styled.div`
  padding: 0.75rem 1rem;
  border-top: 1px solid #f1f3f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WriterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const Username = styled.span`
  font-size: 0.8rem;
  color: #495057;
`;

const Like = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.85rem;
  color: #495057;
`;

