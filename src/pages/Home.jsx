import styled from "styled-components";
import MoreList from "../components/MoreList";
import Advertisement from "../components/Advertisement";
import { useNavigate } from "react-router-dom";
import { ProjectData, CommunityData } from "../data/PostData";
import { useEffect, useState } from "react";
import { fetchMainProject } from "../api/project";
import { processError } from "../utils/errorHandler";

const Home = () => {
  const nav = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      try {
        const response = await fetchMainProject();
        setProjects(response.result);
      } catch (error) {
        processError(error);
        setError("메인 프로젝트 데이터를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Wrapper>
      <Advertisement />
      <MainContentBox>
        <MoreList data={ProjectData} type="프로젝트" onClick={() => nav('/project-detail')}/>
        <MoreList data={CommunityData} type="커뮤니티" onClick={() => nav('/community-detail')}/>
      </MainContentBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 80px;
`;

export default Home;
