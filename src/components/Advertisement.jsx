import styled from "styled-components"

const Advertisement = () => {
  return (
    <Wrapper>
        <img src="src/assets/images/main-advertisement.png" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 500px;

    img {
        width: 100%;
    }
`

export default Advertisement