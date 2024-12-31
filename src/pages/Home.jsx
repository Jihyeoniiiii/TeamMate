import styled from "styled-components";
import MoreList from "../components/MoreList";
import Advertisement from "../components/Advertisement";
import { useNavigate } from "react-router-dom";
import { ProjectData, CommunityData } from "../data/PostData";

const Home = () => {
  const nav = useNavigate();

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
