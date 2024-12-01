import styled from "styled-components"

const Button = ({ text, onClick }) => {
  return (
    <Wrapper onClick={onClick}>{text}</Wrapper>
  )
}

const Wrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: ${(props) => props.theme.colors.accent};
    width: 100%;
    height: 40px;
    padding: 20px 0;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    font-size: 16px;
`

export default Button