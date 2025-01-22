import styled from "styled-components";
import User from "../../assets/images/user.png";
import Edit from "../../assets/icon/Edit.svg";
import Button from "../Button";

const Profile = () => {
  return (
    <>
      <ProfileContainer>
        <Title>마이페이지</Title>
        <ContentContainer>
          <ImageSection>
            <img src={User} width={60} height={60} />
            <div>
              iboyeon0816 <img src={Edit} width={15} height={15} />
            </div>
          </ImageSection>
          <MyInformSection>
            <div>[내 정보]</div>
            <div>학교 : 경기대학교 (4학년)</div>
            <div>직무 : 웹프론트엔드</div>
            <div>email : iboyeon0816@naver.com</div>
            <Button text="포트폴리오" variant="invert" size="small" />
          </MyInformSection>
        </ContentContainer>
      </ProfileContainer>
      <SeperateLine />
    </>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
`;

const ContentContainer = styled.div`
  display: flex;
  margin: 30px 200px;
  align-items: center;
  gap: 70px;
`;

const Title = styled.span`
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
`;

const ImageSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  div > img {
    cursor: pointer;
  }
`;

const MyInformSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  Button {
    width: 100px;
    margin-top: 7px;
  }
`;

const SeperateLine = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.grey};
`

export default Profile;
