import styled from "styled-components";

const MoreListTitle = ({ type }) => {
  return (
    <TitleContainer>
      {type === "프로젝트" ? (
        <>
          <SemiTitle>가장 핫한 프로젝트를 한 눈에!</SemiTitle>
          <MainTitle>프로젝트 모집 공고</MainTitle>
        </>
      ) : (
        <>
          <SemiTitle>함께 고민을 나누고 성장해요!</SemiTitle>
          <MainTitle>성장 커뮤니티</MainTitle>
        </>
      )}
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

const SemiTitle = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
`;

const MainTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

export default MoreListTitle;
