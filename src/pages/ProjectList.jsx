import styled from "styled-components";
import PostCard from "../components/PostCard";
import ListHeader from "../components/ListHeader";
import PageNavigator from "../components/PageNavigator";
import { useNavigate } from "react-router-dom";
import { ProjectData } from "../data/PostData";
import { useEffect, useState } from "react";
import { fetchProject } from "../api/project";
import { processError } from "../utils/errorHandler";

const ProjectList = () => {
  const nav = useNavigate();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      try {
        const response = await fetchProject();
        setProjects(response.result);
      } catch (error) {
        processError(error);
        setError("프로젝트 데이터를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;

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
