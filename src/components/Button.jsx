import styled from "styled-components";

const Button = ({ text, onClick, variant = "default", borderRadius, size = "medium" }) => {
  return (
    <Wrapper onClick={onClick} $variant={variant} $borderRadius={borderRadius} $size={size}>
      {text}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.$size === "small" ? "28px" : props.$size === "large" ? "45px" : "35px")};
  border-radius: ${(props) => props.$borderRadius || "10px"};
  font-size: ${(props) => (props.$size === "small" ? "12px" : props.$size === "large" ? "18px" : "15px")};
  cursor: pointer;

  background-color: ${(props) =>
    props.$variant === "invert"
      ? "white"
      : props.theme.colors.accent};

  color: ${(props) =>
    props.$variant === "invert"
      ? props.theme.colors.accent
      : "white"};

  border: 1px solid
    ${(props) =>
      props.$variant === "invert"
      ? props.theme.colors.accent
      : "white"};
`;


export default Button;
