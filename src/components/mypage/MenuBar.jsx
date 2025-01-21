import styled from "styled-components";

const MenuBar = () => {
  return (
    <MenuContainer>
      <MenuItem>• 내 질문글</MenuItem>
      <MenuItem>• 내 모집글</MenuItem>
      <MenuItem>• 내 관심글</MenuItem>
      <MenuItem>• 신청 대기</MenuItem>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  margin: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

const MenuItem = styled.button`
  font-size: 18px;
  color: ${(props) => props.theme.colors.darkgrey};
  background-color: white;
  border: none;
  cursor: pointer;

  &:focus{
    color: black;
    font-weight: 600;
  }
`;

export default MenuBar;
