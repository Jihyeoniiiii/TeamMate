import styled from "styled-components";
import Button from "./Button";

const SignUp = () => {
  return (
    <>
      <Input type="email" placeholder="아이디" />
      <Input type="password" placeholder="비밀번호" />
      <Input type="password" placeholder="비밀번호 확인" />
      <ButtonWrapper>
        <Button text="회원가입"></Button>
      </ButtonWrapper>
    </>
  );
};

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.lightgrey};
  padding: 20px;
  margin: 8px 0;
  font-size: 16px;
`;

const ButtonWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
`;

export default SignUp;
