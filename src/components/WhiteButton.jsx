import styled from "styled-components"

const WhiteButton = ({ text, onClick }) => {
  return (
    <Wrapper onClick={onClick}>{text}</Wrapper>
  )
}

const Wrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.accent};
    background-color: white;
    width: 100%;
    height: 40px;
    padding: 20px 0;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.accent};
    font-size: 15px;
`

export default WhiteButton