import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthData } from "../store/authSlice"
import axios from "axios";
import { handleApiError } from "../utils/handleApiError";

const SignUp = () => {
  const { email, password, confirmPassword, school, nickname } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [code, setCode] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    school: "",
    nickname: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  }

  const handleVerification = async () => {
    const{ email, school } = formData;

    if(!email || !school){
      alert("모두 입력해주세요!")
      return;
    }

    try {
      const response = await axios.post("/auth/student/verify", {
        email,
        school
      })

      const data = await response.data;

      if(response.ok){
        setIsInputVisible(true);
      } else {
        handleApiError(response.status, data.code);
      }

      console.log(email+" "+school);
    } catch (error) {
      console.error("네트워크 오류:", error);
    }
  }

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  }

  const handleConfirmCode = async () => {
    const{ email, school } = formData;

    try {
      const response = await axios.post("/auth/student/confirm", {
        email,
        school,
        code
      })

      const data = await response.data;

      if(response.ok){
        console.log("인증 완료되었습니다.")
      } else {
        handleApiError(response.status, data.code);
      }

      console.log(email+" "+school);
    } catch (error) {
      console.error("네트워크 오류:", error);
    }
  }

  const handleSubmit = () => {
    if (!email || !password || !nickname || !confirmPassword) {
      alert("모든 입력값을 채워주세요!");
      return;
    }

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다!");
      return;
    }

    dispatch(setAuthData({ email, password, school, nickname }));
    console.log(email, password, school, nickname); // 입력값을 백엔드로 전송
  };

  return (
    <>
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="학교 이메일"
      />
      <Input
        type="text"
        name="school"
        value={formData.school}
        onChange={handleChange}
        placeholder="학교명"
      />
      <ButtonWrapper>
        <Button text="인증하기" onClick={handleVerification}></Button>
      </ButtonWrapper>
      {isInputVisible &&
        <VerificationWrapper>
            <VerificationInput
              type="text"
              value={code}
              onChange={handleCodeChange}
              placeholder="인증코드"
            />
            <ButtonWrapper>
              <Button text="확인" onClick={handleConfirmCode}></Button>
            </ButtonWrapper>
        </VerificationWrapper>
      }
      <Input
        type="text"
        name="nickname"
        value={formData.nickname}
        onChange={handleChange}
        placeholder="닉네임"
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        placeholder="아이디"
        readOnly
      />
      <Input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호"
      />
      <Input
        type="password"
        name="cofirmPassword"
        onChange={formData.handleChange}
        placeholder="비밀번호 확인"
      />
      <ButtonWrapper>
        <Button text="회원가입" onClick={handleSubmit}></Button>
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
  margin: 6px 0;
  font-size: 16px;
`;

const VerificationInput = styled.input`
  width: 90%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.lightgrey};
  padding: 20px;
  margin: 6px 0;
  font-size: 16px;
`;

const ButtonWrapper = styled.div`
  margin: 10px 0;
  width: 100%;
`;

const VerificationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex: 1;
`

export default SignUp;
