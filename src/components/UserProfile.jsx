import styled from "styled-components";

const UserProfile = ({ userImg, description, textColor, fontSize, fontWeight }) => {
  return (
    <DateUserSection>
      <Description $textColor={textColor} $fontSize={fontSize} $fontWeight={fontWeight}>
        <img src={userImg} width={20} height={20} className="user-img" />
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
  gap: 7px;

  .user-img {
    border: 1px solid ${(props) => props.theme.colors.lightgrey};
    border-radius: 50%;
    padding: 1px;
  }
`;

const Description = styled.div`
  font-size: ${(props) => props.$fontSize || "13px"};
  font-weight: ${(props) => props.$fontWeight || "300"};
  color: ${(props) => props.$textColor || props.theme.colors.darkgrey};
`;

export default UserProfile;
