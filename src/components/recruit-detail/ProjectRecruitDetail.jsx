import { useState } from "react";
import styled from "styled-components";
import UserProfile from "../UserProfile";
import Button from "../Button";

const ApplicantsData = [
  {
    id: 1,
    userImage: "src/assets/images/user.png",
    userName: "iboyeon0816",
    role: "백엔드",
  },
  {
    id: 2,
    userImage: "src/assets/images/user.png",
    userName: "jihyeoni",
    role: "프론트엔드",
  },
  {
    id: 3,
    userImage: "src/assets/images/user.png",
    userName: "cheny",
    role: "프론트엔드",
  },
];

const ProjectRecruitDetail = () => {
  const [selectedIndex, setSelectedMenu] = useState(0);

  return (
    <Container>
      <MenuSection>
        {["• 지원자", "• 합격자"].map((menu, index) => (
          <MenuItem
            key={index}
            onClick={() => setSelectedMenu(index)}
            isSelected={selectedIndex === index}
          >
            {menu}
          </MenuItem>
        ))}
      </MenuSection>
      <ApplicantList>
        {ApplicantsData.map((item, index) => (
          <ApplicantItem key={index}>
            <ProfileSection>
              <UserProfile
                userImg={item.userImage}
                description={item.userName}
                textColor="#333"
                fontSize="17px"
                fontWeight="350"
                imgWidth="35"
                imgHeight="35"
              />
            </ProfileSection>
            <RoleText>{item.role} 지원</RoleText>
            <ButtonSection>
              <Button text="추가" />
              <Button text="삭제" variant="invert" />
            </ButtonSection>
          </ApplicantItem>
        ))}
      </ApplicantList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px;
`;

const MenuSection = styled.div`
  display: flex;
  gap: 20px;
`;

const MenuItem = styled.button`
  font-size: 18px;
  color: ${(props) =>
    props.isSelected ? props.theme.colors.black : props.theme.colors.darkgrey};
  font-weight: ${(props) => (props.isSelected ? "600" : "400")};
  background-color: white;
  border: none;
  cursor: pointer;
  outline: none;

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }
`;

const ApplicantList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ApplicantItem = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.lightgrey};
  border-radius: 5px;
  padding: 30px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
`;

const RoleText = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 17px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
`;

const ButtonSection = styled.div`
  display: flex;
  width: 230px;
  gap: 10px;
`;

export default ProjectRecruitDetail;