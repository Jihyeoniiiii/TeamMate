import styled from "styled-components";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setAuthData } from "../store/authSlice";
import { submitLogin } from "../api/auth";
import { processError } from "../utils/errorHandler";

const Login = () => {
  const { email, password } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  }

  const handleSubmit = async () => {
    if(!email || !password) {
      alert("모든 입력값을 채워주세요!");
      return;
    }

    dispatch(setAuthData({ email, password}));

    try {
      const data = submitLogin({email, password});
      console.log("로그인 성공");

      const accessToken = data.result.access_token;
      sessionStorage.setItem("access_token", accessToken);

      const refreshToken = data.result.refresh_token;
      localStorage.setItem("refresh_token", refreshToken);
    } catch (error) {
      processError(error);
    }
  }

  return (
    <>
      <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="아이디" />
      <Input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="비밀번호" />
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
