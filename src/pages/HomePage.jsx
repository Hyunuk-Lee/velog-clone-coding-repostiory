import styled from "styled-components";
import { dummyData } from "../data/dummy_data";
import Header from "../components/Header";
import PostList from "../components/PostList";

function HomePage() {
  return (
    <Container>
      <Header />
      <PostList posts={dummyData} />
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
