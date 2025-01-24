import styled from "styled-components";

const UserProfile = ({ userImg, description, textColor, fontSize, fontWeight, imgWidth = 20, imgHeight = 20, }) => {
  return (
    <DateUserSection>
      <Description $textColor={textColor} $fontSize={fontSize} $fontWeight={fontWeight}>
      <UserImage
        src={userImg}
        $imgWidth={imgWidth}
        $imgHeight={imgHeight}
        alt="User Profile"
      />
      </Description>
      <Description $textColor={textColor} $fontSize={fontSize} $fontWeight={fontWeight}>
        {description}
      </Description>
    </DateUserSection>
  );
};

const DateUserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .user-img {
    border: 1px solid ${(props) => props.theme.colors.lightgrey};
    border-radius: 50%;
    padding: 1px;
  }
`;

const UserImage = styled.img`
  width: ${(props) => props.$imgWidth}px;
  height: ${(props) => props.$imgHeight}px;
  border: 1px solid ${(props) => props.theme.colors.lightgrey};
  border-radius: 50%;
  padding: 1px;
`;

const Description = styled.div`
  font-size: ${(props) => props.$fontSize || "13px"};
  font-weight: ${(props) => props.$fontWeight || "300"};
  color: ${(props) => props.$textColor || props.theme.colors.darkgrey};
`;

export default UserProfile;
