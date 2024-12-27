import styled from "styled-components";
import PostCard from "../components/PostCard";
import ListHeader from "../components/ListHeader";
import PageNavigator from "../components/PageNavigator";

const ProjectList = () => {
  return (
    <>
      <ListHeader />
      <Container>
        <GridWrapper>
          {Array.from({ length: 8 }, (_, index) => (
            <PostCard key={index} />
          ))}
        </GridWrapper>
      </Container>
      <PageNavigator />
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: fit-content;
`;

export default ProjectList;
