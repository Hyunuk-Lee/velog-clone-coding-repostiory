import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import PostList from "../components/PostList";
import Header from "../components/Header";
import styled from "styled-components";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await axios.get("/boards");
        console.log("posts:", res.data);
        setPosts(res.data);
      } catch (err) {
        console.error("게시글 불러오기 실패:", err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <Container>
      <Header />
      <PostList posts={posts} />
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
