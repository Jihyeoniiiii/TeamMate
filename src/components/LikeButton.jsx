import styled from "styled-components";
import { useState } from "react";
import HeartIcon from "./HeartIcon";
import HeartFill from "../assets/icon/HeartFill.svg";
import { updateFavorite } from "../api/project";

const LikeButton = ({projectId}) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleHeartClick = (e) => {
    e.stopPropagation();
    setIsFilled(!isFilled);
    updateFavorite(projectId);
  };

  return (
    <LikeBox onClick={handleHeartClick}>
      {isFilled ? <img src={HeartFill} /> : <HeartIcon fill="white" />}
    </LikeBox>
  );
};

const LikeBox = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export default LikeButton;
