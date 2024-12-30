import styled from "styled-components";

const HeaderSection = ({ status, title, date }) => {
    return (
        <TitleWrapper>
            <StatusAndTitle>
                <StatusBox>{status}</StatusBox>
                <h1>{title}</h1>
            </StatusAndTitle>
            <DateText>{date} 작성</DateText>
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


const DateText = styled.p`
  font-size: 14px;
  color: gray;
  margin: 0;
`;

export default HeaderSection;
