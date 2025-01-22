import styled from 'styled-components';
import PostCard from '../PostCard';
import { ProjectData } from '../../data/PostData';

const PostList = () => {
  return (
    <GridWrapper>
       {Array.from({ length: 6 }, (_, index) => (
            <PostCard key={index} data={ProjectData} type="프로젝트"/>
          ))}
    </GridWrapper>
  )
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: fit-content;
  margin: 50px 50px 0 50px;
`;

export default PostList