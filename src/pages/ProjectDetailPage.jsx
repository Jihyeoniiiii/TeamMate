import styled from "styled-components";
import HeaderSection from "../components/HeaderSection"
import UserProfile from "../components/UserProfile"
import InfoSideBox from "../components/InfoSideBox"
import TagList from "../components/TagList"
import LikeButton from "../components/LikeButton"
import Button from "../components/Button";
import ProjectRecruitDetail from "../components/recruit-detail/ProjectRecruitDetail";
import { useEffect, useState } from "react";
import { fetchDetailProject } from "../api/project";
import { processError } from "../utils/errorHandler";
import { useParams } from "react-router-dom";

const mockProjectData = {
  id: 1,
  title: "대학생을 위한 프로젝트 매칭 서비스",
  userImage: "/src/assets/images/user.png",
  userName: "iboyeon0816",
  startDate: "2024-06-01",
  endDate: "2024-12-31",
  createdAt: "2024-05-20",
  description:
    "프로젝트 시작 동기\n\n대학생들은 실무 경험 부족으로 취업에 어려움을 겪고 있습니다. 이를 해결하기 위해, 대학생들이 개발 프로젝트에 참여하고 포트폴리오를 강화할 수 있는 프로젝트 매칭 플랫폼을 개발하고자 합니다.\n\n이 플랫폼은 학생들에게 실전 경험을 제공하고, 기술 역량을 키울 수 있는 기회를 제공합니다.\n\n프로젝트 개요\n목표: 대학생들이 관심 있는 개발 프로젝트에 참여할 수 있는 매칭 플랫폼 개발\n\n기능: 프로젝트 검색, 참여 신청, 팀원 간 협업, 진행 상황 관리, 포트폴리오 관리\n\n모임 진행 방식\n초기 기획 회의: 프로젝트 비전과 역할 분담\n정기 회의: 매주 1회 온라인 회의 (진행 상황 체크)\n협업 툴: Slack, Notion, GitHub 활용 (소통 및 자료 공유)\n스프린트: 2주 단위로 개발 목표 설정",
  image: "/src/assets/images/default-image.jpg",
  deadline: "2024-06-30",
  platform_dto_list: [
    { role: "백엔드", current: 0, total: 1 },
    { role: "프론트엔드", current: 1, total: 1 },
    { role: "디자인", current: 0, total: 1 },
  ],
  platform_id_list: [
    "반응형 웹(PC/모바일)",
  ],
  technology_name_list: ["React", "Node.js", "TensorFlow"],
};

const ProjectDetailPage = () => {
  const {
    title,
    startDate,
    endDate,
    description,
    createdAt,
    image,
    userImage,
    userName,
    deadline,
    platform_dto_list,
    platform_id_list,
    technology_name_list,
  } = mockProjectData;

  const [isRecruitDetail, setIsRecruitDetail] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { projectId } = useParams();

  useEffect(() => {
    if (!projectId) return;

    const getDetailProject = async () => {
      setLoading(true);
      try {
        const response = await fetchDetailProject(projectId);
        setProjects(response.result);
      } catch (error) {
        processError(error);
        setError("프로젝트 상세 데이터를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    getDetailProject();
  }, [projectId]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Container>
        <ImageSection>
          <ProjectImage src={image} alt="Project Banner" />
          <LikeButton />
        </ImageSection>
        <ContentWrapper>
          <MainContent>
            <HeaderSection status="모집중" title={title} date={createdAt} />
            { isRecruitDetail ? <ProjectRecruitDetail /> :
              <Description>{description}</Description>
            }
          </MainContent>

          <SideContent>
            <InfoSideBox>
              <Section>
                <h3>모집자</h3>
                <UserProfile
                  userImg={userImage}
                  description={userName}
                  textColor="#333"
                  fontSize="16px"
                  fontWeight="350"
                />

              </Section>
              <Divider />
              <Section>
                <h3>프로젝트 정보</h3>
                <p>모집 기간: {deadline}</p>
                <p>프로젝트 기간: {startDate} ~ {endDate}</p>
              </Section>
              <Divider />
              <Section>
                <h3 onClick={() => setIsRecruitDetail(true)}>모집 현황</h3>
                {platform_dto_list.map((item, index) => (
                  <RecruitItem key={index}>
                    <span>
                      {item.role} {item.current}/{item.total}
                    </span>
                    {item.current < item.total ? (
                      <ButtonWrapper>
                        <Button text="지원" size="small" />
                      </ButtonWrapper>
                    ) : (
                      <ButtonWrapper>
                        <Button text="마감" size="small" variant="invert" />
                      </ButtonWrapper>
                    )}
                  </RecruitItem>
                ))}
              </Section>
              <Divider />

              <Section>
                <h3>출시 플랫폼</h3>
                <p>{platform_id_list.join(", ")}</p>
              </Section>
              <Divider />

              <Section>
                <h3>기술/언어</h3>
                <TagList Tags={technology_name_list} />
              </Section>
            </InfoSideBox>
          </SideContent>
        </ContentWrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
`;

const ImageSection = styled.div`
  width: 100%;
  position: relative;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const MainContent = styled.div`
  flex: 3;
  padding: 40px;

  h1 {
    font-size: 28px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  white-space: pre-line;
`;

const SideContent = styled.div`
  flex: 1;
  padding: 40px;
`;

const Section = styled.div`
  margin-bottom: 15px;

  h3 {
    margin-bottom: 10px;
    font-size: 16px;
    cursor: pointer;
  }

  p {
    margin: 0;
    font-size: 14px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #ddd;
  margin: 10px 0;
`;

const RecruitItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
`;

const MiniButton = styled.button`
  padding: 3px 10px;
  border-radius: 5px;
  background-color: ${({ $bgColor, theme }) => $bgColor || theme.colors.accent};
  border: 1px solid ${({ $borderColor, theme }) => $borderColor || theme.colors.accent};
  color: white;
  cursor: pointer;
  min-width: 50px;
  height: 25px;
  text-align: center;
  display: inline-block;
  line-height: 20px;
`;

export default ProjectDetailPage;
