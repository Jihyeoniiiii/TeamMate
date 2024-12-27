import styled from "styled-components";

const mockProjectData = {
    id: 1,
    title: "AI 기반 프로젝트 협업 플랫폼",
    startDate: "2024-06-01",
    endDate: "2024-12-31",
    createdAt: "2024-05-20",
    description:
        "프로젝트 시작 동기\n\n대학생들은 실무 경험 부족으로 취업에 어려움을 겪고 있습니다. 이를 해결하기 위해, 대학생들이 개발 프로젝트에 참여하고 포트폴리오를 강화할 수 있는 프로젝트 매칭 플랫폼을 개발하고자 합니다.\n\n이 플랫폼은 학생들에게 실전 경험을 제공하고, 기술 역량을 키울 수 있는 기회를 제공합니다.\n\n프로젝트 개요\n목표: 대학생들이 관심 있는 개발 프로젝트에 참여할 수 있는 매칭 플랫폼 개발\n\n기능: 프로젝트 검색, 참여 신청, 팀원 간 협업, 진행 상황 관리, 포트폴리오 관리\n\n모임 진행 방식\n초기 기획 회의: 프로젝트 비전과 역할 분담\n정기 회의: 매주 1회 온라인 회의 (진행 상황 체크)\n협업 툴: Slack, Notion, GitHub 활용 (소통 및 자료 공유)\n스프린트: 2주 단위로 개발 목표 설정",
    image: "src/assets/images/default-image.jpg",
    profile: {
        name: "곽채연",
        role: "PM",
    },
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
        profile,
        deadline,
        platform_dto_list,
        platform_id_list,
        technology_name_list,
    } = mockProjectData;

    return (
        <>
            <Container>
                <ImageSection>
                    <ProjectImage src={image} alt="Project Banner" />
                </ImageSection>

                <ContentWrapper>
                    <MainContent>
                        <TitleWrapper>
                            <StatusBox>모집중</StatusBox>
                            <h1>{title}</h1>
                        </TitleWrapper>
                        <p>{createdAt} 작성</p>
                        <Description>{description}</Description>
                    </MainContent>

                    <SideContent>
                        <SingleBox>
                            <Section>
                                <h3>모집자</h3>
                                <p>{profile.name} ({profile.role})</p>
                            </Section>
                            <Divider />

                            <Section>
                                <h3>프로젝트 정보</h3>
                                <p>모집 기간: {deadline}</p>
                                <p>프로젝트 기간: {startDate} ~ {endDate}</p>
                            </Section>
                            <Divider />

                            <Section>
                                <h3>모집 현황</h3>
                                {platform_dto_list.map((item, index) => (
                                    <RecruitItem key={index}>
                                        <span>
                                            {item.role} {item.current}/{item.total}
                                        </span>
                                        {item.current < item.total ? (
                                            <ButtonWrapper>
                                                <MiniButton>지원</MiniButton>
                                            </ButtonWrapper>
                                        ) : (
                                            <ButtonWrapper>
                                                <MiniButton bgColor="#CCC" borderColor="#CCC">마감</MiniButton>
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
                                <TechWrapper>
                                    {technology_name_list.map((tech, index) => (
                                        <TechItem key={index}>{tech}</TechItem>
                                    ))}
                                </TechWrapper>
                            </Section>
                        </SingleBox>
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

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StatusBox = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 14px;
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

const SingleBox = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 15px;

  h3 {
    margin-bottom: 10px;
    font-size: 16px;
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
`;
const MiniButton = styled.button`
  padding: 3px 10px;
  font-size: 12px;
  border-radius: 5px;
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.accent};
  border: 1px solid ${({ borderColor, theme }) => borderColor || theme.colors.accent};
  color: white;
  cursor: pointer;
  min-width: 50px;
  height: 25px;
  text-align: center;
  display: inline-block;
  line-height: 20px;
`;


const TechWrapper = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

const TechItem = styled.div`
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 5px;
  font-size: 12px;
  color: #333;
`;

export default ProjectDetailPage;
