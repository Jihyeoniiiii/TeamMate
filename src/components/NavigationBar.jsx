import styled from "styled-components"
import Button from "./Button"
import mainLogo from "../assets/images/main-logo.png"

const NavigationBar = ({ onClick }) => {
  return (
    <MenuContainer>
        <LeftSection><img src={mainLogo} width={150} height={80}/></LeftSection>
        <MiddleSection>
            <button>프로젝트</button>
            <button>커뮤니티</button>
            <button>마이페이지</button>
        </MiddleSection>
        <RightSection>
            <Button text="로그인" onClick={onClick}></Button>
        </RightSection>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 0 80px;
`

const LeftSection = styled.div`

`

const MiddleSection = styled.div`
    button {
        border: none;
        background-color: white;
        padding: 20px;
        font-size: 16px;
    }
`

const RightSection = styled.div`
    Button {
        padding: 10px 25px;
    }
`

export default NavigationBar