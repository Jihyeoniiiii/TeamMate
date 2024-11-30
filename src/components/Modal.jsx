import styled from "styled-components";
import Login from "./Login";
import SignUp from "./SignUp";
import CloseIcon from "../assets/icon/Close.svg";

const Modal = ({ type, setType, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <img src={CloseIcon} alt="Close" width={15} height={15} />
        </CloseButton>
        <TopSection>TEAMMATE</TopSection>
        {type === "login" ? <Login /> : <SignUp />}
        <SwitchTypeButton
          onClick={() => setType(type === "login" ? "signup" : "login")}
        >
          {type === "login" ? "회원가입" : "로그인"}
        </SwitchTypeButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  width: 370px;
  height: 380px;
  padding: 0px 30px;
  z-index: 10;
  border-radius: 10px;
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: end;
  background: none;
  border: none;
  cursor: pointer;
`;

const SwitchTypeButton = styled.button`
  background: none;
  border: none;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 15px;
`;

export default Modal;
