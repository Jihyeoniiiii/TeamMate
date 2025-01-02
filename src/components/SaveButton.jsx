import styled from "styled-components";
import HeartIcon from "./HeartIcon";
import { useState } from "react";

const SaveButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Container onClick={handleClick} isClicked={isClicked}>
      {isClicked ? (
        <HeartIcon fill="white" width="18" height="16" />
      ) : (
        <HeartIcon fill="#423FE5" width="18" height="16" />
      )}
      <span>찜</span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 13px;
  border: 1px solid ${(props) => props.theme.colors.accent};
  background-color: ${(props) =>
    props.isClicked ? props.theme.colors.accent : "transparent"};
  color: ${(props) => (props.isClicked ? "white" : props.theme.colors.accent)};
  border-radius: 5px;
  gap: 7px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export default SaveButton;
