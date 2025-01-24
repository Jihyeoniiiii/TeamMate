import { useState } from "react";
import styled from "styled-components";

const MenuBar = () => {
  const [selectedIndex, setSelectedMenu] = useState(0);

  return (
    <MenuContainer>
      {["• 내 질문글", "• 내 모집글", "• 내 관심글", "• 신청 대기"].map((menu, index) => (
        <MenuItem
        key={index}
        onClick={() => setSelectedMenu(index)}
        isSelected={selectedIndex === index}
      >
        {menu}
      </MenuItem>
    ))}
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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


export default MenuBar;
