import styled from "styled-components";
import PostCard from "../components/PostCard";
import ListHeader from "../components/ListHeader";
import PageNavigator from "../components/PageNavigator";
import { useNavigate } from "react-router-dom";
import { ProjectData } from "../data/PostData";

const ProjectList = () => {
  const nav = useNavigate();

  return (
    <>
      <ListHeader type="프로젝트" />
      <Container>
        <GridWrapper>
          {Array.from({ length: 8 }, (_, index) => (
            <PostCard key={index} data={ProjectData} type="프로젝트" onClick={() => nav('/project-detail')}/>
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
