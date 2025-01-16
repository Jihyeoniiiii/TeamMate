import styled from "styled-components";
import { useState } from "react";
import HeartIcon from "./HeartIcon";
import HeartFill from "../assets/icon/HeartFill.svg";
import { updateFavorite } from "../api/project";
import { processError } from "../utils/errorHandler";

const LikeButton = ({projectId}) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleHeartClick = async (e) => {
    try{
      e.stopPropagation();
      setIsFilled(!isFilled);
      await updateFavorite(projectId);
    } catch (error) {
      processError(error);
    }
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
