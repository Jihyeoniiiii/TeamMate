import styled from "styled-components";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../store/authSlice";

const Login = () => {
  const { email, password } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleIdChange = (e) => {
    dispatch(setEmail(e.target.value));
  }

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  }

  const handleSubmit = () => {
    console.log(email, password); // 아이디, 패스워드 백엔드로 보내줌
  }

  return (
    <>
      <Input type="email" value={email} onChange={handleIdChange} placeholder="아이디" />
      <Input type="password" value={password} onChange={handlePasswordChange} placeholder="비밀번호" />
      <ButtonWrapper>
        <Button text="로그인" onClick={handleSubmit}></Button>
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
  margin: 10px 0;
  width: 100%;
`;

export default Login;
