import styled from "styled-components";

const Button = ({ text, onClick, bgColor, textColor, borderColor }) => {
  return (
    <Wrapper onClick={onClick} $bgColor={bgColor} $textColor={textColor} $borderColor={borderColor}>
      {text}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.$textColor || "white"}; // 기본값: white
  background-color: ${(props) => props.$bgColor || props.theme.colors.accent}; // 기본값: theme.colors.accent
  width: 100%;
  height: 40px;
  padding: 20px 0;
  border-radius: 10px;
  border: 1px solid ${(props) => props.$borderColor || props.theme.colors.accent};
  font-size: 15px;
`;

export default Button;
