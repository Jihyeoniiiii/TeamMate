import styled from "styled-components";
import SmallHeart from "../assets/icon/SmallHeart.svg";
import SmallSpeechBubble from "../assets/icon/SmallSpeechBubble.svg";

const HeaderSection = ({ status, title, date, type }) => {
    return (
        <TitleWrapper>
            <StatusAndTitle>
                <StatusBox>{status}</StatusBox>
                <h1>{title}</h1>
            </StatusAndTitle>
            <InfoRow>
                <DateText>{date} 작성</DateText>
                <IconText>
                    <img src={SmallHeart} width={12} height={12} alt="Heart" /> 3
                </IconText>
                {type === "커뮤니티" && (
                    <IconText>
                        <img src={SmallSpeechBubble} width={12} height={11} alt="Comment" /> 10
                    </IconText>
                )}
            </InfoRow>
        </TitleWrapper>
    );
};

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  gap: 5px; 
  margin-bottom: 20px;
`;

const StatusAndTitle = styled.div`
  display: flex;
  align-items: center; 
  gap: 10px; 
`;

const StatusBox = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  transform: translateY(-6px); /* 텍스트를 위로 이동 */
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; 
  font-size: 14px;
  color: gray;
`;

const DateText = styled.span`
  font-size: 14px;
  color: gray;
`;

const IconText = styled.span`
  display: flex;
  align-items: center;
  gap: 5px; 
`;

export default HeaderSection;
