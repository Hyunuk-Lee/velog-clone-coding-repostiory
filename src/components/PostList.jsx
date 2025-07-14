// PostList.jsx
import styled from "styled-components";
import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <Grid>
      {posts.map((post) => (
        <PostCard key={post.postID} post={post} />
      ))}
    </Grid>
  );
}

export default PostList;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
