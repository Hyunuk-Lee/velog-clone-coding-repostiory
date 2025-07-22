import styled from "styled-components";
import {
  FiBell,
  FiSearch,
} from "react-icons/fi";
import axios from "../api/axiosInstance";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
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

  return (
    <HeaderWrapper>
      <TopBar>
        <Left>
          <Logo><img src="/logo.png" alt="로고" /></Logo>
          <NameLog>{post.writerName}.log</NameLog>
        </Left>
        <Right>
          <IconButton>
            <FiBell size={20} />
          </IconButton>
          <IconButton>
            <FiSearch size={20} />
          </IconButton>
          <LoginButton>로그인</LoginButton>
        </Right>
      </TopBar>
    </HeaderWrapper>
  );
}


const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-top: 12px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
`;


const NameLog = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #212529;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 8px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #495057;
`;

const LoginButton = styled.button`
  padding: 0.4rem 1rem;
  background-color: #212529;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  width: 80px;
  height: 32px;
`;

export default Header;
