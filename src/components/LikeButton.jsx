import styled from "styled-components";
import { useState } from "react";
import Heart from "../assets/icon/Heart.svg";
import HeartFill from "../assets/icon/HeartFill.svg";

const LikeButton = () => {
  const [isFilled, setIsFilled] = useState(false);

  const handleHeartClick = (e) => {
    e.stopPropagation();
    setIsFilled(!isFilled);
  };

  return (
    <LikeBox onClick={handleHeartClick}>
      <img
        src={isFilled ? HeartFill : Heart}
        width={25}
        height={25}
        alt="heart icon"
      />
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
