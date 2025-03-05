import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteProject } from "../store/resumeSlice";
import Button from "../components/Button";
import DefaultProfileImage from "../assets/icon/defaultImg.png";

const Resumes = () => {
  const resumes = useSelector((state) => state.resume); // Redux 상태 가져오기
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <Title>포트폴리오</Title>
      <ResumeList>
        <ResumeCard onClick={() => navigate("/mypage/resumes/new")}>
          <AddPortfolio>+ 새로운 포트폴리오 추가</AddPortfolio>
        </ResumeCard>
        
        <ResumeCard onClick={() => navigate(`/resumes/detail`)}>
          <ProfileImage src={resumes.image || DefaultProfileImage} alt="프로필 이미지" />
          <ResumeContent>
            <h3>{resumes.name || "이름 없음"}</h3>
            <p>{resumes.position || "직무 없음"}</p>
            <DateWrapper>
              <p>작성: {resumes.createdAt ? new Date(resumes.createdAt).toLocaleDateString() : "날짜 없음"}</p>
              <p>업데이트: {resumes.updatedAt ? new Date(resumes.updatedAt).toLocaleDateString() : "업데이트 없음"}</p>
            </DateWrapper>
            <ButtonWrapper>
              <Button
                text="수정"
                variant="invert"
                onClick={(e) => {
                  navigate(`/resumes/modify`)
                  e.stopPropagation(); // 부모 클릭 이벤트 방지
                  
                }}
              />
              <Button
                text="삭제"
                variant="invert"
                onClick={(e) => {
                  e.stopPropagation(); // 부모 클릭 이벤트 방지
                  dispatch(deleteProject());
                }}
              />
            </ButtonWrapper>
          </ResumeContent>
        </ResumeCard>
        
      </ResumeList>
      
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

const ResumeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ResumeCard = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: white;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
`;

const ResumeContent = styled.div`
  flex: 1;
  h3 {
    font-size: 18px;
    margin-bottom: 8px;
  }
  p {
    font-size: 14px;
    color: gray;
    margin-bottom: 4px;
  }
`;

const DateWrapper = styled.div`
  margin-top: 10px;
  p {
    font-size: 12px;
    color: gray;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 10px;
  width: 150px;
`;

const AddPortfolio = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.colors.darkgrey};
  margin: auto;
`;

export default Resumes;