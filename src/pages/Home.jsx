import styled from "styled-components";
import MoreList from "../components/MoreList";
import Advertisement from "../components/Advertisement";

const ProjectData = {
  state: "모집중",
  title: "대학생을 위한 프로젝트 매칭 서비스",
  description: "활동기간 | 24.11.18 ~ 24.12.24",
  tag: "figma spring react",
};

const CommunityData = {
  state: "미해결",
  title: "스케줄링, dag removed 원인 질문입니다.",
  userImage: "src/assets/images/user.png",
  description: "iboyeon0816",
  tag: "figma spring react",
};

const Home = () => {
  return (
    <Wrapper>
      <Advertisement />
      <MainContentBox>
        <MoreList data={ProjectData} type="프로젝트" />
        <MoreList data={CommunityData} type="커뮤니티" />
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
